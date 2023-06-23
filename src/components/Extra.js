// Ejemplo de hacer fetch a url xml para leerla.
import axios from "axios"
import { parseString } from "xml2js" //fcion para pasar de xml a json

export const fetchXMLandConvertToJSON = async (url) => {
  try {
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

// const fetchXMLandConvertToJSON = async (url) => {
//   try {
//     console.log(url)
//     const response = await axios.get(url)
//     const xmlData = response.data
//     let jsonData = null
//     parseString(xmlData, (err, result) => {
//       if (err) {
//         throw new Error("Failed to parse XML")
//       }
//       jsonData = result
//     })
//     return jsonData
//   } catch (error) {
//     console.error("Error fetching XML:", error)
//     return null
//   }
// }

// el useEffect para ese codigo de arriba el comentado y el no comentado
useEffect(() => {
  const fetchData = async () => {
    const url = podcast?.feedUrl
    const data = await fetchXMLandConvertToJSON(url)
    setJsonData(data)
  }

  fetchData()
}, [id])

if (!jsonData) {
  return <div>Loading...</div>
} else {
  console.log(jsonData)
}

/// otra prueba

const getEpisodes = async () => {
  //
  const feedURL = `${podcast?.feedUrl}`
  const parser = new RSSParser()
  // let articles = []
  const parse = async (url) => {
    const feed = await parser.parseURL(url)

    console.log(feed.title)
  }
  parse(feedURL)
}

/// otro codigo suelto
const feedURL = `${podcast?.feedUrl}`
const parser = new RSSParser()
let articles = []
const parse = async (url) => {
  const feed = await parser.parseURL(url)

  console.log(feed.title)
}
parse(feedURL)
