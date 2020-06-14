import React, {useEffect} from 'react';
import Logo from './img/logo.svg';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inicio from './Componentes/Inicio'
import Nosotros from './Componentes/Nosotros'
import Servicios from './Componentes/Servicios'
import Contacto from './Componentes/Contacto'
import Trabaja from './Componentes/Trabaja'
import M from "materialize-css"

function App() {

useEffect(() => {

  var elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems,{
    draggable:true
  });

},[])

  return (
    <Router>
      <div>
        <nav className="blue-grey lighten-5 indigo-text text-darken-4">
          <div className="nav-wrapper">
          <Link exact to="/">
            <img src={Logo} height="100%" alt="Logo"/>
            </Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link exact to="/"  className="indigo-text text-darken-2 sidenav-close">Home</Link>
              </li>
              <li>
                <Link to="/nosotros" className="indigo-text text-darken-2">Nosotros</Link>
              </li>
              <li>
                <Link to="/trabaja" className="indigo-text text-darken-2">Trabaja con nosotros</Link>
              </li>
              <li>
                <Link to="/servicios" className="indigo-text text-darken-2">Servicios</Link>
              </li>
              <li>
                <a href="https://forms.gle/gEyKeQjQbs9wqsXTA" className="indigo-text text-darken-2" target="_blank" rel="noopener noreferrer">Contacto</a>
              </li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
              <li>
                <Link exact to="/"  className="indigo-text text-darken-2 sidenav-close">Inicio</Link>
              </li>
              <li>
                <Link to="/nosotros" className="indigo-text text-darken-2 sidenav-close">Nosotros</Link>
              </li>
              <li>
                <Link to="/trabaja" className="indigo-text text-darken-2 sidenav-close">Trabaja con nosotros</Link>
              </li>
              <li>
                <Link to="/servicios" className="indigo-text text-darken-2 sidenav-close">Servicios</Link>
              </li>
              <li>
                <a href="https://forms.gle/gEyKeQjQbs9wqsXTA" className="indigo-text text-darken-2" target="_blank" rel="noopener noreferrer">Contacto</a>
              </li>
        </ul>

        <Switch>
          <Route exact path="/" component={Inicio}/>
          <Route path="/nosotros" component={Nosotros} />
          <Route path="/servicios" component={Servicios} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/trabaja" component={Trabaja} />
        </Switch>
      </div>
      <footer className="page-footer blue-grey lighten-5">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="indigo-text text-darken-4">Thorium</h5>
              <p className="indigo-text text-darken-4">Consultoría de talento humano</p>
              <p className="indigo-text text-darken-2">Contactanos a: info@thoriumec.com</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="indigo-text text-darken-4">Mapa del sitio</h5>
              <ul>
              <li>
                <Link exact to="/"  className="indigo-text text-darken-2">Inicio</Link>
              </li>
              <li>
                <Link to="/nosotros" className="indigo-text text-darken-2">Nosotros</Link>
              </li>
              <li>
                <Link to="/trabaja" className="indigo-text text-darken-2">Trabaja con nosotros</Link>
              </li>
              <li>
                <Link to="/servicios" className="indigo-text text-darken-2">Servicios</Link>
              </li>
              <li>
                <a href="https://forms.gle/gEyKeQjQbs9wqsXTA" className="indigo-text text-darken-2" target="_blank" rel="noopener noreferrer">Contacto</a>
              </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright indigo-text text-darken-4">
          <div className="container">
          © 2020 Copyright
          <a className="indigo-text text-darken-4 right" href="#!">Powered by Inventoree</a>
          </div>
        </div>
        <div className="fixed-action-btn">
        <a href="https://api.whatsapp.com/send?phone=593999095974&text=Hola!%20Quiero%20recibir%20mas%20informacion" target="_blank" rel="noopener noreferrer" className="btn-floating btn-large green">
          <img src={require("./img/WhatsLogo.png")} width="100%" alt="Whatsapp"/>
        </a>
      </div>
     </footer>
    </Router>
    
  );
}

export default App;
