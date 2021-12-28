import React from 'react'
import HeroSection from '../HeroSection';
import {homeObjFour} from './Data';

export default function Products() {
    return (
        <>  
            <HeroSection {...homeObjFour} />
        </>
    );
}
