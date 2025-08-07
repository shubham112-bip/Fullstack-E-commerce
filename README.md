# Fullstack-E-commerce
A full-featured e-commerce website built with Node.js, Express.js, MongoDB, and EJS. Implements JWT-based authentication, product management, cart and order system. Uses browser localStorage for storing JWT and cart data on the client side.

# E-Commerce Website

A full-featured e-commerce web application built using **Node.js**, **Express.js**, **MongoDB**, and **EJS**.  
Includes user authentication using **JWT**, session handling using **localStorage**, product management, shopping cart, and order system.

---

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Templating Engine**: EJS
- **Authentication**: JWT (Bearer Token)
- **Client-Side**: HTML, CSS, JavaScript, Bootstrap
- **Storage**: localStorage (for JWT and cart)

---

## Folder Structure

```
ecommerce-app/
├── config/             --> MongoDB config
├── controllers/        --> Route logic (products, auth, orders)
├── middleware/         --> JWT middleware
├── models/             --> User, Product, Order schemas
├── public/             --> CSS, JS, images
├── routes/             --> auth, product, cart routes
├── views/              --> EJS templates
├── .env                --> Environment variables
├── .gitignore
├── package.json
├── server.js           --> Main entry point
```

---

## Environment Variables (.env)

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/ecommerceApp
JWT_SECRET=myverysecuresecretkey123
```

---

## Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/shubham112-bip/Fullstack-E-commerce.git

# 2. Navigate to the project folder
cd ecommerce-app

# 3. Install dependencies
npm install

# 4. Set up your .env file
#    Use the above .env example

# 5. Run the development server
npm start
```

Server will run at: `http://localhost:3000`

---

## Features

- User Registration & Login (JWT)
- Secure password hashing with bcrypt
- Product listing and details
- Shopping cart (stored in browser localStorage)
- Order placement
- Authentication-protected routes
- Responsive frontend using EJS + Bootstrap

---

## Dependencies

```json
{
  "bcrypt": "^5.1.0",
  "body-parser": "^1.20.2",
  "cookie-parser": "^1.4.6",
  "dotenv": "^16.4.5",
  "ejs": "^3.1.9",
  "express": "^4.18.2",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^7.6.1",
  "morgan": "^1.10.0",
  "nodemon": "^3.1.0"
}
```

---

## How JWT & localStorage Work

- On login, server issues a JWT token.
- Token is stored in the user's browser localStorage.
- Every authenticated API request uses the token in `Authorization: Bearer <token>` header.
- Middleware verifies JWT on protected routes (like cart, checkout, profile).

---

## License

This project is open-source and available under the [MIT License](LICENSE).
