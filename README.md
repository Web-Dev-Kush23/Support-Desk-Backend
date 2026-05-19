# Support Desk Backend API – XtendedSpace

````md
# 🛠️ XtendedSpace Support Desk Backend

Backend API server for the **XtendedSpace Support Desk Application** built using **Node.js**, **Express.js**, and **MongoDB**.

This backend handles:

- User Authentication
- Ticket Management
- File Uploads
- MongoDB Database Connection
- REST API Services

# 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- dotenv
- cors

# 📂 Project Structure

```bash
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│
├── middleware/
│
├── models/
│
├── routes/
│   ├── authRoutes.js
│   └── ticketRoutes.js
│
├── uploads/
│
├── .env
├── server.js
├── package.json
└── README.md
````

# ⚙️ Installation

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/xtendedspace-supportdesk-backend.git
```

## 2️⃣ Navigate to Project Folder

```bash
cd xtendedspace-supportdesk-backend
```

## 3️⃣ Install Dependencies

```bash
npm install
```

# 🔑 Environment Variables

Create a `.env` file in the root directory.

Example:

```env
PORT=4000

MONGO_URI=mongodb://127.0.0.1:27017/supportdesk

FRONTEND_URL=http://localhost:3000

JWT_SECRET=your_jwt_secret_key
```

# ▶️ Run the Server

## Development Mode

```bash
npm run dev
```

## Production Mode

```bash
npm start
```

# ✅ Server Features

## 🔐 Authentication APIs

* Register User
* Login User
* JWT Authentication
* Protected Routes

## 🎫 Ticket APIs

* Create Ticket
* Get All Tickets
* Get Single Ticket
* Update Ticket Status
* Delete Ticket

## 📁 File Upload Support

Uploaded files are stored inside:

```bash
/uploads
```

Static access route:

```bash
http://localhost:4000/uploads
```

# 🌐 API Base URL

```bash
http://localhost:4000/api
```

# 📌 API Endpoints

## Auth Routes

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | /api/auth/register | Register new user |
| POST   | /api/auth/login    | Login user        |

## Ticket Routes

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | /api/tickets     | Get all tickets   |
| GET    | /api/tickets/:id | Get single ticket |
| POST   | /api/tickets     | Create new ticket |
| PUT    | /api/tickets/:id | Update ticket     |
| DELETE | /api/tickets/:id | Delete ticket     |

# 🧩 MongoDB Connection

Database connection is handled using:

```js
connectDB(process.env.MONGO_URI)
```

If MongoDB connection fails, server startup is stopped automatically.

# 🛡️ CORS Configuration

```js
app.use(cors({ origin: FRONTEND_URL }));
```

Allows frontend access only from configured frontend URL.

# 📦 Important Packages

Install required packages:

```bash
npm install express mongoose dotenv cors jsonwebtoken bcryptjs multer
```

Development dependency:

```bash
npm install --save-dev nodemon
```

# 📜 Scripts

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

# 🧪 Testing API

You can test APIs using:

* Postman
* Thunder Client
* Insomnia

# 🚀 Deployment

You can deploy this backend on:

* Render
* Railway
* Cyclic
* VPS
* AWS EC2
* DigitalOcean

# 👨‍💻 Developed For

## XtendedSpace Support Desk System

Frontend: Next.js
Backend: Node.js + Express.js
Database: MongoDB

Website:

[https://www.xtendedspace.com](https://www.xtendedspace.com)

# 📄 License

This project is licensed under the MIT License.

# ✨ Author

Developed by Himanshu Kushwaha

```
```
