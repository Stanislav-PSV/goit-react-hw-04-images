import { useState } from 'react';
import { toast } from 'react-toastify';
import { PropTypes } from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import {
	SearchForm,
	SearchButton,
	SearchLabel,
	SearchInput,
} from './SearchbarForm.styled';

const SearchbarForm = ({ onSubmit }) => {
	const [searchQuery, setSearchQuery] = useState('');

	const handleValueChange = event => {
		setSearchQuery(event.currentTarget.value.toLowerCase());
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (searchQuery.trim() === '') {
			toast.warn('Enter a word to search for');
			return;
		}
		onSubmit(searchQuery);
		setSearchQuery('');
	};

	return (
		<SearchForm onSubmit={handleSubmit}>
			<SearchButton type="submit">
				<FcSearch size="30" />
				<SearchLabel>Search</SearchLabel>
			</SearchButton>

			<SearchInput
				name="searchQuery"
				type="text"
				autoComplete="off"
				autoFocus
				placeholder="Search for images and photos"
				value={searchQuery}
				onChange={handleValueChange}
			/>
		</SearchForm>
	);
};

SearchbarForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default SearchbarForm;