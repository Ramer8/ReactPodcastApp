import { Outlet } from "react-router-dom"
import Header from "./Header"

function Layout() {
  return (
    <div className="m-5">
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
