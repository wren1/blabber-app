import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const SearchBar = () => {

    return (
        <form className='search'>
            <input className='searchbar' />
        </form>
    )
}

export default SearchBar;