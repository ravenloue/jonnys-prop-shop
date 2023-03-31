import React from 'react';
import ReactDOM from 'react-dom/client';
//import { createHashRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import About from './Components/about/about';

/*const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "gallery",
        element: <App />,
      },
      {
        path: "blog",
        element: <App />,
      },
      {
        path: "dioramas",
        element: <App />,
      },
      {
        path: "shop",
        element: <App />,
      },
    ]
  },
],{
  basename: "/jonnys-prop-shop/"
});

// <RouterProvider router={router} /> 
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
