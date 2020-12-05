import React, { useState } from "react";
import Pregunta from "../services/Pregunta";
import ScoreFinal from "../componentes/ScoreFinal";
import Explicacion from "../componentes/Explicacion";

export default function Razones() {
  const [score, setScore] = useState(0);
  return (
	  /* TITULO TEMA
			TITULO EJERCICIO 
			INSTRUCCIONES
			PLANTEAMIENTO
			PREGUNTA
			FRASE
			DISPLAY DE RESPUESTAS
			PISTA
			BOTON DE RESPUESTA
			EXPLICACION
			MATERIAL EXTRA
			RECURSOS INTERACTIVOS
	  */
    <div className="container">
      <div className="row py-3 py-mb-5 jumbotron">
        <main className="col-12 col-md-12">
          <h1 className="">Rapidez de crecimiento del área de un círculo</h1>			
          <p className="instrucciones">
			 	A continuación se te presenta un ejemplo del tema “Razones de cambio relacionadas”. <br/> Síguelo con detenimiento:
			 </p>
        </main>
      </div>
      <div className="row py-5 bg-white">
        <div className="mb-5 col-12 col-md-5 d-flex align-items-center justify-content-center">
          <div className="wrap-anim1"></div>
        </div>
        <div className="col-12 col-md-7">
          <p className="lead">
            Al arrojar una piedra a un estanque de agua tranquila se forman
            ondas circulares concéntricas cuyos radios aumentan de longitud al
            paso del tiempo.
          </p>
			 <p className="lead">
            <b>Cuando la onda exterior tiene un radio de 3m...</b>
          </p>
				<div className="emoji"></div>
        </div>
      </div>
		
      <Pregunta
        setScore={setScore}
        pregunta="¿En cuanto aumenta la rapidez o su velocidad?"
        valida={4}
        a="20"
        b="33"
		  c="4"
		  d="9.42 m/s^2"
		/>
      
		<ScoreFinal score={score} />
		<Explicacion/>

    </div>
  );
}
