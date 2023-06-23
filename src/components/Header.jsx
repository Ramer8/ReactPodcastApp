import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div className="flow-root">
      <h1 className="text-4xl text-blue-500 font-bold mt-5 my-2">
        <Link to="/">Podcaster</Link>
        <div className="float-right text-3xl lowercase text-blue-500">
          Spinner on/off
        </div>
      </h1>
      <hr className="h-px my-4 mx-2 border-0 dark:bg-gray-100"></hr>
    </div>
  )
}

export default Header
