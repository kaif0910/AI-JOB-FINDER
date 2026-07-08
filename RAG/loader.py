from langchain_community.document_loaders import PyPDFLoader

loader = PyPDFLoader("resume.pdf")

documents = loader.load()  # list of document objects . each page becomes one document

print(type(documents))
print(type(documents[0]))
print(documents[0])