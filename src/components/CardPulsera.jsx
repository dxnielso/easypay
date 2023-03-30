const CardPulsera = ({
  nombre,
  imagen,
  handleClickModificar,
  handleClickEliminar,
}) => {
  // * * * * * * * * * * * * * * FUNCIONES * * * * * * * * * * * * * *

  return (
    <div className="w-full bg-white duration-200 hover:shadow-lg p-5 flex flex-col gap-y-5 border">
      <div className="w-full h-[150px] bg-gray-200">
        <img src={imagen} alt="" className="w-full h-full object-contain" />
      </div>
      <h3 className="text-base font-normal">{nombre}</h3>
      <div className="flex gap-x-3 justify-between items-center">
        <button
          className="w-[50%] py-1 text-base font-medium text-white bg-blue-500 hover:opacity-80"
          onClick={handleClickModificar}
        >
          Modificar
        </button>
        <button
          className="w-[50%] py-1 text-base font-medium text-white bg-red-500 hover:opacity-80"
          onClick={handleClickEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CardPulsera;
