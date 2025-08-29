import React from "react";

function Button() {
  return (
    <>

      <div className="container mx-auto">
        <button className="bg-blue-500 fullhd:bg-red-500 text-white px-4 py-2 rounded fullhd:text-9xl fullhd:px-20 fullhd:py-20 p-9">
          Botón de Prueba
        </button>
        <h1>Esto es un h1</h1>
        <h2>Esto es un h2</h2>
        <h3>Esto es un h3</h3>
        <h4>Esto es un h4</h4>
        <h5>Esto es un h5</h5>
        <h6>Esto es un h6</h6>
      </div>
      <br />
      <h1 className="text-base">Esto es un h1</h1>
      <h2 className="text-base">Esto es un h2</h2>
      <h3 className="text-base">Esto es un h3</h3>
      <h4 className="text-base">Esto es un h4</h4>
      <h5 className="text-base">Esto es un h5</h5>
      <h6 className="text-base">Esto es un h6</h6>
    </>
  );
}

export default Button;