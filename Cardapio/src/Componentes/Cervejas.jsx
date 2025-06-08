import cerva from '../assets/cervejas/cerva.png'
import cervaB from '../assets/cervejas/bhahma.webp'
import cervaB2 from '../assets/cervejas/cerveja-Brahma-600.png'
import cerva2 from '../assets/Cervejas/Antartica.png'
import lata from '../assets/Cervejas/lata.jpg'
import stela from '../assets/Cervejas/stela.webp'
import bohemia from '../assets/Cervejas/bohemia-600.jpg'
import original from '../assets/Cervejas/original.jpg'
import spaten from '../assets/Cervejas/spaten.webp'




function Cervejas(){
    return(
        <div id="bebidas" className="linha">
                    
                    <section className="item">
                      <h1>Cervejas</h1>
                      <div className="item1">
                        <img src={cervaB2} alt="" />
                        <div>
                          <h2>Bhahma 600</h2>
                          R$ 11,00
                        </div>
                      </div>

                       <div className="item1">
                        <img src={spaten} alt="" />
                        <div>
                          <h2>Spaten - 600</h2>
                          R$ 11,00
                        </div>
                      </div>

                       <div className="item1">
                        <img src={bohemia} alt="" />
                        <div>
                          <h2>Bohemia</h2>
                          R$ 11,00
                        </div>
                      </div>

                       <div className="item1">
                        <img src={original} alt="" />
                        <div>
                          <h2>Original - 600</h2>
                          R$ 14,00
                        </div>
                      </div>

                       <div className="item1">
                        <img src={stela} alt="" />
                        <div>
                          <h2>Stella Artois - 600</h2>
                          R$ 15,00
                        </div>
                      </div>

                      <div className="item1">
                        <img src={cervaB} alt="" />
                        <div>
                          <h2>Bhahma chopp Lata</h2>
                          R$ 05,00
                        </div>
                      </div>
                      <div className="item1">
                        <img src={cerva} alt="" />
                        <div>
                          <h2>Heineken Long Neck</h2>
                          R$ 10,00
                        </div>
                      </div>
                      <div className="item1">
                        <img src={lata} alt="" />
                        <div>
                          <h2>Heineken Lata</h2>
                          R$ 10,00
                        </div>
                      </div>
                      <div className="item1">
                        <img src={cerva2} alt="" />
                        <div>
                          <h2>Antartica 600 ml</h2>
                          R$ 11,00
                        </div>
                      </div>
                    </section>
                  </div>
    );
}
export default Cervejas;