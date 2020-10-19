import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://fb-mern-clone-live31.herokuapp.com/'
})

export default instance
