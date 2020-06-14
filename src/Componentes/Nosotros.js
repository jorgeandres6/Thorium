import React from 'react';

export default function Info (){

    return(
        <div> 
            <div className="container">
                <div class="col s12 m8 offset-m2 l6 offset-l3 hoverable center-align">
                    <div class="card-panel grey lighten-5 z-depth-1">
                    <div class="row valign-wrapper">
                        <div class="col s2">
                        <img src={require('../img/LogoSinLetra.png')} alt="Logo" class="circle responsive-img"/>
                        </div>
                        <div class="col s10">
                        <span class="black-text">
                            <h3>Quienes somos?</h3>
                            <p>Thorium es una empresa social especializada en Talento Humano, 
                                encargada de brindar diferentes servicios de consultoría a cualquier tipo de organización que lo solicite.</p>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col s12 m8 offset-m2 l6 offset-l3 hoverable center-align">
                    <div class="card-panel grey lighten-5 z-depth-1">
                    <div class="row valign-wrapper">
                        <div class="col s2">
                        <img src={require('../img/vision.jpg')} alt="Logo" class="circle responsive-img"/>
                        </div>
                        <div class="col s10">
                        <span class="black-text">
                            <h3>Vision</h3>
                            <p>Ser una marca reconocida a nivel nacional e internacional como insignia de buenas prácticas profesionales, además de ser la mejor opción del mercado en consultoría de Talento Humano.</p>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col s12 m8 offset-m2 l6 offset-l3 hoverable center-align">
                    <div class="card-panel grey lighten-5 z-depth-1">
                    <div class="row valign-wrapper">
                        <div class="col s2">
                        <img src={require('../img/mision.jpg')} alt="Logo" class="circle responsive-img"/>
                        </div>
                        <div class="col s10">
                        <span class="black-text">
                            <h3>Mision</h3>
                            <p>Mejorar las condiciones laborales y el rendimiento de las empresas que reciban nuestros servicios y sus empleados. Generar una fuente de ingresos para personas dedicadas al Talento Humano. Finalmente propiciar que todas las personas puedan acceder a nuevas oportunidades laborales, mejorando así su entorno, de sus familias y de la comunidad.</p>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col s12 m8 offset-m2 l6 offset-l3 hoverable center-align">
                    <div class="card-panel grey lighten-5 z-depth-1">
                    <div class="row valign-wrapper">
                        <div class="col s2">
                        <img src={require('../img/valores.jpg')} alt="Logo" class="circle responsive-img"/>
                        </div>
                        <div class="col s10">
                        <span class="black-text">
                            <h3>Valores</h3>
                            <ul>
                                <li>Responsabilidad social</li>
                                <li>Innovación</li>
                                <li>Respeto</li>
                                <li>Proactividad</li>
                                <li>Empatía</li>
                            </ul>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}