# 📚 BookNest

**BookNest** is a personal book management web application that helps users organize, track, and manage their reading journey efficiently. Built with **Next.js**, **NextAPI**, **MongoDB**, and **TailwindCSS**, it offers a clean, modern, and responsive interface for a seamless user experience.

---

## 🚀 Features

### Core Functionality

- **User Authentication**

  - Secure account creation and login
  - Passwords hashed with **bcryptjs**
  - JWT-based authentication for secure sessions

- **Book Management**

  - Add books with title, author, status, and tags
  - Edit or delete books with confirmation popups
  - Filter books by reading status (Reading, Completed, Want-to-Read)
  - Search books by title or author
  - Organize books using custom tags

- **Dashboard & Insights**

  - View total books, currently reading, and completed books stats
  - Modern cards with interactive hover effects
  - Dynamic book list with tags and status badges

### UI & UX Features

- Responsive **landing page** with:

  - Navbar
  - Hero section
  - Features section
  - Reading status overview
  - How it works section
  - Dashboard preview
  - Call-to-action section
  - Footer

- **Dashboard pages** include:

  - Book list with search and filters
  - Add/Edit/Delete book modal popups
  - Clean and modern TailwindCSS styling

---

## 🛠️ Tech Stack

| Layer          | Technology                        |
| -------------- | --------------------------------- |
| Frontend       | Next.js, TailwindCSS              |
| Backend API    | NextAPI Routes                    |
| Database       | MongoDB, Mongoose                 |
| Authentication | JWT, bcryptjs                     |
| State & UI     | React Hooks (useState, useEffect) |

---

## 🔒 Security

- Passwords are securely **hashed** using **bcryptjs**
- **JWT tokens** manage authenticated sessions
- Protected API routes ensure only authorized users can access their books

---

## ⚡ Installation

1. Clone the repository:

```bash
git clone https://github.com/pawantech12/booknest---personal-book-manager.git
cd booknest---personal-book-manager
```

2. Install dependencies:

```bash
pnpm install
```

3. Create `.env.local` and add:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

4. Run the development server:

```bash
pnpm run dev
```

Visit `http://localhost:3000` in your browser.

---

## 🔧 Usage

- Sign up for a new account
- Add books to your personal library
- Track reading progress and update status
- Use tags and filters to organize books
- View dashboard insights for an overview of your collection

---

## 🎨 UI Preview

**Landing Page** | **Dashboard** | **Book List**

- Clean, responsive design using **TailwindCSS**
- Interactive dashboard cards and modals
- Hover effects, gradient status badges, and searchable book list

---

## 💡 Future Enhancements

- User profile with avatar and preferences
- Reading progress tracker with percentages
- Export books to CSV/PDF
- Notifications for reading goals

---
