// Ejemplo de hacer fetch a url xml para leerla.
import axios from "axios"
import { parseString } from "xml2js"

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
