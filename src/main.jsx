import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Details from './pages/details.jsx'
// a pasta que eu estou é o caminho atual

const router = createBrowserRouter([
  {// caminho principal --> porque é só a barra --> caminho automatico
    path: "/", // path --> caminho
    element: <App /> // componente renderizado nesse caminho
  },
  { path: "/details", element: <Details /> }
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
