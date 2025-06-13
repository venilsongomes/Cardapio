import React from 'react';
import coca from '../assets/sem-alcool/coca.png';
import redbull from '../assets/sem-alcool/redbull.png';
import sucoLaranja from '../assets/sem-alcool/sucoLaranja.jpg';
import sucoCaju from '../assets/sem-alcool/sucoCaju.avif';
import sucoUva from '../assets/sem-alcool/sucoUva.jpeg';
import agua from '../assets/sem-alcool/agua.jpg';
import coca1 from '../assets/sem-alcool/coca-lt.svg';
import suco from '../assets/sem-alcool/suco.svg';





function NaoAlcool() {
    return (
        <div id='outros'>
            
            <section className='item' >
                <h1> Não Alcoólico</h1>
                <div className="item1">
                    <img src={coca1} alt="" />
                    <div>
                        <h2>Coca Cola</h2>
                        R$ 5,00
                    </div>
                </div>
                <div className="item1">
                    <img src={redbull} alt="" />
                    <div>
                        <h2>Energetico RedBull</h2>
                        R$ 5,00
                    </div>
                </div>
                <div className="item1">
                    <img src={suco} alt="" />
                    <div>
                        <h2>Suco Natural</h2>
                        <li>Laranja</li>
                        <li>Uva</li>
                        <li>Caju</li>
                        <li>Limão</li>
                        <li>Maracujá</li>
                        <br />
                        R$ 5,00
                    </div>
                </div>
                  
                <div className="item1">
                    <img src={agua} alt="" />
                    <div>
                        <h2>Água Mineral</h2>
                        R$ 5,00
                    </div>
                </div>


            </section>
        </div>
    )
}
export default NaoAlcool;