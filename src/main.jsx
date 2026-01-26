import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import App from './App'
import './index.css'
import { TaskProvider } from "./context/TaskContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <AuthProvider>
      <TaskProvider>

    <App />
          </TaskProvider>

        </AuthProvider>

  </BrowserRouter>
)