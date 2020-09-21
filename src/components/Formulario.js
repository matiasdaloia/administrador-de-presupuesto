import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";

function Formulario({ agregarNuevoGasto }) {
  const [nombre, setNombre] = useState("");
  const [cantidadgasto, setCantidadGasto] = useState(0);
  const [error, setError] = useState(false);

  // Escuchar onChange del input Nombre del Gasto y actualizar el state 'nombre'
  const setNombreGasto = (e) => {
    setNombre(e.target.value);
  };

  // Escuchar onChange del input Cantidad Gasto y actualizar el state 'nombre'

  const setCantidad = (e) => {
    setCantidadGasto(parseInt(e.target.value));
  };

  // Cuando el usuario agrega un gasto
  const guardarGasto = (e) => {
    e.preventDefault();

    //Validar
    if (cantidadgasto < 1 || isNaN(cantidadgasto) || nombre.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    //Construir el gasto

    const gasto = {
      nombre: nombre,
      cantidad: cantidadgasto,
      id: shortid.generate(),
    };

    //Pasar el gasto al componente principal
    agregarNuevoGasto(gasto);
    //Resetear el form
    setNombre("");
    setCantidadGasto(0);
  };

  return (
    <form onSubmit={guardarGasto}>
      <h2>Agrega tus gastos aquí</h2>
      <p style={{ backgroundColor: "red", color: "white" }}>
        {error ? (
          <Error mensaje="Por favor ingrese un monto y/o gasto valido" />
        ) : null}
      </p>
      <div className="campo">
        <label>Nombre del Gasto</label>
        <input
          className="u-full-width"
          placeholder="Ej. Transporte..."
          type="text"
          onChange={setNombreGasto}
          value={nombre}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          className="u-full-width"
          placeholder="Ej. 300"
          type="number"
          onChange={setCantidad}
          value={cantidadgasto}
        />
      </div>

      <input
        type="submit"
        className="u-full-width button-primary"
        value="agregar gasto"
      />
    </form>
  );
}

export default Formulario;
