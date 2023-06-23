import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import Podcast from "./pages/podcast"
import Episode from "./pages/Episode"
import Root from "./components/Root"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Root />,
      },
      {
        path: "/podcast/:id/",
        element: <Podcast />,
      },
      {
        path: "/episode/:id",
        element: <Episode />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
