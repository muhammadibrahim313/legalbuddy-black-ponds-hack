# LegalBuddy

**AI-Powered Legal Document Analysis Platform**

LegalBuddy accelerates and enhances the way legal professionals review and analyze documents. By combining robust AI services with an intuitive interface, LegalBuddy delivers accurate summaries, liability assessments, and an intelligent Q\&A system—securely and at scale.

---

## 🚀 Key Features

* **Document Management**: Create projects and upload documents in multiple formats (PDF, DOCX, images).
* **AI-Powered Summaries**: Instant, concise overviews generated via OpenAI/Groq.
* **Liability Analysis**: Percentage-based risk assessments powered by vector search over case law.
* **Interactive Q\&A**: Ask questions in natural language and receive context-aware answers.
* **Professional Reports**: Export comprehensive PDF reports with branding and formatting.
* **Secure Access**: JWT authentication, role-based permissions, and encrypted data storage.

---

## 💡 Architecture Overview

### Backend (Django REST Framework)

* **Framework**: Django + Django REST Framework
* **Document Parsing**: LlamaParse for structured extraction
* **Data Store**: MongoDB with vector and text indices
* **AI Integration**: OpenAI, Groq, and Hugging Face embeddings
* **Auth**: JWT-based user sessions
* **Deployment**: Optimized for Railway (primary) and Vercel (serverless)

#### Backend Setup

1. Install packages:

```bash
pip install -r requirements.txt
```

2. Configure environment:

```bash
cp .env.example .env
# Populate OPENAI_KEY, MONGO_URI, SECRET_KEY, etc.
```

3. Apply migrations and start:

```bash
python manage.py migrate
python manage.py runserver
```

### Frontend (React + TypeScript)

* **UI Library**: Material UI
* **State Management**: React Context + Axios
* **Routing**: React Router
* **Auth Flow**: JWT tokens stored in HTTP-only cookies
* **Deployment**: Vercel for instant global CDN

#### Frontend Setup

1. Install dependencies:

```bash
npm install
```

2. Configure environment:

```bash
cp .env.example .env
# Set REACT_APP_API_URL, etc.
```

3. Run dev server:

```bash
npm run dev
```

---

## 🌐 Deployment

1. **Backend**: Connect the Django API to Railway, setting environment variables and build commands in `railway.json`.
2. **Frontend**: Link your GitHub repo to Vercel, configure the build (`npm run build`) and output directory (`dist/`).

---

## 📂 Project Structure

```text
(backend/)
├─ api/          # Views, serializers, utilities
├─ settings/     # Environment configs
├─ urls.py       # Endpoint routing
└─ ...

(frontend/)
├─ src/
│  ├─ components/ # Reusable UI
│  ├─ pages/      # Routes
│  ├─ api/        # HTTP handlers
│  └─ context/    # Auth/state
└─ public/       # Static assets
```

---

## 🛠️ Tech Stack

* **Backend**: Django, Django REST Framework
* **Frontend**: React, TypeScript, Material UI
* **Database**: MongoDB (vector & text search)
* **AI/ML**: OpenAI, Groq, Hugging Face
* **Parsing**: LlamaParse
* **Auth**: JWT

---

## 🤝 Contributing & Support

* **API Docs**: See `/docs` for OpenAPI schema.
* **Issue Tracker**: Create issues on GitHub for bug reports or feature requests.
* **Community**: Join our Slack channel to collaborate and ask questions.

---

*LegalBuddy—Transforming legal workflows with intelligence and speed.*
