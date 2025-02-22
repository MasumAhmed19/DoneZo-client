import React from 'react';
import { Link } from 'react-router-dom';
import { RiHome3Line } from "react-icons/ri";


const WeeklyRating = () => {
    return (
        <Link to='/' className='bg-[#62DF50] text-black p-4 rounded-lg flex gap-2 items-center'>
            <RiHome3Line />

            <h1 >Go back to home</h1>
        </Link>
 
    );
};

export default WeeklyRating;