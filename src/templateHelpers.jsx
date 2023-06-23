// ejemplo de dos elementos en columnas juntos
;<div>
  <form className="container mx-auto mt-5 text-center my-2">
    <div className="grid gap-1 grid-cols-4">
      <div className="container col-start-3 col-span-2">
        <div className="grid grid-rows-1 grid-flow-col">
          <div className="grid grid-cols-3">
            <div className=" bg-red-100 col-start-3 w-min px-1 rounded-lg">
              100
            </div>
          </div>
          <div className=" bg-red-300 max-w-full rounded-md py-1">
            Search...
          </div>
        </div>
      </div>
    </div>
  </form>

  {/* para que floten elementos a la izq y derecha */}

  <div className="flow-root">
    <p className="float-left">Welcome to GeeksforGeeks</p>
    <p className="float-right">A complete portal for geeks</p>
  </div>
</div>

// npm start en modo dev
// y npm build en modo production , va a genrerar los archivos minimizados para production

///
const getPodcastApi = () => {
  console.log()
}
const timer = setTimeout(() => {
  getPodcastApi()
}, 1000 * 60 * 60 * 24)
//   return () => clearTimeout(timer) comentado para no oscurecer lo sigue abajo
console.log(timer)
///
{
  pods.feed.entry.map((r) => (
    <img
      alt="pic"
      key={r.id.attributes["im:id"]}
      src={r["im:image"][0].label}
    />
  ))
}
///
import pods from "./data.json"
import { useEffect } from "react"
function App() {
  useEffect(() => {
    console.log(pods.feed.entry)
  }, [pods])
  return (
    <div className="App">
      {pods.feed.entry.map((r) => (
        <img
          alt="pic"
          key={r.id.attributes["im:id"]}
          src={r["im:image"][0].label}
        />
      ))}
    </div>
  )
}

export default App


//Ejemplo imagen marco circular flotando encima al 50% de card
<>
<div className="conatiner mx-auto mt-5 p-5">
  <div className="grid grid-rows-1 grid-flow-row">
    <div className="grid grid-cols-3 ">
      <img
        src="https://picsum.photos/800/600"
        alt="sunset"
        className=" relative col-start-2 w-28 h-28 rounded-full"
      />
    </div>
    <div className=" px-1 -mt-16">
      <div className=" bg-gray-00 rounded-md overflow-hidden shadow-2xl">
        <div className="px-6 pt-20 text-center pb-4">
          <div className=" font-bold text-xl mb-2">
            The Coldest Sunset
          </div>
          <p className="text-gray-700 text-base">Lorem ipsum dolor</p>
        </div>
      </div>
    </div>
  </div>
</div>
</>

////

