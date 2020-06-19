import React from 'react';

export default function Info (){

    return(

        <div className="container">
             <div className="col m7 hide-on-small-only">
                <div className="card horizontal blue-grey darken-4 valign-wrapper hoverable" >
                <div className="card-image ">
                    <img src={require('../img/hiring.jpg')} alt="Empleo"/>
                </div>
                <div className="card-stacked">
                    <div className="card-content grey-text text-lighten-2" style={{textAlign:"justify"}}>
                        <h4>Únete a nuestro equipo!</h4>
                        <p>Si estas interesado en formar parte de nuestro equipo comunicate con nosotros, y con mucho gusto revisaremos tu información. Seguimos creciendo, necesitamos del mejor talento, es tu momento.
                            Adicional, en Thorium sabemos que el Talento y las empresas que los necesitan se encuentra en todas partes, 
                            tú puedes ayudarnos en encontrarlos y generar ganancia económica con nuestro <strong>Programa de Referidos</strong>.  Obtener ganancias es sumamente sencillo, puedes hacerlo refiriéndonos candidatos para nuestras diferentes vacantes laborales disponibles, como también refiriéndonos nuevos cliente o procesos. Para esto, comunicate con nosotros. </p>
                    </div>
                    <div className="card-action">
                    <a className="grey-text text-lighten-2" href="https://forms.gle/gEyKeQjQbs9wqsXTA"><h5>Sumate!</h5></a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col S12 hide-on-med-and-up">
                <div className="card blue-grey darken-4 hoverable">
                <div className="card-image ">
                    <img src={require('../img/hiring.jpg')} alt="Empleo"/>
                </div>
                    <div className="card-content grey-text text-lighten-2">
                        <h4>Únete a nuestro equipo!</h4>
                        <p>Si estas interesado en formar parte de nuestro equipo comunicate con nosotros, y con mucho gusto revisaremos tu información. Seguimos creciendo, necesitamos del mejor talento, es tu momento.
                            Adicional, en Thorium sabemos que el Talento y las empresas que los necesitan se encuentra en todas partes, 
                            tú puedes ayudarnos en encontrarlos y generar ganancia económica con nuestro <strong>Programa de Referidos</strong>.  Obtener ganancias es sumamente sencillo, puedes hacerlo refiriéndonos candidatos para nuestras diferentes vacantes laborales disponibles, como también refiriéndonos nuevos cliente o procesos. Para esto, comunicate con nosotros.</p>
                    </div>
                    <div className="card-action">
                    <a className="grey-text text-lighten-2" href="https://forms.gle/gEyKeQjQbs9wqsXTA"><h5>Sumate!</h5></a>
                    </div>
                </div>
            </div>
        </div>
    )
}