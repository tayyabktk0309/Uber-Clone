# Uber Clone Frontend

This project is a frontend for an Uber clone application. It uses Tailwind CSS for design and Context API for data management. The application includes user and captain login and registration functionalities.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Components](#components)
- [Context API](#context-api)
- [Tailwind CSS](#tailwind-css)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/uber-clone.git
    cd uber-clone/frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

## Usage

Navigate to `http://localhost:3000` in your browser to see the application in action.

## File Structure

```
frontend/
├── public/
├── src/
│   ├── context/
│   │   └── UserContext.jsx
│   ├── pages/
│   │   ├── CaptainLogin.jsx
│   │   ├── CaptainSignup.jsx
│   │   ├── Home.jsx
│   │   ├── UserLogin.jsx
│   │   └── UserSignup.jsx
│   ├── App.jsx
│   └── index.js
├── tailwind.config.js
└── README.md
```

## Components

### UserLogin

Located at `src/pages/UserLogin.jsx`, this component handles user login.

### UserSignup

Located at `src/pages/UserSignup.jsx`, this component handles user registration.

### CaptainLogin

Located at `src/pages/CaptainLogin.jsx`, this component handles captain login.

### CaptainSignup

Located at `src/pages/CaptainSignup.jsx`, this component handles captain registration.

## Context API

The Context API is used for state management. The user data is managed using `UserContext`.

### UserContext

Located at `src/context/UserContext.jsx`, this context provides user data and a method to update it.

## Tailwind CSS

Tailwind CSS is used for styling the application. The configuration is located in `tailwind.config.js`.

### Configuration

```javascript
// filepath: /d:/Code Play-Ground/MERN/Uber Clone/frontend/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
