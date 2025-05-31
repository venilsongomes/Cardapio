import caldo from '../assets/Caldo/caldo.jpg'
import mocoto from '../assets/Caldo/mocoto.jpg'
import vacaAtolada from '../assets/Caldo/vacaAtolada.webp'



function Caldos() {
  return (
     <div className="" id="caldos">
                <h2>Caldos</h2>
                <section className="item">
                  <div className="item1">
                    <img src={caldo} alt="" />
                    <div>
                      <h1>Caldo de Frango</h1>
                      Acompanha Torrada + torresmo.
                      <br />
                      R$ 10,00
                    </div>
                  </div>
    
                  <div className='item1'> 
                    <img src={vacaAtolada} alt="" />
                    <div>
                      <h1>Vaca Atolada</h1>
                      Acompanha Torrada + torresmo.
                      <br />
                      R$ 10,00
                      </div>
                    
                     </div>
                     <div className='item1'> 
                    <img src={mocoto} alt="" />
                    <div>
                      <h1>Caldo de Mocotó</h1>
                      Acompanha Torrada + torresmo.
                      <br />
                      R$ 10,00
                      </div>
                    
                     </div>
                </section>
              </div>
  );
}
export default Caldos;