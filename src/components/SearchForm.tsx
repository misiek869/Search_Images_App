import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
	const { setSearch } = useGlobalContext()

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const search = e.target.elements.search.value
		if (!search) return
		setSearch(search)
	}

	return (
		<section>
			<form className='search-form' action='' onSubmit={handleSubmit}>
				<input
					className='form-input search-input'
					type='text'
					name='search'
					placeholder='search for photo'
				/>
				<button className='btn' type='submit'>
					Search
				</button>
			</form>
		</section>
	)
}

export default SearchForm
