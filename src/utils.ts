import axios from 'axios'

const customFetch = axios.create({
	baseURL: 'https://api.unsplash.com/photos/',
})

export default customFetch
