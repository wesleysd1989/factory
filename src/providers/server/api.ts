import axios from "axios"
import {endpoint} from "../../config/server/server" 

export default axios.create({
  baseURL: endpoint,
  headers: {
    authorization: `Bearer ${process.env.authorization}`
  }
})