import cerva from '../assets/cervejas/cerva.png'
import cervaB from '../assets/cervejas/bhahma.webp'
import cervaB2 from '../assets/cervejas/cerveja-Brahma-600.png'
import cerva2 from '../assets/Cervejas/Antartica.png'
import lata from '../assets/Cervejas/lata.jpg'



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
                        <img src={cervaB} alt="" />
                        <div>
                          <h2>Bhahma chopp Lata</h2>
                          R$ 10,00
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
                          R$ 10,00
                        </div>
                      </div>
                    </section>
                  </div>
    );
}
export default Cervejas;