from langchain_community.document_loaders import PyPDFLoader

loader = PyPDFLoader("resume.pdf")

documents = loader.load()

print(documents)