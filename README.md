# 🚀 Potenz Dashboard

A modern React-based dashboard application with authentication, product listing, and user profile management using **DummyJSON API**.

---

## 📌 Features

* 🔐 User Authentication (Login / Logout)
* 🧠 Global State Management using React Context API
* 🔒 Protected Routes (Private Routing)
* 📦 Product Listing with Pagination
* 🔍 Product Detail View
* 👤 User Profile Page
* 🎨 Responsive UI with Bootstrap
* ⚡ Axios API Integration

---

## 🛠️ Tech Stack

* **Frontend:** React.js, React Router DOM
* **State Management:** Context API + Custom Hooks
* **Styling:** Bootstrap + CSS Modules
* **API:** DummyJSON
* **HTTP Client:** Axios

---

## 📂 Project Structure

```
src/
│── api/
│   └── api.js
│
│── components/
│   └── Navbar.jsx
│
│── context/
│   └── AuthContext.js
│
│── pages/
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── Profile.jsx
│   ├── Products.jsx
│   └── ProductDetail.jsx
│
│── routes/
│   └── PrivateRoute.jsx
│
│── App.jsx
│── main.jsx
```

---

## 🔑 Authentication Flow

1. User logs in using credentials
2. API verifies user via DummyJSON
3. User data is stored in React Context (in-memory)
4. Protected routes become accessible
5. Logout clears user state

⚠️ Note: Authentication is session-based (data resets on page refresh)

---

## 🌐 API Endpoints Used

Base URL:

```
https://dummyjson.com
```

* `POST /auth/login` → Login
* `GET /products` → Fetch products
* `GET /products/:id` → Product details

---

## ▶️ Getting Started

### 1. Clone the Repository

```
git clone https://github.com/your-username/potenz-dashboard.git
cd potenz-dashboard
```
---

### 2. Install Dependencies

```
npm install
```

---

### 3. Run the App

```
npm run dev
```

---

## 🔐 Demo Credentials

Use DummyJSON test credentials:

```
Username: kminchelle
Password: 0lelplR
```



## 💡 Future Improvements

* ✅ Persistent Authentication (JWT / Cookies)
* ✅ Axios Interceptors
* ✅ Loading & Error Handling UI
* ✅ Role-based Access Control
* ✅ Dark Mode UI

---

## 🙌 Author

**Dhruv Dubal**

* GitHub: https://github.com/Dhruv-tech0810
* LinkedIn: https://www.linkedin.com/in/dhruv-dubal-0978a9307/

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and share it!
    