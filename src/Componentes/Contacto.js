import React, { useState, useEffect } from 'react';
import M from "materialize-css"

export default function Contacto (){

   const [nombre,setNombre] = useState('');
   const [apellido,setApellido] = useState('');
   const [correo,setCorreo] = useState('');
   const [telefono,setTelefono] = useState('');
   const [direccion,setDireccion] = useState('');
   const [ciudad,setCiudad] = useState('Quito');
   const [pais,setPais] = useState('Ecuador');
   const [fechaNacimiento,setFechaNacimiento] = useState('');
   const [celular,setCelular] = useState('');
   const [password,setPassword] = useState('');
   const [confPass,setConfPass] = useState('');

   useEffect(() => {
        var elem = document.querySelector('.datepicker');
        M.Datepicker.init(elem,{
            autoClose:true,
            yearRange:80,
            onSelect:(fecha) => {
                setFechaNacimiento(fecha);
            }     
        });
   },[])

    return(
        <div className="container">
            <form>
                <div id="datosPersonales" className="row">
                    <h1 className="row">Datos personales</h1>
                    <div className="row">
                        <div className="input-field col s12 m6">
                            <i class="large material-icons prefix">account_circle</i>
                            <input id="it_nombre" type="text" value={nombre} onChange={(event) => {
                                setNombre(event.value)}}/>
                            <label htmlFor="it_nombre">Nombre</label>
                        </div>
                        <div className="input-field col s12 m6">
                            <i class="large material-icons prefix">account_circle</i>
                            <input id="it_apellido" type="text" className="validate" value={apellido} onChange={(event) => setApellido(event.value)}/>
                            <label htmlFor="it_apellido">Apellido</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 m6">
                            <i class="large material-icons prefix">email</i>
                            <input id="it_correo" type="email" className="validate" value={correo} onChange={(event) => setCorreo(event.value)}/>
                            <label htmlFor="it_correo">Correo electrónico</label>
                        </div>
                        <div className="input-field col s12 m6">
                            <i class="large material-icons prefix">lock</i>
                            <input id="it_password" type="password" className="validate" value={password} onChange={(event) => setPassword(event.value)}/>
                            <label htmlFor="it_password">Contraseña</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 m6">
                            <i class="large material-icons prefix">lock</i>
                            <input id="it_confPass" type="password" className="validate" value={confPass} onChange={(event) => setConfPass(event.value)}/>
                            <label htmlFor="it_confPass">Confirma tu constraseña</label>
                        </div>
                        <div className="input-field col s12 m6">
                            <i class="large material-icons prefix">date_range</i>
                            <input id="it_fechaNac" type="text" className="datepicker" />
                            <label htmlFor="it_fechaNac">Fecha de nacimiento</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 m6">
                            <i class="large material-icons prefix">phone</i>
                            <input id="it_telefono" type="number" className="validate" value={telefono} onChange={(event) => setTelefono(event.value)}/>
                            <label htmlFor="it_telefono">Telefono Fijo</label>
                        </div>
                        <div className="input-field col s12 m6">
                            <i class="large material-icons prefix">phone_android</i>
                            <input id="it_celular" type="number" className="validate" value={celular} onChange={(event) => setCelular(event.value)}/>
                            <label htmlFor="it_celular">Celular</label>
                        </div>
                    </div>
                    <div className="input-field row">
                        <i class="large material-icons prefix">location_on</i>
                       <input id="it_direccion" type="text" className="validate" value={direccion} onChange={(event) => setDireccion(event.value)}/>
                        <label htmlFor="it_direccion">Dirección</label>
                    </div>                     
                </div>
            </form>
        </div>        
    )
}