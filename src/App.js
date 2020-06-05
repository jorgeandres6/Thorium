import React from 'react';
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




function App() {

  return (
    <Router basename="/build.com">
      <div>
        <nav className="blue-grey lighten-5 indigo-text text-darken-4">
          <div className="nav-wrapper">
          <Link exact to="/">
            <img src={Logo} height="100%" alt="Logo"/>
            </Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link exact to="/"  className="indigo-text text-darken-2">Home</Link>
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
                <Link to="/contacto" className="indigo-text text-darken-2">Contacto</Link>
              </li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="mobile-demo">
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
                <Link to="/contacto" className="indigo-text text-darken-2">Contacto</Link>
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
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Footer Content</h5>
              <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2020 Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </div>
     </footer>
    </Router>
    
  );
}

export default App;
