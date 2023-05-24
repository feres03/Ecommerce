import React from 'react'
import prod1 from '../ClientSide/pictures/prod1.png'
import prod2 from '../ClientSide/pictures/prod2.png'
import prod3 from '../ClientSide/pictures/prod3.png'
import prod4 from '../ClientSide/pictures/prod4.png'
import prod5 from '../ClientSide/pictures/prod5.png'
import prod6 from '../ClientSide/pictures/prod6.png'
import './FirstBloc.css'

const FirstBloc = () => {
    return (
        <div className='container'>
            <h1 className='justify-content-center d-flex mt-5 container' style={{ color: '#344D59', backgroundColor: '#B8CBD0', padding: '5px' }}>Special products</h1>
            <div className='d-flex justify-content-center'>
                <div className="hover14 column">
                    <div>
                        <figure><img src={prod1} alt='1' width='200px' /></figure>
                        <span>Lenovo IdeaPad Gaming 3</span>
                    </div>
                </div>
                <div className="hover14 column">
                    <div>
                        <figure><img src={prod2} alt='2' width='200px' /></figure>
                        <span>Chaise Pilote Gaming Gold</span>
                    </div>
                </div>
                <div className="hover14 column">
                    <div>
                        <figure><img src={prod3} alt='3' width='200px' /></figure>
                        <span>MARS GAMING MKAX</span>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <div className="hover14 column">
                    <div>
                        <figure><img src={prod4} alt='4' width='200px' /></figure>
                        <span>Spirit of Gamer Pro H7</span>
                    </div>
                </div>
                <div className="hover14 column">
                    <div>
                        <figure><img src={prod5} alt='5' width='200px' /></figure>
                        <span>White Shark GM-5007 </span>
                    </div>
                </div>
                <div className="hover14 column">
                    <div>
                        <figure><img src={prod6} alt='6' width='200px' /></figure>
                        <span>MARS GAMING MSRGB SPEAKERS</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FirstBloc