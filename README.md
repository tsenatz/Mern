<h1 align="center">Think Board</h1>

<p align="center"><b>A simple full-stack note-taking app built with the MERN stack.</b></p>

---

## About

- Create, view, edit, and delete notes.
- React frontend with a REST API backend built on Express and MongoDB.
- API requests are rate limited with Upstash Redis to prevent spam.
- Clean, responsive interface with a dark theme.

## Tech Stack

**Frontend**

![React](https://img.shields.io/badge/REACT-0B1F4B?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/VITE-0B1F4B?style=for-the-badge&logo=vite&logoColor=646CFF)
![Tailwind CSS](https://img.shields.io/badge/TAILWIND_CSS-0B1F4B?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8)
![DaisyUI](https://img.shields.io/badge/DAISYUI-0B1F4B?style=for-the-badge&logo=daisyui&logoColor=white)
![Axios](https://img.shields.io/badge/AXIOS-0B1F4B?style=for-the-badge&logo=axios&logoColor=white)

**Backend and APIs**

![Node.js](https://img.shields.io/badge/NODE.JS-0B1F4B?style=for-the-badge&logo=nodedotjs&logoColor=5FA04E)
![Express](https://img.shields.io/badge/EXPRESS-0B1F4B?style=for-the-badge&logo=express&logoColor=white)
![REST APIs](https://img.shields.io/badge/REST_APIS-0B1F4B?style=for-the-badge&logo=postman&logoColor=FF6C37)

**Database and Services**

![MongoDB](https://img.shields.io/badge/MONGODB-0B1F4B?style=for-the-badge&logo=mongodb&logoColor=47A248)
![Redis](https://img.shields.io/badge/UPSTASH_REDIS-0B1F4B?style=for-the-badge&logo=redis&logoColor=DC382D)

## Features

- Full CRUD for notes, with newest notes shown first
- Dedicated pages for creating and viewing or editing a note
- Delete from the note card or the detail page, with confirmation
- Rate limiting of 10 requests per 20 seconds, returning HTTP 429
- Rate limit banner, toast notifications, and an empty state for new users

## API Endpoints

| Method | Endpoint         | Description                |
| ------ | ---------------- | -------------------------- |
| GET    | `/api/notes`     | Get all notes              |
| GET    | `/api/notes/:id` | Get a single note          |
| POST   | `/api/notes`     | Create a note              |
| PUT    | `/api/notes/:id` | Update a note              |
| DELETE | `/api/notes/:id` | Delete a note              |

## Getting Started

**Prerequisites:** Node.js, a MongoDB Atlas database, and an Upstash Redis instance.

**1. Clone the repository**

```bash
git clone https://github.com/tsenatz/Mern
cd Mern
```

**2. Set up the backend**

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```env
PORT=5001
MONGOS_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
```

Start the server:

```bash
npm run dev
```

**3. Set up the frontend**

```bash
cd frontend
npm install
npm run dev
```

The frontend runs on `http://localhost:5173` and connects to the API at `http://localhost:5001/api`.

## Project Structure

```
Mern/
├── backend/     Express API, models, controllers, rate limiter
└── frontend/    React app, pages, components
```

## Author

**Tsenat Z**

[![GitHub](https://img.shields.io/badge/GITHUB-TSENATZ-0B1F4B?style=for-the-badge&logo=github&logoColor=white)](https://github.com/tsenatz)
[![LinkedIn](https://img.shields.io/badge/LINKEDIN-TSENAT--Z-0B1F4B?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/tsenat-z)
