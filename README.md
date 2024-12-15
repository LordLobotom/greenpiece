# GreenPiece - CO2 Savings Calculator

A modern web application to track and calculate CO2 savings from alternative transportation methods.

## Features

- User registration and authentication
- Personal CO2 savings calculator
- Interactive data visualization
- Progress tracking and achievements
- Social sharing capabilities

## Tech Stack

- Backend: FastAPI with PostgreSQL
- Frontend: React with Tailwind CSS
- Authentication: JWT with OAuth 2.0 support

## Getting Started

### Prerequisites

- Python 3.8+
- Node.js 16+
- PostgreSQL

### Backend Setup

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
cd backend
pip install -r requirements.txt
```

3. Set up PostgreSQL database:
- Create a database named 'greenpiece'
- Update database credentials in `app/database.py` if needed

4. Run the backend server:
```bash
uvicorn app.main:app --reload
```

### Frontend Setup

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Start the development server:
```bash
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Documentation: http://localhost:8000/docs

## Development

- Backend API documentation is available at `/docs` endpoint
- Frontend development server includes hot-reloading
- Use `npm run build` to create production build

## Security Features

- Password hashing with bcrypt
- JWT authentication
- CAPTCHA protection
- Rate limiting
- CORS protection
