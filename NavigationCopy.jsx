import React, { Component } from "react";
import './navigationCopy.css';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function NavigationCopy () {
        return (
            
            <nav class=" sticky navbar navbar-dark py-lg-4 ">
                <ul class="navbar-nav mx-auto ">
                <div class="collapse navbar-collapse" id="navbarSupportedContent"> 
                    <li class="nav-item px-lg-4 text-center">
                        <Link to="/"><a class="nav-link text-uppercase text-center">Incio </a> </Link>
                    </li>
                    <li class="nav-item px-lg-4 text-center">
                        <Link to="/Sobre Nosotros"> <a class="nav-link text-uppercase text-center">Sobre Nosotros </a> </Link>
                    </li>
                    <li class="nav-item px-lg-4 text-center">
                        <Link to="/Agenda"> <a class="nav-link text-uppercase text-center"> Agenda </a> </Link>
                    </li>
                    </div>
                  </ul>
            
              </nav>
        );
        }
        
export default NavigationCopy;