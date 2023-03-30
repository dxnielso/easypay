// react
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import pulseraRoja from "../assets/pulsera_roja.png";
import pulseraNegra from "../assets/pulsera_negra.png";
// Componentes
import FormInput from "./FormInput";
import SmallButton from "./SmallButton";

const ModalModificarPulsera = ({
  handleClickHideModal,
  datosPulseraModificar,
}) => {
  // * * * * * * * * * * * * * * * * useState * * * * * * * * * * * * * *
  const [nuevaImagen, setNuevaImagen] = useState("");
  const [datosPulsera, setDatosPulsera] = useState(datosPulseraModificar);

  // * * * * * * * * * * * * * * * * FUNCIONES* * * * * * * * * * * * * *
  const handleClickModificar = (e) => {
    e.preventDefault();
    console.log("modificaste la pulsera");
  };

  // cambiar color
  const handleChangeSelectorColor = (e) => {
    switch (e) {
      case "rojo":
        setNuevaImagen(pulseraRoja);
        break;
      case "negro":
        setNuevaImagen(pulseraNegra);
        break;
      default:
        setNuevaImagen(datosPulseraModificar.imagen);
        break;
    }
  };

  // cambiar valor de objeto estado
  const handleChangeDatosPulsera = (campo, valor) => {
    setDatosPulsera({
      ...datosPulsera,
      [campo]: valor,
    });
  };

  return (
    <div className="fixed w-screen h-screen bg-[#00000088] flex justify-center items-center z-50">
      <div className="bg-white w-[800px] h-min p-14 rounded-2xl shadow-lg flex flex-col">
        <div className="flex justify-end items-center">
          <AiOutlineClose
            onClick={handleClickHideModal}
            className="text-2xl cursor-pointer"
          />
        </div>
        <div className="flex-1 flex justify-between items-center gap-x-10 w-full h-full">
          {/* Datos */}
          <div className="w-[50%] h-full">
            <h3 className="text-xl font-semibold mb-8">Modificar pulsera</h3>
            <form
              action=""
              className="flex flex-col items-start justify-center gap-y-4"
            >
              <FormInput
                titulo="RFID"
                tipo="text"
                id="rfid"
                placeholder="Escribe el código RFID de la pulsera"
                autoComplete="off"
                value={datosPulsera.rfid}
                onChange={(e) =>
                  handleChangeDatosPulsera(e.target.id, e.target.value)
                }
              />
              <FormInput
                titulo="Nombre de la pulsera"
                tipo="text"
                id="nombre"
                placeholder="Escribe el nombre de la pulsera"
                onChange={(e) =>
                  handleChangeDatosPulsera(e.target.id, e.target.value)
                }
                autoComplete="off"
                value={datosPulsera.nombre}
              />
              {/* seleccionar color */}
              <div className="w-full flex flex-col mb-3">
                <label
                  htmlFor="color"
                  className="tracking-tight font-medium mb-1"
                >
                  Color
                </label>
                <select
                  name="color"
                  id="color"
                  className="outline-none border border-[var(--blue)] rounded-md px-3 py-1"
                  defaultValue={datosPulsera.color}
                  onChange={(e) => {
                    handleChangeSelectorColor(e.target.value);
                    handleChangeDatosPulsera(e.target.id, e.target.value)
                  }}
                >
                  <option value="" disabled="disabled">
                    SELECCIONA UN COLOR
                  </option>
                  <option value="azul">Azul</option>
                  <option value="rojo">Rojo</option>
                  <option value="verde">Verde</option>
                  <option value="naranja">Naranja</option>
                  <option value="amarillo">Amarillo</option>
                  <option value="rosa">Rosa</option>
                  <option value="morado">Morado</option>
                  <option value="negro">Negro</option>
                </select>
              </div>
              <SmallButton
                texto="Modificar"
                onClick={(e) => handleClickModificar(e)}
              />
            </form>
          </div>
          {/* imagen */}
          <div className="w-[40%]">
            <img
              src={
                nuevaImagen == "" ? datosPulseraModificar.imagen : nuevaImagen
              }
              alt="Imagen de la pulsera"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalModificarPulsera;
