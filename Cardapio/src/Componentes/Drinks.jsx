import cachaca from '../assets/Drinks/cachaca.jpg'
import campari from '../assets/Drinks/campari.avif'
import conhaque from '../assets/Drinks/conhaque.webp'
import red from '../assets/Drinks/red.png'


function Drinks(){
    return(
       <div className="" id="drinks">
                  
       
                   <section className="item">
        <h1>Drinks</h1>
       
       
                     <div className="item1">
                       <img src={red} alt="" />
                       <div>
                         <h2>RED LABEL - Dose</h2>
                         <br />
                         R$ 10,00
                       </div>
                     </div>
                    
                    <div className="item1">
                       <img src={cachaca} alt="" />
                       <div>
                         <h2>Cachaça - Dose</h2>
                         <br />
                         R$ 10,00
                       </div>
                     </div>
       
       
                     <div className="item1">
                       <img src={conhaque} alt="" />
                       <div>
                         <h2>Conhaque - Dose</h2>
                         <br />
                         R$ 10,00
                       </div>
                     </div>
       
                     <div className="item1">
                       <img src={campari} alt="" />
                       <div>
                         <h2>Campari - Doses</h2>
                         <br />
                         R$ 10,00
                       </div>
                     </div>
       
       
                   </section>
                 </div>
    );
}
export default Drinks;