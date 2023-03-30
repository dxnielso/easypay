// Componentes
import CardPulsera from "../components/CardPulsera";
import Contenedor from "../components/Contenedor";
import Footer from "../components/Footer";
import FormInput from "../components/FormInput";
import SmallButton from "../components/SmallButton";
import ModalModificarPulsera from "../components/ModalModificarPulsera";

// imagenes
import pulseraRoja from "../assets/pulsera_roja.png";
import pulseraNegra from "../assets/pulsera_negra.png";

// React
import { useState } from "react";

// Firebase
import { auth, firestore } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

const Pulsera = () => {
  // * * * * * * * * * * * * Constantes * * * * * * * * * *  * *
  const pulseras = [
    {
      id: 1,
      rfid: 1564657567,
      nombre: "Pulsera nueva",
      imagen: pulseraRoja,
      color: "rojo",
    },
    {
      id: 2,
      rfid: 28768786784,
      nombre: "Pulsera negra",
      imagen: pulseraNegra,
      color: "negro",
    },
    {
      id: 3,
      rfid: 398768654,
      nombre: "Pulsera de Daniel",
      imagen: pulseraRoja,
      color: "rojo",
    },
    {
      id: 4,
      rfid: 4522344234,
      nombre: "Primera pulsera",
      imagen: pulseraNegra,
      color: "negro",
    },
  ];

  // * * * * * * * * * * * * useState * * * * * * * * * *  * *
  const [mostrarModal, setMostrarModal] = useState(false);
  const [datosPulseraModificar, setDatosPulseraModificar] = useState({});
  const [datosNuevaPulsera, setDatosNuevaPulsera] = useState({
    rfid: "",
    nombre: "",
    imagen: "",
    color: "",
  });

  // * * * * * * * * * * * * FUNCIONES * * * * * * * * * *  * *
  // Cuando se agrega una pulsera en la parte derecha
  const handleClickAgregarPulsera = async (e) => {
    e.preventDefault();

    // Creamos en la bd un registro de la pulsera
    const docuRef = doc(firestore, 'pulseras');
    await setDoc(docuRef, datosNuevaPulsera);
  };

  // Funcion cuando se da clic en modificar una pulsera
  const handleClickModificar = (id, rfid, nombre, imagen, color) => {
    setMostrarModal(true);

    // Cambiamos los datos actuales que tiene la aplicacion de la pulsera
    setDatosPulseraModificar({
      id: id,
      rfid: rfid,
      nombre: nombre,
      imagen: imagen,
      color: color,
    });
  };

  // Eliminar una pulsera
  const handleClickEliminar = (id) => {
    console.log(`Eliminaste la pulsera con id ${id}`);
  };

  // cambiar valor de objeto estado
  const handleChangeDatosPulsera = (campo, valor) => {
    setDatosNuevaPulsera({
      ...datosNuevaPulsera,
      [campo]: valor,
    });
  };

  return (
    <>
      {mostrarModal && (
        <ModalModificarPulsera
          handleClickHideModal={() => setMostrarModal(false)}
          datosPulseraModificar={datosPulseraModificar}
        />
      )}
      <Contenedor texto="Mis pulseras">
        <div className="w-full flex gap-x-10">
          {/* pulseras */}
          <div className="w-[70%] grid grid-cols-3 gap-5">
            {pulseras.map((pulsera) => (
              <CardPulsera
                key={pulsera.id}
                nombre={pulsera.nombre}
                imagen={pulsera.imagen}
                handleClickModificar={() =>
                  handleClickModificar(
                    pulsera.id,
                    pulsera.rfid,
                    pulsera.nombre,
                    pulsera.imagen,
                    pulsera.color
                  )
                }
                handleClickEliminar={() => handleClickEliminar(pulsera.id)}
              />
            ))}
          </div>

          {/* Agregar pulsera */}
          <div className="w-[30%] h-min bg-white p-8 border shadow-lg">
            <h3 className="text-lg font-semibold mb-5">Agregar pulsera</h3>
            <form action="" className="flex flex-col gap-y-2">
              {/* RFID */}
              <FormInput
                titulo="RFID"
                tipo="text"
                id="rfid"
                placeholder="RFID de la pulsera"
                value={datosNuevaPulsera.rfid}
                onChange={e => handleChangeDatosPulsera(e.target.id, e.target.value)}
                autoComplete="off"
              />
              {/* nombre de la pulsera */}
              <FormInput
                titulo="Nombre de la pulsera"
                tipo="text"
                id="nombre"
                placeholder="Asigna nombre a la pulsera"
                value={datosNuevaPulsera.nombre}
                onChange={e => handleChangeDatosPulsera(e.target.id, e.target.value)}
                autoComplete="off"
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
                  onChange={e => handleChangeDatosPulsera(e.target.id, e.target.value)}
                  className="outline-none border border-[var(--blue)] rounded-md px-3 py-1"
                  defaultValue={datosNuevaPulsera.color}
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
                texto="Agregar"
                onClick={(e) => handleClickAgregarPulsera(e)}
              />
            </form>
          </div>
        </div>
      </Contenedor>
      <Footer />
    </>
  );
};

export default Pulsera;
