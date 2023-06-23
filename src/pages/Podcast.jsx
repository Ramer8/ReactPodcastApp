import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import RSSParser from "rss-parser"
import axios from "axios"
import { parseString } from "xml2js"

const Podcast = () => {
  const [podcast, setPodcast] = useState([])
  const [jsonData, setJsonData] = useState(null)
  const { id } = useParams()
  console.log(id)

  const fetchXMLandConvertToJSON = async (url) => {
    try {
      console.log(url)
      const response = await axios.get(url)
      const xmlData = response.data
      let jsonData = null
      parseString(xmlData, (err, result) => {
        if (err) {
          throw new Error("Failed to parse XML")
        }
        jsonData = result
      })
      return jsonData
    } catch (error) {
      console.error("Error fetching XML:", error)
      return null
    }
  }

  useEffect(() => {
    const getPodcast = async () => {
      try {
        const url = `https://itunes.apple.com/lookup?id=${id}`
        console.log(url)
        const { data } = await axios(url)
        ///
        const p = await data.results[0]
        let podcastData = {
          id: p.trackId,
          track: p.trackCount,
          artwork: p.artworkUrl600,
          name: p.trackName,
          feedUrl: p.feedUrl,
          artistName: p.artistName,
        }
        ///
        console.log(data.results[0])
        console.log(podcastData)
        setPodcast(podcastData)
      } catch (error) {
        console.log(error)
      }
    }
    getPodcast()
  }, [id])

  // console.log(podcast.feedUrl)

  useEffect(() => {
    const fetchData = async () => {
      const url = podcast?.feedUrl
      const data = await fetchXMLandConvertToJSON(url)
      setJsonData(data)
    }

    fetchData()
  }, [id])

  // if (!jsonData) {
  //   return <div>Loading...</div>
  // } else {
  console.log(jsonData)
  // }

  // const getEpisodes = async () => {
  //   //
  //   const feedURL = `${podcast?.feedUrl}`
  //   const parser = new RSSParser()
  //   // let articles = []
  //   const parse = async (url) => {
  //     const feed = await parser.parseURL(url)

  //     console.log(feed.title)
  //   }
  //   parse(feedURL)

  // useEffect(() => {
  //   const getEpisodes = async () => {
  //     //
  //     const feedURL = `${podcast?.feedUrl}`
  //     const parser = new RSSParser()
  //     // let articles = []
  //     const parse = async (url) => {
  //       const feed = await parser.parseURL(url)

  //       console.log(feed.title)
  //     }
  //     parse(feedURL)
  //     //

  //     // try {
  //     //   // let parser = new Parser()
  //     //   let episodes = []

  //     //   const url = `${podcast?.feedUrl}`
  //     //   // const url = parser.parseURL(`${podcast?.feedUrl}`)
  //     //   const { data } = await axios(url)

  //     //   console.log(data)
  //     //   ///
  //     //   data.items?.forEach((episode) => {
  //     //     episodes.push({
  //     //       id: episode.guid,
  //     //       title: episode.title,
  //     //       date: episode.pubDate,
  //     //       duration: episode.itunes.duration,
  //     //       content: episode.content,
  //     //       url: episode.enclosure.url,
  //     //     })
  //     //   })
  //     //   ///
  //     //   console.log(episodes)
  //     // } catch (error) {
  //     //   console.log(error)
  //     // }
  //   }
  //   getEpisodes()
  // }, [podcast])

  return (
    <>
      <div className="grid grid-cols-2 gap-2 my-4">
        <div className="bg-gray-00 mx-20 shadow-xl rounded-md">
          <div className="m-5 grid grid-cols-3">
            <img
              className="col-start-2 rounded-lg"
              alt="pic"
              src={podcast?.artwork}
            />
          </div>
          <hr className="h-px my-2 mx-3 bg-gray-200 border-0 dark:bg-gray-100"></hr>

          <div className=" p-4 font-semibold">
            {podcast?.name}
            <div className="italic font-light text-xs">
              by {podcast?.artistName}
            </div>
          </div>
          <hr className="h-px my-2 mx-3 bg-gray-200 border-0 dark:bg-gray-100"></hr>

          <div className="p-4 font-semibold text-sm mb-6">Description:</div>
        </div>
        <div className="w-full">
          <div className="bg-gray-100 p-2 rounded-md text-2xl font-bold shadow-xl ">
            Episodes: {podcast?.track}
          </div>
          <div className="bg-gray-300 rounded-md shadow-xl my-4 h-48">
            Track list
          </div>
        </div>
      </div>
    </>
  )
}

export default Podcast
