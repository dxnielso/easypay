import Contenedor from "../components/Contenedor";
import Footer from "../components/Footer";
import SmallButton from "../components/SmallButton";
import FormInput from "../components/FormInput";

// Paypal
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// React
import { useState } from "react";

const RecargarDinero = () => {
  // * * * * * * * * ** * * * * useState *  * ** * * * * * * * * * * *
  const [monto, setMonto] = useState(0);
  const [paypal, setPaypal] = useState(false);
  const [tarjeta, setTarjeta] = useState(false);
  const [datosTarjeta, setDatosTarjeta] = useState({});

  // * * * * * * * * ** * * * * FUNCIONES *  * ** * * * * * * * * * * *
  const handleClickPaypal = () => {
    if (!paypal) {
      setPaypal(true);
      setTarjeta(false);
    } else {
      setPaypal(false);
      setTarjeta(false);
    }
  };

  const handleClickTarjeta = () => {
    if (!tarjeta) {
      setTarjeta(true);
      setPaypal(false);
    } else {
      setTarjeta(false);
      setPaypal(false);
    }
  };

  const handleClickPagar = () => {
    console.log("pagaste");
  };

  const handleChangeDatosTarjeta = (campo, valor) => {
    setDatosTarjeta({
      ...datosTarjeta,
      [campo]: valor,
    });
  };

  return (
    <>
      <Contenedor texto="Recargar puntos">
        <div className="w-full flex gap-x-10">
          {/* izq */}
          <div className="w-[60%]">
            {/* seleccionar monto */}
            <div className="w-[70%] flex flex-col mb-16">
              <label
                htmlFor="monto"
                className="tracking-tight font-medium mb-1"
              >
                Monto
              </label>
              <select
                name="monto"
                id="monto"
                className="outline-none border border-[var(--blue)] rounded-md px-3 py-2 mb-5"
                onChange={(e) => setMonto(e.target.value)}
                defaultValue={monto}
              >
                <option className="text-lg" value="0" disabled="disabled">
                  SELECCIONA UN MONTO
                </option>
                <option className="text-lg" value="20">
                  $20
                </option>
                <option className="text-lg" value="30">
                  $30
                </option>
                <option className="text-lg" value="50">
                  $50
                </option>
                <option className="text-lg" value="100">
                  $100
                </option>
                <option className="text-lg" value="150">
                  $150
                </option>
                <option className="text-lg" value="200">
                  $200
                </option>
                <option className="text-lg" value="300">
                  $300
                </option>
                <option className="text-lg" value="500">
                  $500
                </option>
              </select>

              <div className="flex gap-x-3 justify-between items-center">
                <button
                  className="w-[45%] py-2 text-base font-medium text-white bg-[#1e477a] hover:opacity-80 duration-200"
                  onClick={handleClickPaypal}
                >
                  Paypal
                </button>
                <button
                  className="w-[45%] py-2 text-base font-medium text-white bg-black hover:opacity-80 duration-200"
                  onClick={handleClickTarjeta}
                >
                  Tarjeta
                </button>

                {/* <PayPalScriptProvider>
                  <PayPalButtons />
                </PayPalScriptProvider> */}
              </div>
            </div>

            <div
              className={`relative bg-white border shadow-lg grid grid-cols-2 p-8 gap-x-14 gap-y-5 duration-200 overflow-hidden ${
                !tarjeta
                  ? "[clip-path:inset(0_0_100%_0)]"
                  : "[clip-path:inset(0_0_0_0)]"
              }`}
            >
              <FormInput
                titulo="Número de tarjeta"
                tipo="text"
                id="numero"
                placeholder="Número de tarjeta"
                onChange={(e) =>
                  handleChangeDatosTarjeta(e.target.id, e.target.value)
                }
                autoComplete="off"
              />
              <FormInput
                titulo="Nombre y apellido"
                tipo="text"
                id="nombre"
                placeholder="Nombre y apellido"
                onChange={(e) =>
                  handleChangeDatosTarjeta(e.target.id, e.target.value)
                }
                autoComplete="off"
              />
              <FormInput
                titulo="Fecha de expiración"
                tipo="date"
                id="fecha"
                placeholder="Fecha de expiración"
                onChange={(e) =>
                  handleChangeDatosTarjeta(e.target.id, e.target.value)
                }
                autoComplete="off"
              />
              <FormInput
                titulo="Código de seguridad"
                tipo="number"
                id="codigo"
                placeholder="Código de seguridad"
                onChange={(e) =>
                  handleChangeDatosTarjeta(e.target.id, e.target.value)
                }
                autoComplete="off"
              />
            </div>
          </div>

          {/* der */}
          <div className="w-[40%] h-min bg-white p-8 border shadow-lg flex flex-col gap-y-6">
            <h3 className="text-lg font-medium">Total a pagar</h3>
            <div className="w-full h-[1px] bg-gray-300"></div>
            <div className="flex justify-between items-center text-lg font-normal">
              <p>Pagas</p>
              <span>${monto}</span>
            </div>
            <div className="flex justify-between items-center text-lg font-normal">
              <p>Forma de pago</p>
              <span>
                {paypal ? "Paypal" : tarjeta ? "Tarjeta" : "Pendiente"}
              </span>
            </div>
            <SmallButton texto="Pagar" onClick={handleClickPagar} />
          </div>
        </div>
      </Contenedor>
      <Footer />
    </>
  );
};

export default RecargarDinero;
