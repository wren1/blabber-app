import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const GroupHeader = ({ group }) => {

    return (
        <div className='group-header__inner' >
            <a className='group-header__img'>
                {
                    group.header_url ? <img src='' /> :
                    <img src='' />
                }
            </a>
        </div>
    )
}

export default GroupHeader;