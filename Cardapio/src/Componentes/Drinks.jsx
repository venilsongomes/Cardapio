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
                         <h2>Cachaças - Dose</h2>
                         Ypioca, da Roça, 51, Gengibre, São João, Para Tudo.
                         <br />
                         R$ 04,00
                       </div>
                     </div>
       
       
                     <div className="item1">
                       <img src={conhaque} alt="" />
                       <div>
                         <h2>Conhaque - Dose</h2>
                         Presidente
                         <br />
                         R$ 05,00
                       </div>
                     </div>
       
                     <div className="item1">
                       <img src={campari} alt="" />
                       <div>
                         <h2>Campari e Smirnoff -  Dose</h2>
                         <br />
                         R$ 12,00
                       </div>
                     </div>
       
       
                   </section>
                 </div>
    );
}
export default Drinks;