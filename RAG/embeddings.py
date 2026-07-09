from langchain_huggingface import HuggingFaceEmbeddings

embedding_model = HuggingFaceEmbeddings(
    model_name = "sentence-transformers/all-MiniLm-l6-v2"
)


vector = embedding_model.embed_query(
    "Python fastAPI Redis"
)

print(type(vector))
print(len(vector))
print(vector[:10])