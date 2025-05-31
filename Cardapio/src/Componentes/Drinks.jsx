import cachaca from '../assets/Drinks/cachaca.jpg'
import campari from '../assets/Drinks/campari.avif'
import conhaque from '../assets/Drinks/conhaque.webp'
import red from '../assets/Drinks/red.png'


function Drinks(){
    return(
       <div className="" id="drinks">
                   <h2>Drinks</h2>
       
                   <section className="item">
       
       
       
                     <div className="item1">
                       <img src={red} alt="" />
                       <div>
                         <h1>RED LABEL - Dose</h1>
                         <br />
                         R$ 10,00
                       </div>
                     </div>
                    
                    <div className="item1">
                       <img src={cachaca} alt="" />
                       <div>
                         <h1>Cachaça - Dose</h1>
                         <br />
                         R$ 10,00
                       </div>
                     </div>
       
       
                     <div className="item1">
                       <img src={conhaque} alt="" />
                       <div>
                         <h1>Conhaque - Dose</h1>
                         <br />
                         R$ 10,00
                       </div>
                     </div>
       
                     <div className="item1">
                       <img src={campari} alt="" />
                       <div>
                         <h1>Campari - Doses</h1>
                         <br />
                         R$ 10,00
                       </div>
                     </div>
       
       
                   </section>
                 </div>
    );
}
export default Drinks;