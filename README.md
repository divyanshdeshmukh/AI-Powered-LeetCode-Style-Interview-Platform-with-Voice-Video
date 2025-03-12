
# AI-Powered Technical Interview Application

## Project Structure

```
ai-interview-app/
│── backend/                     # Backend code (Node.js + Express)
│   ├── controllers/              # Business logic
│   ├── models/                   # Database models
│   ├── routes/                   # API endpoints
│   ├── services/                 # AI + Code execution services
│   ├── db.ts                     # PostgreSQL connection
│   ├── server.ts                 # Entry point for backend
│
│── frontend/                     # Frontend code (React + Vite)
│   ├── components/               # Reusable UI components
│   ├── pages/                    # Application pages
│   ├── hooks/                    # Custom React hooks
│   ├── services/                 # API calls to backend
│   ├── contexts/                 # Global state management
│   ├── styles/                   # Styling (Tailwind)
│   ├── App.tsx                   # Main app component
│
│── ai-model/                     # AI logic
│   ├── prompts/                  # Predefined prompts for interview flow
│   ├── interview_agent.py        # AI logic
│
│── code-execution/               # Secure Code Execution
│   ├── sandbox/                  # Runs user code in isolation
│   ├── dockerfiles/              # Docker setup for execution
│
│── database/                     # SQL schema & migrations
│   ├── schema.sql                # Database tables
│   ├── migrations/               # Database migrations
```

## Getting Started

### Prerequisites

- Node.js (v16+)
- Python (v3.8+) for AI components
- Docker for code execution sandbox

### Installation

1. Clone the repository
```sh
git clone <repository-url>
cd ai-interview-app
```

2. Install dependencies
```sh
npm install
```

3. Start the development server
```sh
npm run dev
```

## Features

- AI-powered technical interviews
- Real-time code editing and execution
- Multiple programming language support
- Performance analytics
- Interview feedback and suggestions

## Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **AI**: Python-based interview agent
- **Code Execution**: Docker-based sandbox environment
