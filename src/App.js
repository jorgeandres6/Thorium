import React, {useEffect} from 'react';
import Logo from './img/logo.svg';
import logoL from './img/logoL.svg';
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
import Contacto2 from './Componentes/Contacto2'

function App() {

useEffect(() => {

  var elems = document.querySelectorAll('.sidenav');
  M.Sidenav.init(elems,{
    draggable:true
  });

},[])

  //style={{backgroundImage:"url('img/poliblack.jpg')"}}

  //<a href="https://forms.gle/gEyKeQjQbs9wqsXTA" className="grey-text text-lighten-2" target="_blank" rel="noopener noreferrer">Contacto</a>

  //style={{backgroundImage:"url('img/poliblack.jpg')"}}

  return (
    <Router>
      <div>
        <div className="navbar-fixed">
          <nav className="grey darken-1" style={{backgroundImage:"url('img/poliblacks.jpg')"}}>
            <div className="nav-wrapper">
            <Link exact to="/">
              <img src={logoL} height="100%" alt="Logo" style={{marginLeft:"2em"}}/>
              </Link>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons grey-text text-lighten-2" >menu</i></a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link exact to="/"  className="grey-text text-lighten-2 sidenav-close">Inicio</Link>
                </li>
                <li>
                  <Link to="/nosotros" className="grey-text text-lighten-2">Nosotros</Link>
                </li>
                <li>
                  <Link to="/trabaja" className="grey-text text-lighten-2">Trabaja con nosotros</Link>
                </li>
                <li>
                  <Link to="/servicios" className="grey-text text-lighten-2">Servicios</Link>
                </li>
                <li>
                <Link to="/contacto2" className="grey-text text-lighten-2">Contacto</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="sidenav" id="mobile-demo" style={{backgroundColor:"#e0e0e0"}}>
              <div className="center-align">
                <img src={Logo} style={{width:"50%"}} alt="Logo"/>
              </div>
              <ul>
                <li>
                  <Link exact to="/"  className="blue-text text-darken-4 sidenav-close">Inicio</Link>
                </li>
                <li>
                  <Link to="/nosotros" className="blue-text text-darken-4 sidenav-close">Nosotros</Link>
                </li>
                <li>
                  <Link to="/trabaja" className="blue-text text-darken-4 sidenav-close">Trabaja con nosotros</Link>
                </li>
                <li>
                  <Link to="/servicios" className="blue-text text-darken-4 sidenav-close">Servicios</Link>
                </li>
                <li>
                  <Link to="/contacto2" className="blue-text text-darken-4 sidenav-close">Contacto</Link>
                </li>
              </ul>
        </div>

        <Switch>
          <Route exact path="/" component={Inicio}/>
          <Route path="/nosotros" component={Nosotros} />
          <Route path="/servicios" component={Servicios} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/trabaja" component={Trabaja} />
          <Route path="/contacto2" component={Contacto2} />
        </Switch>
      </div>
      <footer className="white-text" style={{backgroundImage:"url('img/poliblacks.jpg')"}}>
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5>Thorium</h5>
              <p>Consultoría de Talento Humano</p>
              <p>Contactanos a: info@thoriumec.com</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 >Mapa del sitio</h5>
              <ul>
              <li>
                <Link className="white-text" exact to="/" >Inicio</Link>
              </li>
              <li>
                <Link className="white-text" to="/nosotros">Nosotros</Link>
              </li>
              <li>
                <Link className="white-text" to="/trabaja">Trabaja con nosotros</Link>
              </li>
              <li>
                <Link className="white-text" to="/servicios">Servicios</Link>
              </li>
              <li>
              <Link to="/contacto2" className="white-text">Contacto</Link>
              </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
          © 2020 Copyright
          <a className="white-text right" href="#!">Powered by Inventoree</a>
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
