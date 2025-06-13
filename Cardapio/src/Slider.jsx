import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Slider from "react-slick";


    function Slideer() {
      const [activeSection, setActiveSection] = useState('');

      
    
      useEffect(() => {
         const handleScroll = () => {
           const sections = ['jantinha', 'espetos', 'caldos', 'bebidas', 'porcoes'];
           const scrollPosition = window.scrollY + window.innerHeight / 2;
     
           sections.forEach((section) => {
             const element = document.getElementById(section);
             if (element) {
               const { offsetTop, offsetHeight } = element;
               if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                 setActiveSection(section);
               }
             }
           });
         };
     
         window.addEventListener('scroll', handleScroll);
         return () => window.removeEventListener('scroll', handleScroll);
       }, []);

  return (
   
           <nav className="nav01">
           <ul>
            <li> <a href="#jantinha"  className={activeSection === 'jantinha' ? 'active' : ''}>Jantinha</a></li>
            <li> <a href="#espetos"  className={activeSection === 'espetos' ? 'active' : ''}>Espetos</a></li>
            <li> <a href="#caldos" className={activeSection === 'caldos' ? 'active' : ''}>Caldos</a></li>
            <li> <a href="#bebidas" className={activeSection === 'bebidas' ? 'active' : ''}>Bebidas</a></li>
            <li> <a href="#porcoes" className={activeSection === 'porcoes' ? 'active' : ''}>Porções</a></li>
           </ul>
           
          </nav>
);
}

export default Slideer;