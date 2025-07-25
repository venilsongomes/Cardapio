import espeto from '../assets/espetos/espeto1.jpg'
import espeto2 from '../assets/espetos/espetinho2.webp'
import espeto3 from '../assets/espetos/coracao.webp'
import espeto4 from '../assets/espetos/Picanha3.jpg'
import espeto5 from '../assets/espetos/linguica.webp'
import espeto6 from '../assets/Espetos/bacon.svg';
import espeto7 from '../assets/Espetos/kafta-carne.svg';
import espeto8 from '../assets/Espetos/kafta-frango.svg';
import espeto9 from '../assets/Espetos/espeto.svg';
import espeto10 from '../assets/Espetos/provolone.webp';


function Espetos(){
    
    
    return(
        <div className="linha" id="espetos">
           
            <section className="item">

               <h1>Espetos</h1>

              <div className="item1">
                <img src={espeto4} alt="" />
                <div>
                  <h2>Picanha Montada</h2>
                  R$ 12,00
                  <br />
                </div>
              </div>
              <div className="item1">
                <img src={espeto2} alt="" />
                <div>
                  <h2>Queijo Coalho</h2>
                  R$ 10,00
                  <br />
                </div>
              </div>
              <div className="item1">
                <img src={espeto} alt="" />
                <div>
                  <h2>Contra Filé</h2>
                  R$ 10,00
                  <br />
                </div>
              </div>
              <div className="item1">
                <img src={espeto6} alt="" />
                <div>
                  <h2>Frango com Bacon</h2>
                  R$ 10,00
                </div>
              </div>
              <div className="item1">
                <img src={espeto5} alt="" />
                <div>
                  <h2>Linguiça</h2>
                  R$ 10,00
                </div>
              </div>
              <div className="item1">
                <img src={espeto3} alt="" />
                <div>
                  <h2>Coração de Frango</h2>
                  R$ 10,00
                </div>
              </div>

            <div className="item1">
                <img src={espeto3} alt="" />
                <div>
                  <h2>Medalhão</h2>
                  R$ 15,00
                </div>
              </div>

              <div className="item1">
                <img src={espeto9} alt="" />
                <div>
                  <h2>Cupin</h2>
                  R$ 12,00
                </div>
              </div>

              <div className="item1">
                <img src={espeto3} alt="" />
                <div>
                  <h2>Asinha de Frango</h2>
                  R$ 12,00
                </div>
              </div>

              <div className="item1">
                <img src={espeto8} alt="" />
                <div>
                  <h2>Kafta de Frango</h2>
                  R$ 12,00
                </div>
              </div>

              <div className="item1">
                <img src={espeto7} alt="" />
                <div>
                  <h2>Kafta Bovina</h2>
                  R$ 12,00
                </div>
              </div>

              <div className="item1">
                <img src={espeto10} alt="" />
                <div>
                  <h2>Provolone</h2>
                  R$ 10,00
                </div>
              </div>

            </section>
          </div>
    );
}
export default Espetos;