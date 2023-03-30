// React
import { Link, useNavigate } from "react-router-dom";
import { BsFillBellFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { useState } from "react";
// Componentes
import Navbar from "../components/Navbar";
import HeaderCardNotificacion from '../components/HeaderCardNotificacion';

// SweetAlert
import Swal from "sweetalert2";
// Firebase
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
// Imagenes
import logo from "../assets/logo.png";
// Redux
import { useDispatch } from "react-redux";
import { setUserLogOutState } from "../redux/slices/userSlice";


const Header = () => {
  // useState
  const [mostrarNotificaciones, setMostrarNotificaciones] = useState(false);
  const [mostrarTodas, setMostrarTodas] = useState(true);
  const [mostrarNoLeidas, setMostrarNoLeidas] = useState(false);
  const [notificaciones, setNotificaciones] = useState([])

  // Funciones
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCerrarSesion = async () => {
    try {
      await signOut(auth);
      dispatch(setUserLogOutState());
      await Swal.fire({
        position: "center",
        icon: "success",
        title: "Sesión cerrada",
        text: "La sesión fue cerrada correctamente",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  // Funcion para cambiar la vista de las notificaciones
  const cambiarVistaNotificaciones = (mostrar) => {
    if(mostrar == 'todas') {
      setMostrarTodas(true)
      setMostrarNoLeidas(false)
    } else if(mostrar == 'noLeidas') {
      setMostrarTodas(false)
      setMostrarNoLeidas(true)
    }
  }

  return (
    <header className="flex justify-between items-center px-24 h-[100px] bg-[var(--blue)] shadow-lg text-[var(--blueWhite)]">
      {/* izquierdo */}
      <div className="h-full flex gap-x-10 items-center">
        <Link to="/mi-cuenta" className="h-[50%]">
          <img src={logo} alt="Logo" className="" />
        </Link>
        <Navbar />
      </div>

      {/* Derecho */}
      <div className="flex gap-x-5 items-center">
        {/* Campana */}
        <div className="relative flex justify-center">
          <button>
            <BsFillBellFill
              className="text-xl"
              onClick={() => setMostrarNotificaciones(!mostrarNotificaciones)}
            />
          </button>
          {mostrarNotificaciones && (
            <div className="absolute top-10 w-[300px] min-h-[200px] rounded-2xl flex justify-center border shadow-lg">

              {/* Triangulo */}
              <div className="absolute top-[-20px] w-[25px] h-[20px] [clip-path:polygon(50%_0%,0%_100%,100%_100%)] bg-white"></div>

              {/* Contenedor general */}
              <div className="absolute top-0 w-[300px] min-h-[200px] bg-white rounded-2xl p-10 flex flex-col gap-y-5">

                {/* Contenedor de botones */}
                <div className="flex items-center gap-x-5">
                  <button
                    className={`px-3 py-1 text-sm font-medium text-white rounded-full duration-200 hover-[text-white] hover:bg-[var(--blue)] ${
                      mostrarTodas ? "bg-[var(--blue)]" : "bg-gray-300"
                    }`}
                    onClick={() => cambiarVistaNotificaciones('todas')}
                  >
                    Todas
                  </button>
                  <button
                    className={`px-3 py-1 text-sm font-medium text-white rounded-full bg-gray-300 duration-200 hover-[text-white] hover:bg-[var(--blue)] ${
                      mostrarNoLeidas ? "bg-[var(--blue)]" : "bg-gray-300"
                    }`}
                    onClick={() => cambiarVistaNotificaciones('noLeidas')}
                  >
                    No leídas
                  </button>
                </div>
                <h3 className="text-base font-semibold text-black">Notificaciones</h3>
                
                {/* Notifiaciones */}
                <div className="w-full">
                  {
                    notificaciones.map((notificacion) => (
                      <HeaderCardNotificacion />
                    ))
                  }
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Configuracion */}
        <Link to="/configuracion">
          <AiFillSetting className="text-xl" />
        </Link>
        {/* Salir */}
        <button
          onClick={handleCerrarSesion}
          className="font-semibold uppercase text-sm"
        >
          Cerrar sesión
        </button>
      </div>
    </header>
  );
};

export default Header;
