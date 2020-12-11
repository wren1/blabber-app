import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const SearchPageHeader = ({ query, results }) => {

    
    return (
        <div className='searchpage__header'>
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