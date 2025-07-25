import cerva from '../assets/cervejas/7.svg';
import cervaB from '../assets/cervejas/bhahma.svg';

import cervaB2 from '../assets/cervejas/8.svg';
import cerva2 from '../assets/Cervejas/2.svg';

import lata from '../assets/Cervejas/10.svg';

import stela from '../assets/Cervejas/16.svg';
import bohemia from '../assets/Cervejas/7.svg';
import original from '../assets/Cervejas/11.svg';
import spaten from '../assets/Cervejas/15.svg';

import cachaca from '../assets/Drinks/cachaca.jpg';
import campari from '../assets/Drinks/campari.avif';
import duplo from '../assets/Cervejas/9.svg';


import red from '../assets/Drinks/red.png';
import redbull from '../assets/sem-alcool/redbull.png';
import agua from '../assets/sem-alcool/agua.jpg';
import coca1 from '../assets/sem-alcool/coca-lt.svg';
import suco from '../assets/sem-alcool/suco.svg';


import skoll from '../assets/Cervejas/12.svg';
import skollg from '../assets/Cervejas/13.svg';

import spatens from '../assets/Cervejas/17.svg';

import amistel from '../assets/Cervejas/Amistel.svg';
import bohemial from '../assets/Cervejas/bohemia.svg';
import bud from '../assets/Cervejas/6.svg';

import sol from '../assets/Cervejas/14.svg';
import antarticaL from '../assets/Cervejas/1.svg';

import extra from '../assets/sem-alcool/extra.jpg';
import coca2 from '../assets/sem-alcool/coca.webp';
import creme from '../assets/sem-alcool/creme.jpg';
function Cervejas() {
  return (
    <div id="bebidas" className="linha">
      <section className="item">
        <h1>Cervejas</h1>

        <div className="item1">
          <img src={cerva} alt="" />
          <div>
            <h2>Heineken 600</h2>
            <h3>R$ 15,00</h3>
          </div>
        </div>

        <div className="item1">
          <img src={cervaB2} alt="" />
          <div>
            <h2>Bhahma 600</h2>
            <h3>R$ 11,00</h3>
          </div>
        </div>

        <div className="item1">
          <img src={cervaB2} alt="" />
          <div>
            <h2>Bhahma Duplo Malte 600</h2>
            <h3>R$ 12,00</h3>
          </div>
        </div>

        <div className="item1">
          <img src={spaten} alt="" />
          <div>
            <h2>Spaten - 600</h2>
            <h3>R$ 13,00</h3>
          </div>
        </div>

        <div className="item1">
          <img src={bohemia} alt="" />
          <div>
            <h2>Bohemia</h2>
            <h3>R$ 11,00</h3>
          </div>
        </div>

        <div className="item1">
          <img src={original} alt="" />
          <div>
            <h2>Original - 600</h2>
            <h3>R$ 14,00</h3>
          </div>
        </div>

        <div className="item1">
          <img src={stela} alt="" />
          <div>
            <h2>Stella Artois - 600</h2>
            <h3>R$ 13,00</h3>
          </div>
        </div>

        <div className="item1">
          <img src={skollg} alt="" />
          <div>
            <h2>Skol 600</h2>
            <h3>R$ 11,00</h3>
          </div>
        </div>

        <div className="item1">
          <img src={cerva2} alt="" />
          <div>
            <h2>Antartica 600 ml</h2>
            <h3>R$ 11,00</h3>
          </div>
        </div>

        <h1>Cerveja Lata</h1>

        <div className="item1">
          <img src={cervaB} alt="" />
          <div>
            <h2>Bhahma chopp </h2>
            <h3>R$ 05,00</h3>
          </div>
        </div>

        <div className="item1">
          <img src={duplo} alt="" />
          <div>
            <h2>Bhahma Duplo Malte </h2>
            <h3>R$ 05,50</h3>
          </div>
        </div>

        <div className="item1">
          <img src={antarticaL}  alt="" />
          <div>
            <h2>Antartica</h2>
            <h3>R$ 05,00</h3>
          </div>
        </div>

        <div className="item1">
          <img src={amistel} alt="" />
          <div>
            <h2>Amistel </h2>
            <h3>R$ 05,50</h3>
          </div>
        </div>

        <div className="item1">
          <img src={spatens}  alt="" />
          <div>
            <h2>Spaten </h2>
            <h3>R$ 05,50</h3>
          </div>
        </div>

        <div className="item1">
          <img src={lata} alt="" />
          <div>
            <h2>Heineken </h2>
            <h3>R$ 06,50</h3>
          </div>
        </div>

        <div className="item1">
          <img src={skoll} alt="" />
          <div>
            <h2>Skol </h2>
            <h3>R$ 05,00</h3>
          </div>
        </div>

        <div className="item1">
          <img src={bohemial} alt="" />
          <div>
            <h2>Bohemia </h2>
            <h3>R$ 05,00</h3>
          </div>
        </div>

        <h1>Long Neck</h1>
      
        <div className="item1">
          <img src={cerva} alt="" />
          <div>
            <h2>Heineken </h2>
            <h3>R$ 09,00</h3>
          </div>
        </div>

        <div className="item1">
          <img src={cerva} alt="" />
          <div>
            <h2>Heineken Zero</h2>
            <h3>R$ 8,50</h3>
          </div>
        </div>

        <div className="item1">
          <img src={bud} alt="" />
          <div>
            <h2>BudWeser</h2>
            <h3>R$ 08,00</h3>
          </div>
        </div>

        <div className="item1">
          <img src={sol} alt="" />
          <div>
            <h2>Sol</h2>
            <h3>R$ 08,00</h3>
          </div>
        </div>

        <h1>Doses</h1>

        <div className="item1">
          <img src={red} alt="" />
          <div>
            <h2>Whisks - Dose</h2>
            <li>Red Label</li>
            <li>Old Par</li>
            <br />
            <h3>R$ 12,00</h3>
          </div>
        </div>

        <div className="item1">
          <img src={cachaca} alt="" />
          <div>
            <h2>Cachaças - Dose</h2>
            <li>Ypioca</li>
            <li>Da Raça</li>
            <li>51</li>
            <li>Gengibre</li>
            <li>São João da barra</li>
            <li>Para Tudo</li>
            <li>Presidente</li>
            <br />
            <h3>R$ 05,00</h3>
          </div>
        </div>

        <div className="item1">
          <img src={campari} alt="" />
          <div>
            <h2>Campari e Smirnoff - Dose</h2>
            <br />
            <h3>R$ 12,00</h3>
          </div>
        </div>

        <h1>Não Alcoólico</h1>

       <div className="item1">
          <img src={coca2} alt="" />
          <div>
            <h2>Coca Cola - 2 litros</h2>
            
             <br />
            <h3>R$ 14,00</h3>
          </div>
        </div>

        <div className="item1">
          <img src={coca2} alt="" />
          <div>
            <h2>Coca Cola</h2>
             <br />
            <h3>R$ 06,50</h3>
          </div>
        </div>

        <div className="item1">
          <img src={coca1} alt="" />
          <div>
            <h2>Refri Lata</h2>
            <li>Fanta Laranja</li>
            <li>Mineiro</li>
            <li>Sprite</li>
            <li>Guarana</li>
             <br />
            <h3>R$ 06,00</h3>
          </div>
        </div>

        <div className="item1">
          <img src={coca1} alt="" />
          <div>
            <h2>Refri 600</h2>
            <li>Fanta Laranja</li>
            <li>Mineiro</li>
            <li>Sprite</li>
            <li>Guarana</li>
             <br />
            <h3>R$ 06,00</h3>
          </div>
        </div>

        <div className="item1">
          <img src={redbull} alt="" />
          <div>
            <h2>Energetico RedBull</h2>
             <br />
            <h3>R$ 14,00</h3>
          </div>
        </div>

        <div className="item1">
          <img src={extra} alt="" />
          <div>
            <h2>Extra Power</h2>
             <br />
            <h3>R$ 13,00</h3>
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
            <h3>R$ 10,00</h3>
          </div>
        </div>

        <div className="item1">
          <img src={creme} alt="" />
          <div>
            <h2>Cremes</h2>
            <li>Morango</li>
            <li>Maracujá</li>
            <li>Cupuaçu</li>
            <li>Abacaxi</li>
             <br />
            <h3>R$ 15,00</h3>
          </div>
        </div>

        <div className="item1">
          <img src={agua} alt="" />
          <div>
            <h2>Água Mineral</h2>
             <br />
            <h3>R$ 5,00</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cervejas;
