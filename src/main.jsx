import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Outlet } from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import RepoDetails from './pages/Repodetails'
import ErrorPage from './pages/ErrorPage'
import AppOutlet from './pages/AppOutlet'
import About from './pages/About'
import ErrorBoundary from './pages/ErrorBoundary'



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<ErrorPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/repodetails" element={<ErrorBoundary><AppOutlet /></ErrorBoundary>}>
        <Route path=":id" element={<RepoDetails />} />
        <Route path="" element={<AppOutlet />}></Route>
      </Route>
      
    </>
 

    
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
)