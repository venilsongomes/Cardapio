import cerva from '../assets/cervejas/cerva.png'
import cervaB from '../assets/cervejas/bhahma.webp'
import cervaB2 from '../assets/cervejas/cerveja-Brahma-600.png'
import cerva2 from '../assets/Cervejas/Antartica.png'



function Cervejas(){
    return(
        <div id="bebidas" className="linha">
                    <h2>Cervejas</h2>
                    <section className="item">
                      <div className="item1">
                        <img src={cervaB2} alt="" />
                        <div>
                          <h1>Bhahma 600</h1>
                          R$ 11,00
                        </div>
                      </div>
                      <div className="item1">
                        <img src={cervaB} alt="" />
                        <div>
                          <h1>Bhahma chopp Lata</h1>
                          R$ 10,00
                        </div>
                      </div>
                      <div className="item1">
                        <img src={cerva} alt="" />
                        <div>
                          <h1>Heineken Long Neck</h1>
                          R$ 10,00
                        </div>
                      </div>
                      <div className="item1">
                        <img src={cerva} alt="" />
                        <div>
                          <h1>Heineken Lata</h1>
                          R$ 10,00
                        </div>
                      </div>
                      <div className="item1">
                        <img src={cerva2} alt="" />
                        <div>
                          <h1>Antartica 600 ml</h1>
                          R$ 10,00
                        </div>
                      </div>
                    </section>
                  </div>
    );
}
export default Cervejas;