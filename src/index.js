import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ExpensesForm from './Forms/ExpansesForm';
import Sidebar from './Components/Sidebar';
const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App></App></div>,
  },
  {
    path:"/main",
    element: <div className='basis-[12%] h-[100vh] col-auto flex'><Sidebar></Sidebar></div>
  },
  {
    path: "/expensesform",
    element: <div>
      <ExpensesForm></ExpensesForm>
    </div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>
);


