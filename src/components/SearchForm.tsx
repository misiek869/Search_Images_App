import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
	const { setSearch } = useGlobalContext()

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const target = e.currentTarget as HTMLFormElement

		const searchValue = (
			target.elements.namedItem('search') as HTMLInputElement
		).value
		if (!searchValue) return
		setSearch(searchValue)
		if (!searchValue) return
		setSearch(searchValue)
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
