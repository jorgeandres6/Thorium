import React, { useEffect } from 'react';
import "../estilos/inicio.css";
import M from "materialize-css"

export default function Inicio (){

    useEffect(() => {
        var elem = document.querySelector('.carousel');
        M.Carousel.init(elem,{
            indicators:true
        });
        setInterval(()=>{
            M.Carousel.getInstance(elem).next();
        },3000);
        
    },[])

    return(
        <div className="carousel carousel-slider container">
             <a className="carousel-item" href="#one!"><img src="https://picsum.photos/id/1/800/400" alt="1"/></a>
             <a className="carousel-item" href="#two!"><img src="https://picsum.photos/id/2/800/400" alt="1"/></a>
             <a className="carousel-item" href="#three!"><img src="https://picsum.photos/id/3/800/400" alt="1"/></a>
             <a className="carousel-item" href="#four!"><img src="https://picsum.photos/id/4/800/400" alt="1"/></a>
         </div>
    );
}