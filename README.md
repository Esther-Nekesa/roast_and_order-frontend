# ☕ Roast & Order

A full-stack Coffee Shop Ordering System built with **FastAPI (backend)** and **React + TailwindCSS (frontend)**.  
The system allows customers to browse products, add them to a cart, and place orders, while admins manage categories, products, and customer orders.

---

## Project Overview

Roast & Order is an e-commerce web application focused on selling coffee roasts and related food items.  
It provides:

- A **customer storefront** for browsing and ordering products
- An **admin dashboard** for managing inventory and viewing orders
- A clean and simple API powered by **FastAPI**
- A modern front-end using **React + TailwindCSS**

---

## Goals / Learning Outcomes

- Practice building a **RESTful API** with FastAPI
- Work with **database models & relationships**
- Implement **CRUD operations**
- Build a functional **React frontend**
- Understand **One-to-Many** and **Many-to-Many** relationships

---

## User Stories

### **Customer**

- As a customer, I want to **view all available food items** and filter them by category so I can easily find a product.
- As a customer, I want to **add items to a shopping cart**, review them, and **submit an order** securely.

### **Admin**

- As an admin, I want to **create, read, update, and delete (CRUD)** product listings and their categories to manage the store’s inventory.
- As an admin, I want to **view a detailed list of all customer orders** so that I can track and fulfill them efficiently.

---

## Database Models

The system includes the following entities:

| Model         | Description                                            |
| ------------- | ------------------------------------------------------ |
| **Category**  | A category of products (e.g., Dark Roast, Light Roast) |
| **Product**   | An item sold in the store                              |
| **Order**     | A customer order                                       |
| **OrderItem** | A join table storing products inside an order          |

### Relationships

- **Category → Products** = _One-to-Many_  
  A category can have many products, but a product belongs to exactly one category.

- **Products ↔ Orders** = _Many-to-Many_  
  Implemented using an `OrderItems` table that includes:
  - product_id
  - order_id
  - quantity

---

## Database Diagram (ERD)

DbDiagram link:  
🔗 **https://dbdiagram.io/d/692d7d34d6676488ba10843f**

---

## Technologies Used

### **Backend**

- FastAPI
- SQLAlchemy
- SQLite (or PostgreSQL/MySQL depending on deployment)
- Pydantic

### **Frontend**

- React (Vite)
- TailwindCSS
- Axios
- React Router

---

# Features

### **Customer**

- Browse all products
- Filter by category
- Add items to cart
- Submit order
- View order confirmation

### **Admin**

- Manage categories (CRUD)
- Manage products (CRUD)
- View all orders
- Inspect order items

---

# Project Structure

project/
│── backend/
│ ├── main.py
│ ├── models.py
│ ├── database.py
│ ├── routers/
│ │ ├── products.py
│ │ ├── categories.py
│ │ ├── orders.py
│
│── frontend/
├── src/
│ ├── App.jsx
│ ├── pages/
│ ├── components/
│ ├── api/api.js

---

# API Endpoints (Backend - FastAPI)

### **Categories**

| Method | Endpoint           | Description        |
| ------ | ------------------ | ------------------ |
| GET    | `/categories`      | Get all categories |
| POST   | `/categories`      | Create category    |
| PUT    | `/categories/{id}` | Update category    |
| DELETE | `/categories/{id}` | Delete category    |

---

### **Products**

| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| GET    | `/products`      | Get all products   |
| GET    | `/products/{id}` | Get product by ID  |
| POST   | `/products`      | Create new product |
| PUT    | `/products/{id}` | Update product     |
| DELETE | `/products/{id}` | Delete product     |

---

### **Orders**

| Method | Endpoint       | Description             |
| ------ | -------------- | ----------------------- |
| POST   | `/orders`      | Create a customer order |
| GET    | `/orders`      | View all orders         |
| GET    | `/orders/{id}` | View order details      |

---

# Frontend Pages

### **1. Home Page**

Simple introduction to the coffee shop.

### **2. Products Page**

- Displays all products
- Category filter
- Add to cart
- Floating cart sidebar

### **3. Admin Dashboard**

- Create new products
- Select category when creating a product
- View all products

### **4. Orders Page (Admin)**

- View all customer orders
- Shows number of items per order

---

# Setup Instructions

## 1️Clone the project

```bash
git clone <repo-url>
cd roast-and-order

2️ Backend Setup (FastAPI)
cd backend
pip install -r requirements.txt
uvicorn main:app --reload


Backend runs on:
 http://127.0.0.1:8000

3️ Frontend Setup (React + Vite)
cd frontend
npm install
npm run dev


Frontend runs on:
 http://localhost:5173
```
