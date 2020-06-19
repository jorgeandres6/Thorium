import React from 'react';
import Logo from '../img/logo.svg';

export default function Contacto2 (){

    return(
        <div>

            <div className="container hide-on-med-and-up" style={{marginTop:"2em"}}>
                     <div className="row center-align">
                        <img src={Logo} style={{width:"70%"}} alt="Logo"/>   
                    </div>
                    <div className="row center-align">
                        <h1 className="row">Contactos</h1>
                        <div className="row" style={{marginTop:"3em"}}>
                            <h5>
                                Correo: info@thoriumec.com
                            </h5>
                        </div>
                        <div className="row">
                            <h5>
                                Teléfono: +593999095974
                            </h5>
                        </div>
                        <a className="row waves-effect waves-light btn light-blue darken-1" href="https://forms.gle/gEyKeQjQbs9wqsXTA" target="_blank" rel="noopener noreferrer"><i class="material-icons left">description</i>Registrate</a>
                    </div>
                   
            </div>

            <div className="container hide-on-small-only" style={{marginTop:"2em"}}>
                <div className="row valign-wrapper">
                    <div className="col m6">
                        <h1 className="row">Contactos</h1>
                        <div className="row" style={{marginTop:"3em"}}>
                            <h5>
                                Correo: info@thoriumec.com
                            </h5>
                        </div>
                        <div className="row">
                            <h5>
                                Teléfono: +593999095974
                            </h5>
                        </div>
                        <a className="row waves-effect waves-light btn light-blue darken-1" href="https://forms.gle/gEyKeQjQbs9wqsXTA" target="_blank" rel="noopener noreferrer"><i class="material-icons left">description</i>Registrate</a>
                    </div>
                    <div className="col m6">
                        <img src={Logo} style={{width:"95%"}} alt="Logo"/>   
                    </div>
                </div>
            </div>

        </div>
    )
}
