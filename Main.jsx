import React from "react";
import "./Main.css"
import Corte from './Corte.png';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  


function Main() {
    return (
 <section class="page-section clearfix">
            <div class="container">
                <div class="intro">
                <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src={Corte} alt="Corte" />
                    <div class="intro-text left-0 text-center bg-faded p-5 rounded">
                        <h2 class="section-heading mb-4">
                            <span class="section-heading-upper">Un gran corte</span>
                            <span class="section-heading-lower">Conlleva una gran responsabilidad</span>
                        </h2>
                        <p class="mb-3">En mister Barber shop nos centramos en el bien estar y en el cuidar de nuestro clientes. ¿Moderno? ¿Interesante? Mister Barber Shop es la respuesta.</p>
                        <div class="intro-button mx-auto"><a class="btn btn-primary btn-xl boton3:hover" href="/Agenda">¡Agendese Ahora!</a></div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
    
    export default Main;