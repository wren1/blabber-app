import React from 'react';


const Banner = ({ user, group }) => {
    if (!user && !group) return null;

    let url;
    if (group) url = group.banner_url;
    else url = user.banner_url;
    if (!url) return null;

    return (
        <div className='banner' >
            <img src={`${url}`} className='banner-img' />
        </div>
    )
}

export default Banner;