import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import SearchPageHeader from './SearchPageHeader';
import SearchResults from './SearchResults';


const SearchPage = () => {
    const {results, query} = useSelector(state => state.search);
    console.log(query, results)

    return (
        <div className='searchpage'>
            <SearchPageHeader query={query} results={results} />
            <SearchResults query={query} results={results} />
        </div>
    )
}

export default SearchPage;