import React from 'react';
import './App.css';


import NavigationCopy from "./component/NavigationCopy.jsx"
import Header from './component/Header.jsx';
import Main from './component/Main';
import Asaide from './component/Asaide';
import Agenda from './component/Agenda';
import Footer from './component/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App () {
  return (
    <><div className="App" /><head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <title> Mister BarberShop</title>
      <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />

      <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossorigin="anonymous"></script>

      <link href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i" rel="stylesheet" />
      <link href="css/styles.css" rel="stylesheet" />
    </head>
      <body />
        <Router>
          <div>
            <Switch>
              <Route path="/Sobre Nosotros">
                  <Header/>
                  <NavigationCopy/>
                  <Asaide/>
                  <Footer/> 
              </Route>
              <Route path="/Agenda">  
                  <Header/>
                  <NavigationCopy/>
                  <Agenda/>
                  <Footer/> 
                  </Route>
              <Route path="/" exact>
                  <Header/>
                  <NavigationCopy/>
                  <Main/> 
                  <Footer/>             
              </Route>
            </Switch>
          </div>
        </Router></>
    );
  }

  function Home() {
    return <h2>Home</h2>;
  }

  function About() {
    return <h2>About</h2>;
  }

  function Users() {
    return <h2>Users</h2>;
  }


export default App;
