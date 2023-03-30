// React JS
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// CSS
import "../css/login.css";

// Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.js";
// import { doc, getDoc } from "firebase/firestore";

// SeetAlert2
import Swal from "sweetalert2";

// React Icons
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

// Logo
import logo from "../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // Funcion para cambiar el valor del useState
  const changeValue = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  // Validar inputs vacios
  const validateEmptyInputs = () => {
    if (data.email != "" && data.password != "") return true;

    Swal.fire("Campos vacios", "Debes llenar todos los campos", "error");
    return false;
  };

  const mostrarError = (error) => {
    switch (error) {
      case "auth/user-not-found":
        Swal.fire(
          "Correo electrónico inválido",
          "El correo electrónico no esta registrado",
          "error"
        );
        break;
      case "auth/wrong-password":
        Swal.fire(
          "Contraseña incorrecta",
          "La contraseña ingresada no es correcta",
          "error"
        );
        break;
      case "auth/invalid-email":
        Swal.fire(
          "Correo no válido",
          "El correo electrónico no es válido",
          "error"
        );
        break;
      case "auth/network-request-failed":
        Swal.fire(
          "Sin internet",
          "Revisa tu conexión a internet e intentalo de nuevo",
          "error"
        );
        break;
      default:
        Swal.fire("Error", "Ocurrio un error inesperado", "error");
        break;
    }
  };

  const loginUser = async (e) => {
    e.preventDefault();

    // Validaciones
    if (!validateEmptyInputs()) return;

    try {
      const infoUsuario = await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log(infoUsuario.user.uid)

      await Swal.fire({
        position: "center",
        icon: "success",
        title: "Sesión iniciada",
        text: "Has iniciado sesión correctamente",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
      navigate("/mi-cuenta");
    } catch (error) {
      console.log(error.code);
      mostrarError(error.code);
    }
  };

  return (
    <div className="bg-[var(--blue)] min-h-screen w-[100%] select-none flex justify-center items-center">
      <div className="w-[380px]  bg-white relative overflow-hidden flex justify-center items-end py-[60px]">
        {/* <div className='bg-[var(--orange)] absolute w-full h-[400px] top-[-50%] left-0 rounded-b-full'></div> */}
        {/* Wave */}
        <div className="custom-shape-divider-top-1666660320">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <div className="flex flex-col items-center gap-y-3 w-[70%]">
          <div className="w-[80%] mb-5">
            <img src={logo} alt="Logo" />
          </div>
          {/* Email */}
          <div className="w-full relative flex items-center">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Correo electrónico"
              autoComplete="off"
              className="px-2 py-2 pl-9 flex-1 border border-gray-400 text-base outline-none text-gray-800"
              onChange={(e) => changeValue("email", e.target.value)}
            />
            <AiOutlineMail className="absolute left-3 text-gray-600 text-lg" />
          </div>

          {/* Password */}
          <div className="w-full relative flex items-center">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Contraseña"
              className="px-2 py-2 pl-9 flex-1 border border-gray-400 text-base outline-none text-gray-800"
              onChange={(e) => changeValue("password", e.target.value)}
            />
            <AiOutlineLock className="absolute left-3 text-gray-600 text-lg" />
          </div>

          <button
            className="w-full uppercase mt-8 bg-[var(--orange)] py-3 duration-200 hover:opacity-80"
            onClick={loginUser}
          >
            login
          </button>
          <p className="text-xs text-center font-normal">
            ¿No tienes una cuenta?{" "}
            <Link to="/register" className="font-medium">
              Registrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
