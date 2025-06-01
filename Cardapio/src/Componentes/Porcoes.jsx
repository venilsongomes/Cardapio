import espeto6 from '../assets/Espetos/Linguica.webp'
import frango  from '../assets/Porcoes/passarinha.jpg'
import cheddar  from '../assets/Porcoes/cheddar.jpg'
import batata  from '../assets/Porcoes/batata-frita.jpg'
import telapia from '../assets/Porcoes/telapia.jpg'






function Porcoes(){
    return(
       <div className="" id="porcoes">
            
            <section className="item">
              <h1>Porções</h1>
              <div className="item1">
                <img src={frango} alt="" />
                <div>
                  <h2>Frango a passarinha</h2>
                  Acompanha arroz, tropeiro, mandioca e vinagrete.
                  <br />
                  R$ 10,00
                </div>
              </div>
              <div className="item1">
                <img src={batata} alt="" />
                <div>
                  <h2>Batata Frita tradicional</h2>
                   Batata sem queijo .
                  <br />
                  R$ 10,00
                </div>
              </div>
              <div className="item1">
                <img src={cheddar} alt="" />
                <div>
                  <h2>Batata Frita Especial</h2>
                  Acompanha Quiejo cheddar, Bacon.
                  <br />
                  R$ 10,00
                </div>
              </div>
             
              <div className="item1">
                <img src={telapia} alt="" />
                <div>
                  <h2>File de Tilápia</h2>
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