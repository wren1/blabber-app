import React from 'react';

import SearchHeaderTypes from './SearchHeaderTypes';


const SearchPageHeader = ({ query, results, searchType, setSearchType }) => {
    
    return (
        <div className='searchpage__header'>
            <SearchHeaderTypes searchType={searchType} setSearchType={setSearchType} />
            <div className='searchpage__header-txt'>
                <div className='searchpage__header-title'>
                    " {query} "
                </div>
                <div className='searchpage__header-res'>
                    {results.length} Results
                </div>
            </div>
        </div>
    )
}

export default SearchPageHeader;