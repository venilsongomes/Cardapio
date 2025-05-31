import espeto6 from '../assets/Espetos/Linguica.webp'
import frango  from '../assets/Porcoes/passarinha.jpg'
import cheddar  from '../assets/Porcoes/cheddar.jpg'
import batata  from '../assets/Porcoes/batata-frita.jpg'
import telapia from '../assets/Porcoes/telapia.jpg'






function Porcoes(){
    return(
       <div className="" id="porcoes">
            <h2>Porções</h2>
            <section className="item">
              <div className="item1">
                <img src={frango} alt="" />
                <div>
                  <h1>Frango a passarinha</h1>
                  Acompanha arroz, tropeiro, mandioca e vinagrete.
                  <br />
                  R$ 10,00
                </div>
              </div>
              <div className="item1">
                <img src={batata} alt="" />
                <div>
                  <h1>Batata Frita tradicional</h1>
                   Batata sem queijo .
                  <br />
                  R$ 10,00
                </div>
              </div>
              <div className="item1">
                <img src={cheddar} alt="" />
                <div>
                  <h1>Batata Frita Especial</h1>
                  Acompanha Quiejo cheddar, Bacon.
                  <br />
                  R$ 10,00
                </div>
              </div>
             
              <div className="item1">
                <img src={telapia} alt="" />
                <div>
                  <h1>File de Tilápia</h1>
                  Acompanha Quiejo cheddar, Bacon.
                  <br />
                  R$ 10,00
                </div>
              </div>


            </section>
          </div>
    );
}
export default Porcoes;