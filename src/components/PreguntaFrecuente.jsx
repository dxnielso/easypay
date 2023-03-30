import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const PreguntaFrecuente = ({ pregunta, respuesta }) => {
  // useState's
  const [abierto, setAbierto] = useState(false);

  return (
    <div className="w-full bg-white select-none">
      <div
        className={`h-[60px] px-10 ${
          abierto ? "bg-[var(--blue)]" : "bg-white"
        } cursor-pointer ${
          abierto ? "text-white" : "text-gray-800"
        } flex justify-between items-center shadow-lg rounded-sm duration-200 hover:shadow-none hover:bg-[var(--blue)] hover:text-white`}
        onClick={() => setAbierto(!abierto)}
      >
        <h3 className="text-lg font-medium">{pregunta}</h3>
        <BsChevronDown
          className={`text-2xl duration-200 ${abierto && "rotate-180"}`}
        />
      </div>
      <div
        className={`${
          abierto ? "block max-h-fit" : "hidden"
        } px-10 py-5 shadow-lg overflow-hidden`}
      >
        <p className="text-base font-normal text-gray-800 leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempore
          laboriosam animi esse veritatis, voluptatum quos ad voluptates porro
          soluta amet odio aliquam quasi voluptate expedita impedit. Quod magnam
          modi fugit ea, recusandae autem pariatur ipsum aut quam deserunt sed.
        </p>
      </div>
    </div>
  );
};

export default PreguntaFrecuente;
