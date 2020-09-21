import React from "react";
import Gasto from "./Gasto";

function Listado({ gastos }) {
  return (
    <div className="gastos-realizados">
      <h2>Lista de tus Gastos</h2>
      {gastos.map((gasto) => (
        <Gasto gasto={gasto} key={gasto.id} />
      ))}
    </div>
  );
}

export default Listado;