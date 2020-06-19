import React from 'react';

export default function Info (){
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="card hoverable blue-grey darken-4 grey-text text-lighten-2" style={{marginTop:"2em"}}>
                        <div className="card-content center-align">
                            <p className="card-title activator grey-text text-lighten-2"><h1>Empresa</h1></p>
                            <p>Click en la imagen para mas información</p>
                        </div>
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={require('../img/empresa.jpg')} alt="Empresas"/>
                        </div>
                        
                        <div className="card-reveal center-align indigo darken-1 white-text">
                            <span className="card-title"><h3>Empresa</h3><i className="material-icons right">close</i></span>
                            <div>
                                <h4>Selección de personal</h4>
                                <p>En Thorium buscamos el crecimiento de tu empresa fortaleciendo tu equipo de trabajo con el mejor talento disponible, ajustándose a las necesidades y solicitudes de nuestros clientes y del mercado. Para ello contamos con una red de profesionales y herramientas tecnológicas para optimizar cada proceso.</p>
                                <h4>Beneficios</h4>
                                <ul>
                                    <li>Mejores costos del mercado</li>
                                    <li>Procesos en menor tiempo</li>
                                    <li>Candidatos evaluados (personal y profesionalmente)</li>
                                    <li>Procesos personalizados y garantizados</li>
                                    <li>Asesoria profesional permanente</li>
                                    <li>Generar Employer Branding</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card hoverable blue-grey darken-4 grey-text text-lighten-2" style={{marginTop:"2em"}}>
                        <div className="card-content center-align">
                            <p className="card-title activator grey-text text-lighten-2"><h1>Persona</h1></p>
                            <p>Click en la imagen para mas información</p>
                        </div>
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={require('../img/persona.jpg')} alt="Empresas"/>
                        </div>
                        
                        <div className="card-reveal center-align teal darken-2 white-text">
                            <span className="card-title"><h3>Persona</h3><i className="material-icons right">close</i></span>
                            <div>
                                <h4>Empleabilidad</h4>
                                <p>En Thorium ofrecemos el servicio personalizado de asesoría laboral, dirigido a todas las personas que se encuentren en búsqueda activa de una nueva o mejor oferta laboral. Brindamos consejería sobre elaboración de un perfil profesional, para conseguir y conservar un empleo. Te ayudamos a elaborar tu hoja de vida adecuadamente, te preparamos para una entrevista y principalmente te conectamos con las ofertas laborales que se ajusten a su perfil profesional y su experiencia. </p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}