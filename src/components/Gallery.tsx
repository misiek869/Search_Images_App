import { useQuery } from '@tanstack/react-query'
import customFetch from '../utils'
import { useGlobalContext } from '../context'

type PhotoType = {
	alt_description: string
	id: string
	urls: {
		regular: string
	}
}

const Gallery = () => {
	const { search } = useGlobalContext()

	const photos = useQuery({
		queryKey: ['photos', search],
		queryFn: async () => {
			const result = await customFetch.get(`${search}`)

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
			{results.map((item: PhotoType) => {
				const url = item?.urls?.regular

				return (
					<img
						className='img'
						src={url}
						alt={item.alt_description}
						key={item.id}
					/>
				)
			})}
		</section>
	)
}

export default Gallery
