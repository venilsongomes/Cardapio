import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Slider from "react-slick";


    function Slideer() {
      const [activeSection, setActiveSection] = useState('');

      var settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 0.5
      }
    
      useEffect(() => {
        const handleScroll = () => {
          const sections = ['comidas', 'espeto', 'bebidas', 'caldos', 'drinks', 'porcoes', 'naoAlcool'];
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
    
     <div className="slider-links">
      
      <a href="#comidas" className={activeSection === 'comidas' ? 'active' : ''}>Jantinha</a>
      <a href="#espeto" className={activeSection === 'espeto' ? 'active' : ''}>Espetos</a>
      <a href="#bebidas" className={activeSection === 'bebidas' ? 'active' : ''}>Cervejas</a>
      <a href="#caldos" className={activeSection === 'caldos' ? 'active' : ''}>Caldos</a>
      <a href="#drinks" className={activeSection === 'drinks' ? 'active' : ''}>Drinks</a>
      <a href="#porcoes" className={activeSection === 'porcoes' ? 'active' : ''}>Porções</a>
      <a href="#naoAlcool" className={activeSection === 'naoAlcool' ? 'active' : ''}>Não alcoólico</a>
     
    </div>
   
   
  );
}

export default Slideer;