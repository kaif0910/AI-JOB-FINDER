# 🚀 Career Copilot

> **Your AI-powered career assistant that analyzes your resume, answers career-related questions, finds relevant jobs, and generates personalized improvement reports.**

🌐 **Live Demo:** https://www.careercopilot.live

---

## 📌 Overview

Career Copilot is an AI-powered web application designed to help job seekers improve their resumes, prepare for interviews, and discover relevant job opportunities.

Simply upload your resume and interact with the AI assistant in natural language. The application understands your experience, skills, and projects to provide personalized career guidance.

---

## ✨ Features

- 📄 Upload and analyze your resume
- 💬 AI-powered career chatbot
- 🔍 AI-based job search
- 📊 Personalized resume analysis report
- 🎯 Skill gap identification
- 📈 Career roadmap suggestions
- 🧠 Conversation history
- ⚡ Session-based resume isolation (multi-user support)
- 📱 Fully responsive modern UI
- 🚀 Production deployment with custom domain

---

## 🖥️ Live Application

**Frontend**

👉 https://www.careercopilot.live

Backend is deployed on Render.


# 🏗️ Architecture

```
                   ┌─────────────────────┐
                   │     React + Vite    │
                   │     (Frontend)      │
                   └──────────┬──────────┘
                              │
                         HTTPS Requests
                              │
                              ▼
                  ┌────────────────────────┐
                  │     FastAPI Backend    │
                  └──────────┬─────────────┘
                             │
          ┌──────────────────┼─────────────────┐
          │                  │                 │
          ▼                  ▼                 ▼
     LangGraph          Groq LLM         PDF Processing
          │
          ▼
    Resume Context
          │
          ▼
 AI Career Assistant
```

---

# 🛠️ Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- Lucide Icons

---

## Backend

- FastAPI
- LangGraph
- LangChain
- Groq
- Pydantic
- ReportLab
- SlowAPI

---

## AI

- Meta Llama 3.3 70B (Groq)
- LangGraph Workflow
- Prompt Engineering

---

## Deployment

- Vercel (Frontend)
- Render (Backend)
- Custom Domain

---

# ⚙️ How It Works

### 1. Upload Resume

The user uploads a resume in PDF format.

↓

### 2. Resume Processing

The backend extracts all text using PyPDFLoader.

↓

### 3. Session Isolation

Every browser gets a unique session ID.

The extracted resume is stored in memory for that session only.

```
Session A
    ↓
Resume A

Session B
    ↓
Resume B
```

↓

### 4. AI Processing

The AI combines:

- Resume Context
- User Question
- Prompt Templates

↓

### 5. Response

Career Copilot returns:

- Resume insights
- Job recommendations
- Career advice
- Interview guidance
- Personalized reports

---

# 📂 Project Structure

```
career-copilot/

│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── api/
│   ├── hooks/
│   └── utils/
│
├── backend/api
│   ├── api/
│   ├── graph/
│   ├── prompts/
│   ├── services/
│   ├── reports/
│   ├── uploads/
│   └── utils/
│
└── README.md
```

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/yourusername/career-copilot.git

cd career-copilot
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn app:app --reload
```

---

# Environment Variables

## Frontend

Create

```
.env
```

```env
VITE_API_URL=http://localhost:8000
```

---

## Backend

Create

```
.env
```

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY
```

---

# AI Workflow

```
User Question
        │
        ▼
Intent Classification
        │
        ▼
Resume Retrieval
        │
        ▼
Job Search (Optional)
        │
        ▼
LLM Response
        │
        ▼
Career Copilot Reply
```

---

# Current Limitations

- Resume data is stored in server memory and is cleared when the backend restarts.
- No user authentication.
- No persistent database.
- Session-based storage only.

---

# Future Improvements

- User Authentication (JWT)
- PostgreSQL Database
- Redis Session Storage
- Resume Version History
- Streaming AI Responses
- Vector Database (Chroma/Pinecone)
- Resume Embeddings
- Interview Preparation Module
- AI Mock Interviews
- Email Reports
- Resume Scoring Dashboard

---

# Performance Optimizations

- Session-based resume isolation
- Rate limiting using SlowAPI
- Responsive React UI
- Optimized API requests
- Fast PDF parsing
- Lightweight in-memory context retrieval

---

# Security

- CORS configured
- Rate limiting
- Session isolation
- Secure environment variables
- Unique session IDs for each browser

---

# Contributing

Contributions are welcome!

1. Fork the repository

2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# License

This project is licensed under the MIT License.

---

# Author

**MD Kaif Perwez**

GitHub: https://github.com/kaif0910

LinkedIn: https://www.linkedin.com/in/md-kaif-perwez/

---

# Show Your Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates future improvements.