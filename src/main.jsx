import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Books from './Components/Books/Books.jsx';
import Error from './Components/Error/Error.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';
import Home from './Components/Home/Home.jsx';
import ListedBooks from "./Components/ListedBooks/ListedBooks.jsx";
import Read from "./Components/Read/Read.jsx";
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <Error></Error>,
    loader: () => fetch('public/review.json'),
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/books',
        loader: () => fetch('public/review.json'),
        element: <Books></Books>
      },
      {
        path: '/books/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('../review.json')
      },
      {
        path: '/listed_books',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('../review.json')
      },
      {
        path: '/pages_to_read',
        loader: () => fetch('../review.json'),
        element: <Read></Read>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
