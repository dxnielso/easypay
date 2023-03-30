const CardViaje = ({ origen, destino, hora, costo }) => {

  // const [hora, setHora] = useState(hora);

  const formatearHora = () => {
    // if(hora)
  }

  return (
    <div className="w-full h-[90px] rounded-xl bg-white border duration-300 hover:shadow-lg flex justify-between items-center px-10 text-gray-900">
      {/* Izquierda */}
      <div className="flex h-full items-center gap-x-6">
        {/* Image */}
        <div className="w-[60px] h-[60px] bg-gray-300 rounded-lg"></div>
        {/* Hora y destino */}
        <div className="flex flex-col w-[500px]">
          <span className="text-base font-medium">{hora}</span>
          <p className="text-2xl font-semibold">{origen} - {destino}</p>
        </div>
      </div>

      {/* Derecha */}
      <h3 className="text-4xl font-bold">- ${costo}</h3>
    </div>
  );
};

export default CardViaje;
