import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {  } from '../../store/ducks/search';


const SearchPageHeader = ({ query, results, searchType, setSearchType }) => {

    
    return (
        <div className='searchpage__header'>
            <div onClick={() => setSearchType('posts')}>
                posts
            </div>
            <div onClick={() => setSearchType('users')}>
                users
            </div>
            <div onClick={() => setSearchType('groups')}>
                groups
            </div>
            <div className='searchpage__header-title'>
                " {query} "
            </div>
            <div className='searchpage__header-res'>
                {results.length} Results
            </div>
        </div>
    )
}

export default SearchPageHeader;