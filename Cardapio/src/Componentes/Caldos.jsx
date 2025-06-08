import caldo from '../assets/Caldo/caldo.jpg'
import mocoto from '../assets/Caldo/mocoto.jpg'
import vacaAtolada from '../assets/Caldo/vacaAtolada.webp'



function Caldos() {
  return (
     <div className="" id="caldos">
                
                <section className="item">
                  <h1>Caldos</h1>

                  <div className="item1">
                    <img src={caldo} alt="" />
                    <div>
                      <h2>Caldo de Frango</h2>
                     Acompanha Torrada, Cheiro Verde e Torresmo.
                      <br />
                      R$ 15,00
                    </div>
                  </div>
    
                  <div className='item1'> 
                    <img src={vacaAtolada} alt="" />
                    <div>
                      <h2>Vaca Atolada</h2>
                      Acompanha Torrada, Cheiro Verde e Torresmo.
                      <br />
                      R$ 15,00
                      </div>
                    
                     </div>
                     <div className='item1'> 
                    <img src={mocoto} alt="" />
                    <div>
                      <h2>Feijão</h2>
                      Acompanha Torrada, Cheiro Verde e Torresmo.
                      <br />
                      R$ 15,00
                      </div>
                    
                     </div>
                </section>
              </div>
  );
}
export default Caldos;