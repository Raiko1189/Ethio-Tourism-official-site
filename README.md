# 🇪🇹 EthioGuide AI: The Soul of Ethiopia
### A Premium AI-Powered Tourism & Investment Ecosystem

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/Frontend-React%2019-blue?logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/Build-Vite-646CFF?logo=vite)](https://vitejs.dev/)
[![Generative AI](https://img.shields.io/badge/AI-Gemini%20Pro-4285F4?logo=google)](https://ai.google.dev/)

EthioGuide AI is not just a travel website; it is an intelligent gateway to the **Land of Origins**. Built for the modern traveler and the serious investor, this platform leverages state-of-the-art **Retrieval-Augmented Generation (RAG)** to provide a personalized, high-fidelity experience of Ethiopia's heritage and economic potential.

## 🖼️ Visual Showcase

### Hero Experience
![EthioGuide AI Hero](./frontend/src/assets/home_page.png)
*A premium landing experience featuring immersive storytelling.*

### Explore Destinations Portal
![](./frontend/src/assets/Destination.png)
*Explore Destinations — an interactive exploration page showcasing Ethiopia's regions, curated itineraries, maps, and filters for travelers to discover places of interest.*

### Admin Intelligence Portal
![Chatbot Dashboard](./frontend/src/assets/chatbot.png)
*Chatbot — a conversational, RAG-powered travel assistant that provides personalized recommendations and fact-backed answers from uploaded documents and local knowledge.*

---

## �️ Project Vision
Our mission is to bridge the gap between ancient history and digital innovation. By utilizing AI, we offer a "virtual guide" that has read every historical text and travel advisory, ensuring that every visitor to Ethiopia begins their journey with confidence and curiosity.

## ✨ Core Pillars

### 1. Intelligent Concierge (RAG)
Unlike standard chatbots, our AI guide uses a custom-built knowledge base. Admin-uploaded documents (PDFs, research papers, tourism guides) are chunked, embedded, and stored to ensure the AI's responses are **grounded in truth** and specific to Ethiopian geography and culture.

### 2. Immersive Discovery
High-quality imagery and fluid, premium animations (powered by Framer Motion) create a "gallery-first" experience. Each destination is presented with its unique "soul" and story.

### 3. Investment Hub
A data-driven portal for global investors, providing real-time satisfaction stats and market reach data, positioning Ethiopia as Africa's premier economic frontier.

## 🏗️ Technical Architecture

### The AI Pipeline
1. **Ingestion**: PDFs and DOCs are uploaded through the secure Admin Dashboard.
2. **Processing**: Text is extracted using `pdf-parse` and `mammoth`, then split into semantic chunks.
3. **Embedding**: Chunks are transformed into high-dimensional vectors via Google's `text-embedding-004`.
4. **Retrieval**: When a user asks a question, the system finds the most relevant context from the database.
5. **Generation**: Gemini Pro synthesizes the final response using the retrieved context, ensuring 0% hallucination.

### Tech Stack Details
- **Frontend**: React 19 (Hooks, Context API), Vite for ultra-fast HMR, Framer Motion for premium UI/UX.
- **Backend**: Express.js (ESM), MongoDB Atlas for persistent storage, Multer for secure file handling.
- **Security**: JWT-based authentication, Google OAuth 2.0, Protected Admin Routes.

---

## � Demo & Access

For evaluators and reviewers:

| Portal | URL | Credentials |
|--------|-----|-------------|
| **Admin Dashboard** | `/admin` | Email: `hirkowak123@gmail.com` / Pass: `123456` |
| **Travel Chat** | `/chat` | Public Access |

---

## 🛠️ Quick Start

### Backend
```bash
cd backend
npm install
# Configure .env with MONGODB_URI and GOOGLE_API_KEY
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## � Roadmap & Future Impact
- [ ] **Ethiolingual Support**: Multilingual AI support including Amharic, Oromiffa, and Tigrinya.
- [ ] **Virtual Reality (VR) Integration**: 360-degree tours of the Simien Mountains and Lalibela.
- [ ] **Blockchain Bookings**: Secure, transparent hotel and guide reservation system.
- [ ] **Eco-Tourism Tracking**: Impact monitoring for sustainable travel initiatives.

---

## 👨‍💻 Developed By
**Reiko Wakbeka**  
*Full Stack Developer & AI Enthusiast*

---
*© 2026 EthioGuide AI. All Rights Reserved.*
