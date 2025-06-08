import espeto6 from '../assets/Espetos/Linguica.webp'
import frango from '../assets/Porcoes/passarinha.jpg'
import cheddar from '../assets/Porcoes/cheddar.jpg'
import batata from '../assets/Porcoes/batata-frita.jpg'
import telapia from '../assets/Porcoes/telapia.jpg'






function Porcoes() {
  return (
    <div className="" id="porcoes">

      <section className="item">
        <h1>Porções</h1>
        <div className="item1">
          <img src={frango} alt="Frango a passarinha" />
          <div>
            <h2>Frango a passarinha</h2>
            Acompanha arroz, tropeiro, mandioca e vinagrete.
            <br />
            R$ 32,00
          </div>
        </div>

        <div className="item1">
          <img src={frango} alt="" />
          <div>
            <h2>Asa de De Frango Recheada</h2>

            <br />
            R$ 41,90
          </div>
        </div>

        <div className="item1">
          <img src={frango} alt="" />
          <div>
            <h2>Bolinho Frito</h2>
            Sabores:  <br />
            - Arroz, Arroz com Carne Seca, Bacalhau, Mandioca C/ Carne Seca Queijo.

            <br />
            R$ 29,90
          </div>
        </div>

        <div className="item1">
          <img src={frango} alt="" />
          <div>
            <h2>Disco De Carne</h2>
            Acompanha arroz, tropeiro, mandioca e vinagrete.
            <br />
            R$ 29,90
          </div>
        </div>



        <div className="item1">
          <img src={frango} alt="" />
          <div>
            <h2>Lambari Temperado</h2>
            Acompanha arroz, tropeiro, mandioca e vinagrete.
            <br />
            R$ 47,00
          </div>
        </div>

        <div className="item1">
          <img src={frango} alt="" />
          <div>
            <h2>Pastel de Carne ou Queijo</h2>

            <br />
            R$ 35,90
          </div>
        </div>

        <div className="item1">
          <img src={frango} alt="" />
          <div>
            <h2>Pastelzinho de Carne C/ Queijo</h2>

            <br />
            R$ 35,90
          </div>
        </div>

        <div className="item1">
          <img src={frango} alt="" />
          <div>
            <h2>Disco De Carne</h2>
            <span className="note">Obs: Temos também com Catupiry</span>
            <br />
            R$ 29,90
          </div>
        </div>



        <div className="item1">
          <img src={frango} alt="" />
          <div>
            <h2>Pastelzinho Misto</h2>
            <br />
            R$ 37,90
          </div>
        </div>


        <div className="item1">
          <img src={frango} alt="" />
          <div>
            <h2>Quibe</h2>
            Com Queijo ou Catupiry
            <br />
            R$ 29,90
          </div>
        </div>


        <div className="item1">
          <img src={frango} alt="" />
          <div>
            <h2>Porções - Diversos</h2>
            - Arroz pequena <br />
            - Feijão Tropeiro
            <br />
            R$ 11,00 cada
          </div>
        </div>

        <div className="item1">
          <img src={frango} alt="" />
          <div>
            <h2>Porções - Diversos</h2>
            - Arroz Grande <br />
            - Feijão Tropeiro Grande
            <br />
            R$ 15,00 cada
          </div>
        </div>

        <div className="item1">
          <img src={frango} alt="" />
          <div>
            <h2>Salada</h2>
            Alface, Tomate, Palmito, Azeitona, Queijo Fresco.
            <br />
            R$ 22,00 cada
          </div>
        </div>

        <div className="item1">
          <img src={batata} alt="" />
          <div>
            <h2>Batata Frita tradicional</h2>
            Batata frita tradicional, servida sem queijo ou outros acompanhamentos.
            <br />
            R$ 32,00
          </div>
        </div>
        <div className="item1">
          <img src={cheddar} alt="" />
          <div>
            <h2>Batata Frita Especial</h2>
            Acompanha Queijo cheddar, Bacon.
            <br />
            R$ 47,00
          </div>
        </div>

        <div className="item1">
          <img src={telapia} alt="File de Pintado Empanada" />
          <div>
            <h2>File de Tilápia Empanada</h2>
            <br />
            R$ 47,00
          </div>
        </div>
        <div className="item1">
          <img src={telapia} alt="" />
          <div>
            <h2>File de Pintado Empanada</h2>
            <br />
            R$ 47,00
          </div>
        </div>

        <div className="item1">
          <img src={telapia} alt="" />
          <div>
            <h2>Costelinha de Tilápia Empanada</h2>
            <br />
            R$ 47,00
          </div>
        </div>

        <div className="item1">
          <img src={telapia} alt="" />
          <div>
            <h2>Costelinha de Pintado Empanada</h2>
            <br />
            R$ 47,00
          </div>
        </div>


      </section>
    </div>
  );
}
export default Porcoes;