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
   
  <Slider className="slider-links" {...settings}>
    <div><a href="#comidas" className={activeSection === 'comidas' ? 'active' : ''}>Jantinha</a></div>
    <div><a href="#espeto" className={activeSection === 'espeto' ? 'active' : ''}>Espetos</a></div>
    <div><a href="#bebidas" className={activeSection === 'bebidas' ? 'active' : ''}>Bebidas</a></div>
    <div><a href="#caldos" className={activeSection === 'caldos' ? 'active' : ''}>Caldos</a></div>
    <div><a href="#naoAlcool" className={activeSection === 'naoAlcool' ? 'active' : ''}>Outros</a></div>
  </Slider>
);
}

export default Slideer;