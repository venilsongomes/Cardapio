import React from "react";
import Slider from "react-slick";
import './App.css';

function SimpleSlider() {
            var settings = {
              dots: false,
              infinite: true,
              speed: 400,
              slidesToShow: 4,
              slidesToScroll: 1
            }
        return (
           
                <Slider className="Slider" {...settings}>
                    <li><a href="#comidas">Jantinha</a></li>
                    <li><a href="#espeto">Espetos</a></li>
                    <li><a href="#bebidas">Cervejas</a></li>
                    <li><a href="#caldos">Caldos</a></li>
                    <li><a href="#drinks">Doses</a></li>
                    <li><a href="#porcoes">Porções</a></li>
                    <li><a href="#naoAlcool" >Não alcoólico</a></li>
                </Slider>
            
        );
        }
           export default SimpleSlider;