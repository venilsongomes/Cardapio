import React from 'react';
import janta from '../assets/jantinha/janta.png'
import jantinha2 from '../assets/Jantinha/jantinha3.jpg'
import jantinha3 from '../assets/jantinha/jantinha4.jpg'


function Jantinha() {


return (
    <div className="linha" id="comidas">
        
        <section className="item">

            <h1>Jantinha + Espetos</h1>


            <div className="item1">
                
                    <img src={janta} alt="" />
                
                <div>
                    <h2>Jantinha Picanha</h2>
                    Acompanha arroz, tropeiro, mandioca e vinagrete.
                    <br />
                    R$ 10,00
                </div>
            </div>


            <div className="item1">
                <img src={jantinha2} alt="" />
                <div>
                    <h2>jantinha Contra File</h2>
                    Acompanha arroz, tropeiro, mandioca e vinagrete.
                    <br />
                    R$ 10,00
                </div>
            </div>


           
            <div className="item1">
                <img src={jantinha3} alt="" />
                <div>
                    <h2>Jantinha Frango com Bacon</h2>
                    Acompanha arroz, tropeiro, mandioca e vinagrete.
                    <br />
                    R$ 10,00
                </div>
            </div>
            



            <div className="item1">
                <img src={janta} alt="" />
                <div>
                    <h2>Jantinha com Queijo Coalho</h2>
                    Acompanha arroz, tropeiro, mandioca e vinagrete.
                    <br />
                    R$ 10,00
                </div>
            </div>
            <div className="item1">
                <img src={jantinha3} alt="" />
                <div>
                    <h2>Jantinha com Coração de Frango</h2>
                    Acompanha arroz, tropeiro, mandioca e vinagrete.
                    <br />
                    R$ 10,00
                </div>
            </div>
            <div className="item1">
                <img src={jantinha2} alt="" />
                <div>
                    <h2>Jantinha Kafta de Carne</h2>
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

