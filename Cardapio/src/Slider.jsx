import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Slider from "react-slick";


    function Slideer() {
      const [activeSection, setActiveSection] = useState('');

      var settings = {
        dots: false,
        infinite: false,
        speed:500,
        slidesToShow: 5,
        slidesToScroll:1,
        arrows:false
    

      }
    
      useEffect(() => {
         const handleScroll = () => {
           const sections = ['comidas', 'espetos', 'bebidas', 'caldos', 'naoAlcool'];
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
   
  <Slider className="slider-links" {...settings}>
    <a href="#comidas" className={activeSection === 'comidas' ? 'active' : ''}>Janta</a>
   <a href="#espeto" className={activeSection === 'espeto' ? 'active' : ''}>Espeto</a>
    <a href="#bebidas" className={activeSection === 'bebidas' ? 'active' : ''}>Bebida</a>
    <a href="#caldos" className={activeSection === 'caldos' ? 'active' : ''}>Caldo</a>
    <a href="#naoAlcool" className={activeSection === 'naoAlcool' ? 'active' : ''}>Outros</a>
  </Slider>
);
}

export default Slideer;