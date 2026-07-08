from langchain_text_splitters import RecursiveCharacterTextSplitter
from loader import documents

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size = 500,
    chunk_overlap = 100
)

chunks = text_splitter.split_documents(documents)