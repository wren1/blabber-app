import React from 'react';

import SearchPageHeader from './SearchPageHeader';
import SearchResults from './SearchResults'


const SearchContainer = ({ query, results, searchType, setSearchType }) => {

    return (
        <div className='search__container'>
            <SearchPageHeader query={query} results={results} searchType={searchType} setSearchType={setSearchType} />
            <SearchResults query={query} results={results} />
        </div>
    )
}

export default SearchContainer;