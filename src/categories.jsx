import React from 'react';
import { TiThSmall } from "react-icons/ti";
import { GiRose } from "react-icons/gi";
import { PiFlowerTulipLight } from "react-icons/pi";
import { GiDaisy } from "react-icons/gi";
import { GiLilyPads } from "react-icons/gi";
import { GiRelationshipBounds } from "react-icons/gi";
import { GiSunflower } from "react-icons/gi";


export const categories = [
    {
        id: 1,  
        name: "All",
        icon:<TiThSmall className='text-5xl text-pink-900'  />,
    },
    {
        id: 2,
        name: "Roses",
        icon:<GiRose className='text-5xl text-pink-900' />,
    },  
    {
        id: 3,
        name: "Birthday",
        icon:<PiFlowerTulipLight className='text-5xl text-pink-900' />,
    },
    {
        id: 4,      
        name: "Daisies",
        icon:<GiDaisy className='text-5xl text-pink-900'           />,

    },
    {
        id: 5,
        name: "Sunflowers",
        icon:<GiSunflower className='text-5xl text-pink-900' />,
    },
    {       
        id: 6,
        name: "Lilies",
        icon:<GiLilyPads className='text-5xl text-pink-900' />,
    },
     {       
        id: 6,
        name: "Wedding",
        icon:<GiRelationshipBounds className='text-5xl text-pink-900' />,
    },
]

export default categories
