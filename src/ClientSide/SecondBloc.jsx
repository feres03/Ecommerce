import React from 'react';
import ZED from '../ClientSide/pictures/zed3.jpg'
import ZEDD from '../ClientSide/pictures/ZED6.png'
import popo from '../ClientSide/pictures/POPO.png'


const SecondBloc = () => {
    return (
        <div className='container'>
            <h1 className='d-flex justify-content-center mt-5' style={{ color: '#344D59', backgroundColor: '#B8CBD0', padding: '5px' }}>Configs</h1>
            {/* First Card */}
            <div className='row justify-content-center'>
                <div className="card col-3 m-3 p-1">
                    <img src={ZED} className="card-img-top" alt="ZED3" />
                    <div className="card-body ">
                        <h5 className="card-title">ZED3</h5>
                        <p className="card-text">
                            Carte mère : Gigabyte H410M S2H V3
                            Stockage : 512 Go SSD DATO DP700 M.2 PCI-E 3.0 NVMe
                            Alimentation : MSI MAG A550 BN 550W 80+ Bronze
                            Boitier : MARS GAMING MC-S2 FRGB Black</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> Processeur : Intel Core i5-10400F (2.9 GHz / 4.3 GHz)</li>
                        <li className="list-group-item">Carte Graphique : PNY GeForce RTX 2060 12GB REVEL Dual Fan</li>
                        <li className="list-group-item"> Ram : 8 GB DATO DDR4 3200 MHz</li>
                    </ul>
                    <div className="card-body">
                        <a href="/list-product" className="card-link">For more</a>
                    </div>
                </div>
                {/* Second Card */}
                <div className="card col-3 m-3 p-1">
                    <img src={popo} className="card-img-top" alt="POPO" />
                    <div className="card-body ">
                        <h5 className="card-title">POPO</h5>
                        <p className="card-text">
                            Carte mère : Gigabyte H410M S2H V3
                            Stockage : 512 Go SSD DATO DP700 M.2 PCI-E 3.0 NVMe
                            Alimentation : MSI MAG A550 BN 550W 80+ Bronze
                            Boitier : MARS GAMING MC-S2 FRGB Black</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> Processeur : Intel Core i5-10400F (2.9 GHz / 4.3 GHz)</li>
                        <li className="list-group-item">Carte Graphique : PNY GeForce RTX 2060 12GB REVEL Dual Fan</li>
                        <li className="list-group-item"> Ram : 8 GB DATO DDR4 3200 MHz</li>
                    </ul>
                    <div className="card-body">
                        <a href="/list-product" className="card-link">For more</a>
                    </div>
                </div>
                {/* Third card */}
                <div className="card col-3 m-3 p-1">
                    <img src={ZEDD} className="card-img-top" alt="ZED6" />
                    <div className="card-body ">
                        <h5 className="card-title">ZED6</h5>
                        <p className="card-text">
                            Carte mère : Gigabyte H410M S2H V3
                            Stockage : 512 Go SSD DATO DP700 M.2 PCI-E 3.0 NVMe
                            Alimentation : MSI MAG A550 BN 550W 80+ Bronze
                            Boitier : MARS GAMING MC-S2 FRGB Black</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> Processeur : Intel Core i5-10400F (2.9 GHz / 4.3 GHz)</li>
                        <li className="list-group-item">Carte Graphique : PNY GeForce RTX 2060 12GB REVEL Dual Fan</li>
                        <li className="list-group-item"> Ram : 8 GB DATO DDR4 3200 MHz</li>
                    </ul>
                    <div className="card-body">
                        <a href="/list-product" className="card-link">For more</a>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default SecondBloc