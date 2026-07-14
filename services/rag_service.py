from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_chroma import Chroma
import os
from dotenv import load_dotenv

load_dotenv()


class RAGService:

    def __init__(self):
        self.embedding_model = None

        self.vector_store = None
        self.retriever = None

    def initialize(self):
        if self.embedding_model is not None:
            return 
        print("Loading Embedding Model...")
        self.embedding_model = HuggingFaceEmbeddings(
            model_name="sentence-transformers/all-MiniLM-L6-v2"
        )
        print("Embedding Model Loaded.")
    def load_resume(self, pdf_path: str, collection_name= "resume") -> None:

        self.initialize()
        # Load PDF
        loader = PyPDFLoader(pdf_path)
        documents = loader.load()

        # Split into chunks
        splitter = RecursiveCharacterTextSplitter(
            chunk_size=800,
            chunk_overlap=150
        )

        chunks = splitter.split_documents(documents)

        # Create vector database
        self.vector_store = Chroma(
            collection_name=collection_name,
            embedding_function=self.embedding_model,
            persist_directory="./chroma_db"
        )

        self.vector_store.reset_collection()
        # Store chunks
        self.vector_store.add_documents(chunks)

        # Create retriever
        self.retriever = self.vector_store.as_retriever(
            search_type= "mmr",
            search_kwargs={
                "k": 3,
                "fetch_k": 15
            }
        )

    def search(self, question: str) -> str:

        if self.retriever is None:
            raise Exception("Resume has not been loaded.")

        docs = self.retriever.invoke(question)

        context = "\n\n".join(
            doc.page_content
            for doc in docs
        )

        return context


rag_service = RAGService()   #singleton instance