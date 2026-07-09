from langchain_chroma import Chroma
from embeddings import embedding_model

vector_store  = Chroma(
    collection_name="resume",
    embedding_function=embedding_model,
    persist_directory="./chroma.db"
)

vector_store.add_documents(chunks)

retriever = vector_store.as_retriever()

docs = retriever.invoke(
    "what backend technologies do i know?"
)