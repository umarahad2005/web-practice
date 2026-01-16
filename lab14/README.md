# Lab 14: MERN Stack CRUD - E-Commerce Product Management

## Aim
To create a simple E-Commerce CRUD application using MERN Stack where products are managed using MongoDB, Express, React, and Node.js.

## Features
- **Add a product** (Create)
- **View all products** (Read)
- **Update a product** (Update)
- **Delete a product** (Delete)

## Product Fields
- `name` - Product name
- `price` - Product price
- `description` - Product description

## Project Structure
```
lab14/
├── backend/
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── server.js
│   └── package.json
└── frontend/
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── App.js
    │   ├── ProductForm.js
    │   ├── ProductList.js
    │   └── index.js
    └── package.json
```

## Setup Instructions

### Prerequisites
- Node.js installed
- MongoDB installed and running locally (or MongoDB Atlas)
- VS Code
- Postman (for API testing)

### Backend Setup
1. Open terminal and navigate to backend folder:
   ```bash
   cd lab14/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start MongoDB service (if using local MongoDB)

4. Start the backend server:
   ```bash
   npm start
   ```
   Server will run on `http://localhost:5000`

### Frontend Setup
1. Open a new terminal and navigate to frontend folder:
   ```bash
   cd lab14/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React app:
   ```bash
   npm start
   ```
   App will run on `http://localhost:3000`

## API Endpoints (Test with Postman)

| Method | URL | Purpose |
|--------|-----|---------|
| POST | http://localhost:5000/products | Create product |
| GET | http://localhost:5000/products | Get all products |
| PUT | http://localhost:5000/products/:id | Update product |
| DELETE | http://localhost:5000/products/:id | Delete product |

### Sample POST Request Body
```json
{
    "name": "Laptop",
    "price": 999,
    "description": "High performance laptop"
}
```

## Technologies Used
- **MongoDB** - Database
- **Express.js** - Backend framework
- **React.js** - Frontend library
- **Node.js** - Runtime environment

## Conclusion
This lab demonstrates a complete CRUD cycle using MERN Stack in a simple E-Commerce scenario, suitable for beginners and university practical sessions