import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import ErrorPage from './Component/ErrorPage.tsx'
import { RegisterPage } from './Component/RegisterPage.tsx'
import ImageDetail from './Component/Photo/ImageDetails.tsx'
import { LoginPage } from './Component/LoginPage.tsx';
import { HomePage } from './Component/HomePage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },

  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/register",
    element: <RegisterPage />,
  },

  {
    path: "/img-detail/:id",
    element: <ImageDetail />,
  },

  {
    path: "/home",
    element: <HomePage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
