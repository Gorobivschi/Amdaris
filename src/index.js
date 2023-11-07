import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutPage from './Pages/AboutPage';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ExplorePage from './Pages/ExplorePage';
import ContactsPage from './Pages/ContactsPage';
import MorePage from './Pages/Morepage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <AboutPage/>,
  },
  {
    path: "/explore",
    element: <ExplorePage/>,
  },
  {
    path: "/contacts",
    element: <ContactsPage/>,
  },
  {
    path: "/more",
    element: <MorePage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
