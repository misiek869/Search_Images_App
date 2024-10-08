import axios from 'axios'

const customFetch = axios.create({
	baseURL:
		'https://api.unsplash.com/search/photos?client_id=bY5sj9GPY-Vd2InW6nWoxQhonfUjsZ0s7acCPvrRz5g&query=',
})

export default customFetch
