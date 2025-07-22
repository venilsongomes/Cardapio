import espeto6 from '../assets/Espetos/Linguica.webp'
import frango from '../assets/Porcoes/passarinha.jpg'
import cheddar from '../assets/Porcoes/cheddar.jpg'
import batata from '../assets/Porcoes/batata-frita.jpg'
import telapia from '../assets/Porcoes/telapia.jpg'
import pastel from '../assets/Porcoes/pastel.svg'
import peixe from '../assets/Porcoes/peixe.svg'
import peixinho from '../assets/Porcoes/peixinho.svg'
import quibe from '../assets/Porcoes/quibe.svg'
import Salada from '../assets/Porcoes/salada.svg'
import bolo from '../assets/Porcoes/bolo.svg'
import arroz from '../assets/Porcoes/arroz.svg'
import feijao from '../assets/Porcoes/tropeiro.svg'


function Porcoes() {
  return (
    <div className="" id="porcoes">

      <section className="item">
        <h1>Porções</h1>
        <div className="item1">
          <img src={frango} alt="Frango a passarinha" />
          <div>
            <h2>Frango a passarinha</h2>
            <br />
            <h3>R$ 32,00 </h3>
          </div>
        </div>

        <div className="item1">
          <img src={frango} alt="" />
          <div>
            <h2>Asa de Frango Recheada</h2>
            <br />
            <h3>R$ 41,90</h3>
          </div>
        </div>

        <div className="item1">
          <img src={bolo} alt="" />
          <div>
            <h2>Bolinho Frito</h2>
            <p> Sabores:</p>
            <li>Arroz</li>
            <li>Arroz com carne seca</li>
            <li>Bacalhau</li>
            <li>Mandioca c/ carne Seca Queijo</li>
            <li>Queijo</li>
            <br />
            <h3>R$ 29,90 </h3>
          </div>
        </div>

        <div className="item1">
          <img src={peixe} alt="" />
          <div>
            <h2>Lambari Temperado</h2>
            <br />
            <h3>R$ 47,00</h3>
          </div>
        </div>

        <div className="item1">
          <img src={pastel} alt="" />
          <div>
            <h2>Pastelzinho</h2>
            Sabores:
            <li>Carne</li>
            <li>Carne e Queijo</li>
            <li>Misto</li>
            <br />
            <h3>R$ 35,90</h3>
          </div>
        </div>

        <div className="item1">
          <img src={frango} alt="" />
          <div>
            <h2>Disco de Carne</h2>
            <span className="note">Obs: Temos também com Catupiry</span>
            <br />
            <h3>R$ 29,90 </h3>
          </div>
        </div>

        <div className="item1">
          <img src={quibe} alt="" />
          <div>
            <h2>Quibe</h2>
            <li>Com Queijo</li>
            <li>Catupiry </li>
            <br />
            <h3>R$ 29,90</h3>
          </div>
        </div>

        <div className="item1">
          <img src={arroz} alt="" />
          <div>
            <h2>Porções - Diversos</h2>
            <li>Arroz pequena </li>
            <li>Feijão Tropeiro </li>
            <br />
            <h3>R$ 11,00 cada</h3>
          </div>
        </div>

        <div className="item1">
          <img src={feijao} alt="" />
          <div>
            <h2>Porções - Diversos</h2>
            <li>Arroz Grande </li>
            <li>Feijão Tropeiro Grande</li>
            <br />
            <h3>R$ 15,00 cada</h3>
          </div>
        </div>

        <div className="item1">
          <img src={Salada} alt="" />
          <div>
            <h2>Salada</h2>
            Alface, Tomate, Palmito, Azeitona, Queijo Fresco.
            <br />
            <h3>R$ 22,00 cada</h3>
          </div>
        </div>

        <div className="item1">
          <img src={batata} alt="" />
          <div>
            <h2>Batata Frita tradicional</h2>
            Batata frita tradicional, servida sem queijo ou outros
            acompanhamentos.
            <br />
            <h3>R$ 32,00</h3>
          </div>
        </div>
        <div className="item1">
          <img src={cheddar} alt="" />
          <div>
            <h2>Batata Frita Especial</h2>
            Acompanha Queijo cheddar, Bacon.
            <br />
            <h3>R$ 47,00</h3>
          </div>
        </div>

        <div className="item1">
          <img src={telapia} alt="File de Pintado Empanada" />
          <div>
            <h2>File de Tilápia Empanada</h2>
            <br />
            <h3>R$ 47,00</h3>
          </div>
        </div>
        <div className="item1">
          <img src={peixinho} alt="" />
          <div>
            <h2>File de Pintado Empanada</h2>
            <br />
            <h3>R$ 47,00</h3>
          </div>
        </div>

        <div className="item1">
          <img src={telapia} alt="" />
          <div>
            <h2>Costelinha de Tilápia Empanada</h2>
            <br />
            <h3>R$ 47,00</h3>
          </div>
        </div>

        <div className="item1">
          <img src={telapia} alt="" />
          <div>
            <h2>Costelinha de Pintado Empanada</h2>
            <br />
            <h3>R$ 47,00</h3>
          </div>
        </div>

      </section>
    </div>
  );
}
export default Porcoes;