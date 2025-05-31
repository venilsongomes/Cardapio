import React from 'react';
import coca from '../assets/sem-alcool/coca.png';
import redbull from '../assets/sem-alcool/redbull.png';
import sucoLaranja from '../assets/sem-alcool/sucoLaranja.jpg';
import sucoCaju from '../assets/sem-alcool/sucoCaju.avif';
import sucoUva from '../assets/sem-alcool/sucoUva.jpeg';
import agua from '../assets/sem-alcool/agua.jpg';





function NaoAlcool() {
    return (
        <div id='naoAlcool'>
            <h2> Não Alcoólico</h2>
            <section >
                <div className="item1">
                    <img src={coca} alt="" />
                    <div>
                        <h1>Coca Cola</h1>
                        R$ 5,00
                    </div>
                </div>
                <div className="item1">
                    <img src={redbull} alt="" />
                    <div>
                        <h1>Energetico RedBull</h1>
                        R$ 5,00
                    </div>
                </div>
                <div className="item1">
                    <img src={sucoCaju} alt="" />
                    <div>
                        <h1>Suco Natural - caju</h1>
                        R$ 5,00
                    </div>
                </div>
                <div className="item1">
                    <img src={sucoLaranja} alt="" />
                    <div>
                        <h1>Suco Laranja</h1>
                        R$ 5,00
                    </div>
                </div>
                <div className="item1">
                    <img src={sucoUva} alt="" />
                    <div>
                        <h1>Água Mineral</h1>
                        R$ 5,00
                    </div>
                </div>
                <div className="item1">
                    <img src={sucoCaju} alt="" />
                    <div>
                        <h1>Suco - Jará</h1>
                        R$ 5,00
                    </div>
                </div>
                <div className="item1">
                    <img src={agua} alt="" />
                    <div>
                        <h1>Água Mineral</h1>
                        R$ 5,00
                    </div>
                </div>


            </section>
        </div>
    )
}
export default NaoAlcool;