import axios from "axios"

export const loginUser = async (endpoint, data) =>{
    const response = await axios.post(endpoint,data)
    console.log(response)
}
