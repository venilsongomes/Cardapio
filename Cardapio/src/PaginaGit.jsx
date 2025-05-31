import React from "react";
import Slider from "react-slick";
import './App.css';

function SimpleSlider() {
            var settings = {
              dots: false,
              infinite: true,
              speed: 400,
              slidesToShow: 3,
              slidesToScroll: 1
            }
        return (
           
                <Slider className="Slider" {...settings}>
                    <li><a href="#comidas">Jantinha</a></li>
                    <li><a href="#petiscos">Espetos</a></li>
                    <li><a href="#bebidas">Cervejas</a></li>
                    <li><a href="#destilados">Caldos</a></li>
                    <li><a href="#drinks">Doses</a></li>
                    <li><a href="#drinks">Porções</a></li>
                </Slider>
            
        );
        }
           export default SimpleSlider;