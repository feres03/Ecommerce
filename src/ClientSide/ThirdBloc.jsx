import React from 'react';
import LEN from './pictures/lenovo.png';
import SAM from './pictures/samsung.png';
import appl from './pictures/apple.png';
import msi from './pictures/msi.png';
import asus from './pictures/asus.png';
import acer from './pictures/acer.png';
import dell from './pictures/dell.png';

import './ThirdBloc.css'




const ThirdBloc = () => {
    return (
        <div>
            <h1 className='d-flex justify-content-center  mt-5 container' style={{ color: '#344D59', backgroundColor: '#B8CBD0', padding: '5px' }}>Our partners</h1>
            <div class="marquee-wrapper">
                <div class="marquee">
                    <img src={LEN} alt='1' />
                    <img src={SAM} alt='2' />
                    <img src={appl} alt='3' />
                    <img src={msi} alt='4' />
                    <img src={asus} alt='5' />
                    <img src={acer} alt='6' />
                    <img src={dell} alt='7' />
                    <img src={LEN} alt='1' />
                    <img src={SAM} alt='2' />
                    <img src={appl} alt='3' />
                    <img src={msi} alt='4' />
                    <img src={asus} alt='5' />
                    <img src={acer} alt='6' />
                    <img src={dell} alt='7' />
                </div>
            </div>
        </div>
    )
}

export default ThirdBloc