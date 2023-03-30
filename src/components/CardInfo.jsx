const CardInfo = ({texto, dinero}) => {
  return (
    <dir className="rounded-xl bg-white border border-gray-200 px-12 py-5 flex gap-x-5 justify-between text-gray-900 duration-300 hover:shadow-xl mb-8">
      <div>
        <p className="text-sm font-normal">Pesos Mexicanos</p>
        <h3 className="text-2xl font-semibold">{texto}</h3>
      </div>
      <div className="flex items-center">
        <h4 className="text-3xl font-bold">${dinero}</h4>
      </div>
    </dir>
  );
};

export default CardInfo;
