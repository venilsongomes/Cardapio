import espeto from '../assets/espetos/espeto1.jpg'
import espeto2 from '../assets/espetos/espetinho2.webp'
import espeto3 from '../assets/espetos/coracao.webp'
import espeto4 from '../assets/espetos/Picanha3.jpg'
import espeto5 from '../assets/espetos/frango.jpg'


function Espetos(){
    
    
    return(
        <div className="linha" id="espeto">
            <h2>Espetos</h2>
            <section className="item">
              <div className="item1">
                <img src={espeto4} alt="" />
                <div>
                  <h1>Picanha Montada</h1>
                  R$ 10,00
                  <br />
                </div>
              </div>
              <div className="item1">
                <img src={espeto2} alt="" />
                <div>
                  <h1>Queijo Coalho</h1>
                  R$ 10,00
                  <br />
                </div>
              </div>
              <div className="item1">
                <img src={espeto} alt="" />
                <div>
                  <h1>Contra Filé</h1>
                  R$ 10,00
                  <br />
                </div>
              </div>
              <div className="item1">
                <img src={espeto5} alt="" />
                <div>
                  <h1>Frango com Bacon</h1>
                  R$ 10,00
                </div>
              </div>
              <div className="item1">
                <img src={espeto5} alt="" />
                <div>
                  <h1>Linguiça</h1>
                  R$ 10,00
                </div>
              </div>
              <div className="item1">
                <img src={espeto3} alt="" />
                <div>
                  <h1>Coração de Frango</h1>
                  R$ 10,00
                </div>
              </div>
            </section>
          </div>
    );
}
export default Espetos;