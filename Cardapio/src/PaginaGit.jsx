import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import './App.css';

function SimpleSlider() {
  const [activeSection, setActiveSection] = useState('');

  var settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['comidas', 'espeto', 'bebidas', 'caldos', 'drinks', 'porcoes', 'naoAlcool'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition > offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Slider className="Slider" {...settings}>
      <li><a href="#comidas" className={activeSection === 'comidas' ? 'active' : ''}>Jantinha</a></li>
      <li><a href="#espeto" className={activeSection === 'espeto' ? 'active' : ''}>Espetos</a></li>
      <li><a href="#bebidas" className={activeSection === 'bebidas' ? 'active' : ''}>Cervejas</a></li>
      <li><a href="#caldos" className={activeSection === 'caldos' ? 'active' : ''}>Caldos</a></li>
      <li><a href="#drinks" className={activeSection === 'drinks' ? 'active' : ''}>Doses</a></li>
      <li><a href="#porcoes" className={activeSection === 'porcoes' ? 'active' : ''}>Porções</a></li>
      <li><a href="#naoAlcool" className={activeSection === 'naoAlcool' ? 'active' : ''}>Outros</a></li>
    </Slider>
  );
}

export default SimpleSlider;