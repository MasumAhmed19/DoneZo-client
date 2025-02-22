Thanks for the clarification! I’ve updated the README to reflect that **@hello-pangea/dnd** is used for drag-and-drop functionality instead of **Dnd Kit**. Here’s the revised version:  

---

# 📝 DONEZO – Get things done in style 

A simple and intuitive **Task Management Application** where users can **add, edit, delete, and reorder tasks** seamlessly using a **drag-and-drop interface** powered by **@hello-pangea/dnd**. Tasks are categorized into three sections: **To-Do, In Progress, and Done**, with instant data persistence using Firebase.  

## 📖 Table of Contents  
- [ LiveLink](https://donezo-e4856.web.app/)  
- [ Client Repo](https://github.com/MasumAhmed19/DoneZo-client)  
- [ Server Repo](https://github.com/MasumAhmed19/DoneZo-server) 

## 📖 Table of Contents  
- [🚀 Features](#-features)  
- [🛠 Tech Stack](#-tech-stack)  
- [📦 Installation](#-installation)  
- [⚡ Usage](#-usage)  
- [⚙️ Configuration](#-configuration)  
- [🔧 Development & Contribution](#-development--contribution)  
- [🐛 Troubleshooting](#-troubleshooting)  
- [📜 License](#-license)  

---

## 🚀 Features  
✔ **Drag & Drop** – Reorder tasks with @hello-pangea/dnd  
✔ **Real-time Updates** – Instant changes saved in Firebase  
✔ **Task Management** – Add, Edit, and Delete tasks  
✔ **User-friendly UI** – Built with Tailwind CSS & Ant Design  
✔ **Optimized Performance** – React with Vite for fast rendering  

---

## 🛠 Tech Stack  

### **Frontend:**  
- **React 19** – Core UI library  
- **React Router 7** – Navigation  
- **Tailwind CSS 4** – Styling  
- **Ant Design** – UI Components  
- **DaisyUI** – Tailwind-based components  
- **React Query** – Server-state management  
- **Axios** – HTTP requests  

### **Drag & Drop:**  
- **@hello-pangea/dnd** – Drag-and-drop functionality  

### **Backend & Database:**  
- **Firebase** – Real-time database for instant updates  

### **Development Tools:**  
- **Vite** – Fast build tool  
- **ESLint** – Linting  
- **Preline & Headless UI** – UI enhancements  

---

## 📦 Installation  

1️⃣ **Clone the Repository**  
```sh
git clone https://github.com/yourusername/donezo.git
cd donezo
```

2️⃣ **Install Dependencies**  
```sh
npm install
```

3️⃣ **Start Development Server**  
```sh
npm run dev
```

---

## ⚡ Usage  

- **Add New Tasks** – Click the "Add Task" button  
- **Edit Tasks** – Click on a task to modify  
- **Delete Tasks** – Remove tasks with the delete option  
- **Drag & Drop** – Move tasks between sections  
- **Persistent Storage** – Changes are auto-saved to Firebase  

---

## ⚙️ Configuration  

Create a `.env` file and add your Firebase credentials:  

```sh
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## 🔧 Development & Contribution  

🔹 **Run Linter**  
```sh
npm run lint
```

🔹 **Build for Production**  
```sh
npm run build
```

🔹 **Format Code (Prettier & ESLint)**  
```sh
npm run format
```

Want to contribute? Feel free to fork the project and submit a pull request!  

---

## 🐛 Troubleshooting  

### ❌ App not starting?  
Check that all dependencies are installed correctly using:  
```sh
npm install
```

### 🔥 Firebase issues?  
Ensure your `.env` file contains correct Firebase credentials.  

### 💡 Need Help?  
Open an issue on GitHub!  

---

## 📜 License  

This project is **MIT Licensed** – Free to use and modify.  

---

Let me know if you'd like any more refinements! 🚀