import cerva from '../assets/cervejas/cerva.png'
import cervaB from '../assets/cervejas/bhahma.webp'
import cervaB2 from '../assets/cervejas/cerveja-Brahma-600.png'
import cerva2 from '../assets/Cervejas/Antartica.png'
import lata from '../assets/Cervejas/lata.jpg'
import stela from '../assets/Cervejas/stela.webp'
import bohemia from '../assets/Cervejas/bohemia-600.jpg'
import original from '../assets/Cervejas/original.jpg'
import spaten from '../assets/Cervejas/spaten.webp'
import cachaca from '../assets/Drinks/cachaca.jpg'
import campari from '../assets/Drinks/campari.avif'
import conhaque from '../assets/Drinks/conhaque.webp'
import red from '../assets/Drinks/red.png'


function Cervejas() {
  return (
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

        <h1> Drinks</h1>

        <div className="item1">
          <img src={red} alt="" />
          <div>
            <h2>RED LABEL - Dose</h2>
            <br />
            R$ 10,00
          </div>
        </div>

        <div className="item1">
          <img src={cachaca} alt="" />
          <div>
            <h2>Cachaças - Dose</h2>
            Ypioca, da Roça, 51, Gengibre, São João, Para Tudo.
            <br />
            R$ 04,00
          </div>
        </div>

        <div className="item1">
          <img src={conhaque} alt="" />
          <div>
            <h2>Conhaque - Dose</h2>
            Presidente
            <br />
            R$ 05,00
          </div>
        </div>

        <div className="item1">
          <img src={campari} alt="" />
          <div>
            <h2>Campari e Smirnoff -  Dose</h2>
            <br />
            R$ 12,00
          </div>
        </div>

      </section>

    </div>
  );
}
export default Cervejas;