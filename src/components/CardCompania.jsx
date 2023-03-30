const CardCompania = ({ compania, desc, imagen, color }) => {
  return (
    <div className="relative w-full h-[280px] shadow-lg bg-[#FAFAFA] duration-300 hover:shadow-2xl flex flex-col justify-around p-6 border">
      <div className={`h-[2px] ${color} absolute top-0 right-0 left-0`}></div>
      <h3 className="font-semibold text-xl text-left text-gray-800">{compania}</h3>
      <p className="text-sm overflow-y-auto text-left font-light">{desc}</p>
      <div className="h-[30%] flex justify-end"><img src={imagen} alt="imagen" className="w-min h-full object-contain" /></div>
    </div>
  );
};

export default CardCompania;
