# Experience India – Destination Explorer (MEAN Stack)

## Overview
Experience India – Destination Explorer is a MEAN stack application designed to surface destinations, food spots, hostels, and traveler reviews through a single, cohesive JavaScript stack.

## Stack
- **MongoDB** for destination, food, hostel, and review data.
- **Express.js** for REST APIs and routing.
- **Angular** for the frontend experience.
- **Node.js** for server-side runtime.

## Project Structure
```
.
├── server.js
├── package.json
└── src
    └── routes
        ├── destinations.js
        ├── food-spots.js
        ├── hostels.js
        └── reviews.js
```

## Setup
1. Install dependencies:

```bash
npm install
```

2. Start the API server:

```bash
npm start
```

By default the server connects to:
```
mongodb://localhost:27017/experienceIndia
```

To override, set `MONGODB_URI` and `PORT`.

## API Endpoints
| Method | Route | Description |
| --- | --- | --- |
| GET | `/` | Health check |
| GET | `/api/destinations` | List destinations |
| GET | `/api/destinations/:id` | Destination detail |
| GET | `/api/food-spots` | List food spots |
| GET | `/api/hostels` | List hostels |
| GET | `/api/reviews` | List reviews |

## Next Steps
- Replace mock responses with MongoDB collections.
- Add POST/PUT/DELETE endpoints for admin workflows.
- Wire Angular services to the Express APIs.
