from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_chroma import Chroma


class RAGEngine:          # RAG runtime 

    def __init__(self):
        self.embedding_model = HuggingFaceEmbeddings(
            model_name="sentence-transformers/all-MiniLm-l6-v2"
        )

        self.vector_store = None
        self.retriever = None

    def load_resume(self, pdf_path: str):

        self.loader = PyPDFLoader(pdf_path)
        self.documents = self.loader.load()
        self.text_splitter = RecursiveCharacterTextSplitter(
            chunk_size = 500,
            chunk_overlap = 100
        )
        self.chunks = self.text_splitter.split_documents(self.documents)

        self.vector_store  = Chroma(
            collection_name="resume",
            embedding_function=self.embedding_model,
            persist_directory="./chroma.db"
        )

        self.vector_store.add_documents(self.chunks)

        self.retriever = self.vector_store.as_retriever()

    def search(self, question: str):
        docs = self.retriever.invoke(question)
        context = "\n\n".join(
            doc.page_content
            for doc in docs:
        )
        return context