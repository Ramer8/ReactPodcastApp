import { useState, useEffect } from "react"
import axios from "axios"
import Card from "./Card"

const Root = () => {
  const [dataPodcast, setDataPodcast] = useState([])
  const [dataPodcastToShow, setDataPodcastToShow] = useState([])
  const [name, setName] = useState("")

  useEffect(() => {
    const getPodcastApi = async () => {
      try {
        const url = `https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`
        const { data } = await axios(url)
        setDataPodcast(data.feed.entry)
        setDataPodcastToShow(data.feed.entry)
      } catch (error) {
        console.log(error)
      }
    }
    getPodcastApi()
    const timer = setTimeout(() => {
      getPodcastApi()
    }, 1000 * 60 * 60 * 24)
    return () => clearTimeout(timer)
  }, [])
  const obj = dataPodcastToShow?.length

  const handleFilter = (e) => {
    setName(e.target.value)
    const filtered = dataPodcast.filter((obj) =>
      obj["im:name"].label.toLowerCase().includes(name.toLowerCase())
    )
    console.log(filtered)
    setDataPodcastToShow(filtered)
  }
  return (
    <div>
      <div>
        <form className="container mx-auto mt-4">
          <div className="grid grid-cols-3">
            <div className="container col-start-3 col-span-1">
              <div className="grid grid-rows-1 grid-flow-col">
                <label
                  className="w-min rounded-lg text-2xl
                     py-1 px-2 h-min font-bold
                     text-white bg-blue-600 "
                >
                  {obj}
                </label>
                <input
                  className="rounded-md px-4 py-3  
                   border-solid border-2 border-gray-200 
                   hover:border-solid hover:border-gray-400"
                  id="search"
                  placeholder="Filter Podcast..."
                  type="search"
                  name="search"
                  value={name}
                  onChange={handleFilter}
                />
                {obj < 100 ? (
                  <button className="text-center px-1 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-4 gap-0">
        <Card dataPodcastToShow={dataPodcastToShow} />
      </div>
    </div>
  )
}

export default Root
