# E-Commerce Mobile App (Expo SDK 54)

This is a simple **E-Commerce mobile application** developed using **React Native with Expo SDK 54**. The app allows users to log in, browse products by category (Shoes, Shirts, Pants), view product details, and use a cart system with a badge indicator. The project is designed for **academic and learning purposes**.

---

## 🚀 Tech Stack

### Frontend

* React Native
* Expo SDK 54
* React Navigation (Stack & Bottom Tabs)
* Expo Vector Icons (Ionicons)

### Backend (Optional / Dummy)

* Node.js
* Express.js (optional, for future use)

---

## 📂 Project Structure

```
ecommerce-app/
│
├── App.js              # Main application file
├── package.json
├── assets/
│   └── icons & images
├── screenshots/        # App screenshots (for GitHub)
└── README.md
```

---

## 🧑‍💻 Frontend Setup (Expo)

### 1️⃣ Create Expo App

```bash
npx create-expo-app ecommerce-app
cd ecommerce-app
```

### 2️⃣ Install Required Dependencies

```bash
npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs
npx expo install react-native-screens react-native-safe-area-context
```

> `@expo/vector-icons` is included by default in Expo.

### 3️⃣ Run the Application

```bash
npx expo start
```

* Press **a** → Run on Android Emulator
* Press **w** → Run on Web
* Scan QR code → Run on Physical Device

---

## 🔐 App Features

### Authentication

* Login Screen
* Signup Screen
* Dummy authentication (no backend)

### Main Features

* Home screen with category stickers (Shoes 👟, Shirts 👕, Pants 👖)
* Product listing by category
* Product details screen
* Add to Cart (dummy)
* Cart tab with **badge notification 🔔**
* Profile screen

### Navigation

* Stack Navigation (Login, Signup, Category, Details)
* Bottom Tab Navigation (Home, Cart, Profile)
* Icons on all tabs

---

## 🧭 Navigation Flow Diagram

```
Login ──▶ Signup
  │
  ▼
Bottom Tabs
 ├── Home ──▶ Category ──▶ Product Details
 ├── Cart (🛒 badge)
 └── Profile
```

---

## 📸 Screenshots

Add screenshots of your app here for GitHub preview:

```
/screenshots
  ├── login.png
  ├── signup.png
  ├── home.png
  ├── category.png
  ├── details.png
  ├── cart.png
  └── profile.png
```

---

## 📦 GitHub Upload Commands

```bash
git init
git add .
git commit -m "Initial commit - E-Commerce App"
git branch -M main
git remote add origin <your-repository-url>
git push -u origin main
```

---

## 📝 Notes

* This app uses **dummy data** for products and cart.
* Backend and payment gateway can be integrated in future.
* Designed to meet university assignment requirements.

---

## 👨‍🎓 Author

**E-Commerce Mobile App**
Developed using React Native & Expo SDK 54

---

⭐ If you like this project, don’t forget to star the repository!
youtube link https://youtu.be/VDfdyVoHmuY?si=iJT8qFVsNdYRSxec
