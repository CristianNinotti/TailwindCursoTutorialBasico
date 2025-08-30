  

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
      <br></br>

    <div className="mb-10 mt-10 p-10 border-4 border-blue-500 text-justify rounded">
      <p>Padding - Margin - Border - Text Justify -  Border Rounded</p>
    </div>


    <div className="mb-10 mt-10 p-10 border-4 border-blue-500 text-justify rounded-full">
    <p>Border Rounded Full</p>


    </div>
      <div className="m-10 border-4">
      <p className="text-lg">Lg</p>
      <p className="text-xl">Xl</p>
      <p className="text-5xl">5XL</p>
      <p className="text-xl sm:text-xs">Breakpoints - SM:Text-XS</p>
    </div>

      <div className="m-10 border-4">
      <p className="text-lg text-green-300">Colores desde el 100 al 900</p>
      <p className="text-lg text-green-900">Colores desde el 100 al 900</p>

    </div>

    <div className="m-10 border-4">
      <h1 className="text-lg text-center">Text left</h1>
      <h1 className="text-lg text-right">Text right</h1>
      <h1 className="text-lg text-left">Text left</h1>
      <h1 className="text-lg uppercase">Text Transform Uppercase</h1>
      <h1 className="text-lg lowercase">Text Transform Lowercase</h1>
      <h1 className="text-lg capitalize">Text Transform Capitalize</h1>
      <h1 className="text-lg normal-case">Text Transform Normal-Case (None)</h1>
    </div>

        <div className="m-10 border-4">
      <h1 className="text-lg text-center">Text left</h1>
     
    </div>

    <div className="m-10 border-4">
      <h1 className="bg-pink-500 text-black text-center py-2 px-72">Colores</h1>
    </div>

      <div className="m-10 border-4 rounded-full">
      <h1 className="bg-orange-500 rounded-full text-black text-center py-2 px-72">Rounded full</h1>
    </div>

      <div className="border-4 w-60 h-48 text-center">
      <h1>Anchos y altos con W y H</h1>
    </div>

    <div className="shadow-md shadow-white border-4 w-60 h-48 text-center m-12 bg-white">
      <h1 className="shadow-2xl text-black">Box shadows</h1>
    </div>

    <div className="grid grid-cols-3 gap-2 shadow-md  shadow-white border-4  h-36 text-center m-12 bg-white mx-auto ">
      
      <div className="shadow-2xl bg-blue-300 text-black">Grid</div>
      <div className="shadow-2xl bg-red-500 text-black">Grid</div>
      <div className="shadow-2xl bg-orange-300 text-black">Grid</div>
      <div className="shadow-2xl bg-green-300 text-black">Grid</div>
    </div>

    <div className="grid grid-cols-1 2xl:grid-cols-7 gap-2 shadow-md  shadow-white border-4  h-36 text-center m-12 bg-white mx-auto ">
      <h1 className="text-black bg-pink-500 col-span-2">Responsive</h1>
      <div className="shadow-2xl bg-blue-300 text-black">Grid</div>
      <div className="shadow-2xl bg-red-500 text-black">Grid</div>
      <div className="row-span-2 shadow-2xl bg-orange-300 text-black">Ocupo 2 filas</div>
      <div className="col-span-2 shadow-2xl bg-green-300 text-black">Ocupo 2 columnas</div>
      
    </div>


        <div className="grid grid-cols-7 gap-2 shadow-md  shadow-white border-4  h-36 text-center m-12 bg-white mx-auto ">
      <h1 className="text-black bg-pink-500 col-span-2">Col Start / End</h1>
      <div className="shadow-2xl col-start-1 row-start-1 col-end-3 bg-blue-300 text-black">Cambiada a columna 1 y fila 1</div>
      <div className="shadow-2xl bg-red-500 text-black">Grid</div>
      <div className="row-span-2 shadow-2xl bg-orange-300 text-black">Ocupo 2 filas</div>
      <div className="col-span-2 shadow-2xl bg-green-300 text-black">Ocupo 2 columnas</div>
      
    </div>

    <div className="grid grid-rows-4 text-black bg-white border-4">
      <div className="border-4 bg-blue-300">1</div>
      <div className="border-4 bg-red-500">2</div>
      <div className="border-4 bg-orange-300">3</div>
      <div className="border-4 bg-green-300">4</div>
    </div>

    </>
  );
}

export default Button;