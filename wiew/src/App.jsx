
import './App.css'
import { ROUTES } from './routes'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router=createBrowserRouter(ROUTES)

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
