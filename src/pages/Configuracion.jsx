import Contenedor from "../components/Contenedor";
import Footer from "../components/Footer";
import FormInput from "../components/FormInput";
import SmallButton from "../components/SmallButton";

const Configuracion = () => {
  // * * * * * * * * * * * FUNCIONES * * * * * * * * * * * * *
  const handleClickChangeNameImage = (e) => {
    e.preventDefault();
    console.log("cambiaste imagen y nombre");
  };

  const handleClickChangePassword = (e) => {
    e.preventDefault();
    console.log("cambiaste contraseña");
  };

  const handleClickChangeAddress = (e) => {
    e.preventDefault();
    console.log("cambiaste domicilio");
  };

  return (
    <>
    <Contenedor texto="Configuración">
      <div className="w-full h-full flex gap-x-10">
        {/* izq */}
        <div className="w-[50%] flex flex-col gap-y-10">
          {/* Cambiar foto y nombre */}
          <div className="w-full h-min bg-white flex gap-x-8 px-10 py-10 border">
            {/* derecha */}
            <div className="min-w-[150px] flex flex-col justify-center items-center gap-y-2">
              {/* img */}
              <div className="w-[150px] h-[150px]">
                <img
                  src="https://static3.abc.es/media/summum/2021/10/01/maxi_iglesias-kXKH--620x349@abc.jpeg"
                  alt="Foto de perfil"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {/* texto */}
              <span className="underline text-sm font-normal cursor-pointer">
                Cambiar foto
              </span>
            </div>
            {/* izq */}
            <div className="flex-1 flex flex-col justify-center items-start gap-y-5">
              <h3 className="text-xl font-bold">Diego Antonio Cervantes</h3>
              <form action="" className="flex flex-col w-full gap-y-5">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Cambiar nombre"
                  className="outline-none border-b border-gray-400 px-3 py-1 text-lg font-light"
                />
                <SmallButton
                  texto="Actualizar"
                  onClick={(e) => handleClickChangeNameImage(e)}
                />
              </form>
            </div>
          </div>

          {/* Actualizar domicilio */}
          <div className="w-full h-min bg-white flex gap-x-8 px-10 py-10 border flex-col">
            <h3 className="text-xl font-bold mb-6">Actualizar contraseña</h3>
            <form action="" className="">
              <div className="w-full grid grid-cols-2 grid-rows-3 gap-x-4 gapy-3 mb-6">
                {/* cp */}
                <FormInput
                  titulo="Código Postal"
                  tipo="text"
                  id="cp"
                  placeholder="Código postal"
                  onChange={() => console.log("escribiste")}
                  autoComplete="false"
                />
                {/* ciudad */}
                <FormInput
                  titulo="Ciudad"
                  tipo="text"
                  id="ciudad"
                  placeholder="Ciudad"
                  onChange={() => console.log("escribiste")}
                  autoComplete="false"
                />
                {/* colonia */}
                <FormInput
                  titulo="Colonia"
                  tipo="text"
                  id="colonia"
                  placeholder="Colonia"
                  onChange={() => console.log("escribiste")}
                  autoComplete="false"
                />
                {/* calle */}
                <FormInput
                  titulo="Calle"
                  tipo="text"
                  id="calle"
                  placeholder="Calle"
                  onChange={() => console.log("escribiste")}
                  autoComplete="false"
                />
                {/* num int */}
                <FormInput
                  titulo="Número interior"
                  tipo="text"
                  id="numInt"
                  placeholder="Número interior"
                  onChange={() => console.log("escribiste")}
                  autoComplete="false"
                />
                {/* Num ext */}
                <FormInput
                  titulo="Número exterior"
                  tipo="text"
                  id="numExt"
                  placeholder="Número exterior"
                  onChange={() => console.log("escribiste")}
                  autoComplete="false"
                />
              </div>
              <SmallButton
                texto="Actualizar"
                onClick={(e) => handleClickChangeAddress(e)}
              />
            </form>
          </div>
        </div>

        {/* der */}
        <div className="w-[50%] flex flex-col gap-y-10">
          {/* Actualizar contraseña */}
          <div className="w-full h-min bg-white px-16 py-10 border">
            <h3 className="text-xl font-bold mb-6">Actualizar contraseña</h3>
            <form action="" className="flex flex-col w-full gap-y-6">
              <FormInput
                titulo="Contraseña actual"
                tipo="password"
                id="password"
                placeholder="Contraseña actual"
                onChange={() => console.log("escribiste")}
                autoComplete="false"
              />
              <FormInput
                titulo="Nueva contraseña"
                tipo="password"
                id="newPassword"
                placeholder="Nueva contraseña"
                onChange={() => console.log("escribiste")}
                autoComplete="false"
              />
              <SmallButton
                texto="Actualizar"
                onClick={(e) => handleClickChangePassword(e)}
              />
            </form>
          </div>

          {/* Extra */}
          <div className="w-full h-min bg-white px-16 py-10 border">
            <button className="text-base font-semibold underline text-red-600">
              Cerrar su cuenta
            </button>
          </div>
        </div>
      </div>
    </Contenedor>
    <Footer />
    </>
  );
};

export default Configuracion;
