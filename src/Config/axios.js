import axios from "axios"
import {endpoint} from "./config"

const instance = axios.create({
    baseURL: endpoint
})

export default instance;