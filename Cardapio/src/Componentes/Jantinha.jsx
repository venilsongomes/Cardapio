import React from 'react';
import janta from '../assets/jantinha/janta.png'
import jantinha2 from '../assets/Jantinha/jantinha3.jpg'
import jantinha3 from '../assets/jantinha/jantinha4.jpg'


function Jantinha() {


return (
    <div className="linha" id="comidas">
        <h2>Jantinha + Espetos</h2>
        <section className="item">
            <div className="item1">
                <div className="img">
                    <img src={janta} alt="" />
                </div>
                <div>
                    <h1>Jantinha Picanha</h1>
                    Acompanha arroz, tropeiro, mandioca e vinagrete.
                    <br />
                    R$ 10,00
                </div>
            </div>
            <div className="item1">
                <img src={jantinha2} alt="" />
                <div>
                    <h1>jantinha Contra File</h1>
                    Acompanha arroz, tropeiro, mandioca e vinagrete.
                    <br />
                    R$ 10,00
                </div>
            </div>
            <div>
                <div className="item1">
                    <img src={jantinha3} alt="" />
                    <div>
                        <h1>Jantinha Frango com Bacon</h1>
                        Acompanha arroz, tropeiro, mandioca e vinagrete.
                        <br />
                        R$ 10,00
                    </div>
                </div>
            </div>
            <div className="item1">
                <img src={janta} alt="" />
                <div>
                    <h1>Jantinha com Queijo Coalho</h1>
                    Acompanha arroz, tropeiro, mandioca e vinagrete.
                    <br />
                    R$ 10,00
                </div>
            </div>
            <div className="item1">
                <img src={jantinha3} alt="" />
                <div>
                    <h1>Jantinha com Coração de Frango</h1>
                    Acompanha arroz, tropeiro, mandioca e vinagrete.
                    <br />
                    R$ 10,00
                </div>
            </div>
            <div className="item1">
                <img src={jantinha2} alt="" />
                <div>
                    <h1>Jantinha Kafta de Carne</h1>
                    Acompanha arroz, tropeiro, mandioca e vinagrete.
                    <br />
                    R$ 10,00
                </div>
            </div>
        </section>
    </div>
    );
}


export default Jantinha;

