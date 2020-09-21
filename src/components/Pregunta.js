import React, { Fragment, useState } from "react";
import Error from "./Error";

function Pregunta({ setPresupuesto, setRestante, setMostrarPregunta }) {
  // definir el state :
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  // Funcion que lee el presupuesto : parseInt pasa a number el input
  const definirPresupuesto = (evento) => {
    setCantidad(parseInt(evento.target.value));
  };

  // Funcion para submitir el presupuesto:
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    //Validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    //Si se pasa la validación
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
    setMostrarPregunta(false);
  };

  return (
    <Fragment>
      <h2>Coloca Aqui tu Presupuesto</h2>
      {error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          name="presupuesto"
          id="presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
}

export default Pregunta;
