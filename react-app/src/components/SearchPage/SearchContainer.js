import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';

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