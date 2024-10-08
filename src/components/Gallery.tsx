import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import customFetch from '../utils'
import axios from 'axios'

const url =
	'https://api.unsplash.com/search/photos?client_id=bY5sj9GPY-Vd2InW6nWoxQhonfUjsZ0s7acCPvrRz5g&query=office'

const Gallery = () => {
	const photos = useQuery({
		queryKey: ['photos'],
		queryFn: async () => {
			const result = await axios.get(url)

			return result.data
		},
	})

	if (photos.isLoading) {
		return (
			<section className='image-container'>
				<h3>Loading...</h3>
			</section>
		)
	}
	if (photos.isError) {
		return (
			<section className='image-container'>
				<h3>There was an error...</h3>
			</section>
		)
	}

	const results = photos.data.results

	if (results.length < 1) {
		return (
			<section className='image-container'>
				<h3>There were no results</h3>
			</section>
		)
	}

	return (
		<section className='image-container'>
			{results.map(item => {
				const url = item?.urls?.regular
				return <img src={url} alt={item.alt_description} key={item.id} />
			})}
		</section>
	)
}

export default Gallery
