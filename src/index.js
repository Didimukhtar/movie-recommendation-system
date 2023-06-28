import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {
 createBrowserRouter,
 RouterProvider,
} from "react-router-dom"

import LandingPage from './pages/LandingPage';
import Top100Page from './pages/Top100Page';
import Recommend from './pages/Recommend';


const router = createBrowserRouter([
 {
  path: "/",
  element: <LandingPage />,
 },
 {
  path: "/top100",
  element: <Top100Page />,
 },
 {
  path: "/recommend",
  element: <Recommend />,
 }
]);
 
ReactDOM.createRoot(document.getElementById("root")).render(
 <RouterProvider router={router} />
);

