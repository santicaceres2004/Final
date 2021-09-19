import React from "react";
import "./Header.css"

function Header() {
    return (
        <header>
        <h1 class="site-heading text-center text-faded d-none d-lg-block">
                <span class="site-heading-upper text-primary mb-3"> Barberia </span>
                <span class="site-heading-lower">Mister Barber Shop</span>
            </h1>
      </header>
    );
}

export default Header;