// React JS
import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

// Componentes
import FormInput from "../components/FormInput";

// Firebase
import { auth, firestore } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// SweetAlert2
import Swal from "sweetalert2";

// Image
import logo from "../assets/logo.png";

// CSS
import "../css/register.css";

const Register = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    nombre: "",
    apPaterno: "",
    apMaterno: "",
    fechaNacimiento: "",
    sexo: "Masculino",
    cp: "",
    ciudad: "",
    colonia: "",
    calle: "",
    numExt: "",
    numInt: "",
    privacidad: false,
  });

  // Funcion para cambiar el valor del useState
  const changeValue = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  // Funcion a ejecutar al dar click en boton
  const registerUser = async (e) => {
    e.preventDefault();

    // Validaciones
    if (!validateEmptyInputs()) return;
    if (!validatePassword()) return;
    if (!validarCheck()) return;

    try {
      // Registramos esta cuenta con Correo y contraseña
      const infoUsuario = await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log(infoUsuario.user.uid);

      // Creamos en la bd un registro de este usuario
      const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
      await setDoc(docuRef, {
        email: data.email,
        nombre: data.nombre,
        apPaterno: data.apPaterno,
        apMaterno: data.apMaterno,
        fechaNacimiento: data.fechaNacimiento,
        sexo: data.sexo,
        cp: data.cp,
        ciudad: data.ciudad,
        colonia: data.colonia,
        calle: data.calle,
        numExt: data.numExt,
        numInt: data.numInt,
      });

      // Mensaje de exito
      await Swal.fire({
        position: "center",
        icon: "success",
        title: "Cuenta Registrada",
        text: "La cuenta fue creada correctamente",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
      });
      navigate("/mi-cuenta");

    } catch (error) {
      console.log(error.code);
      mostrarError(error.code)
    }
  };

  // Funcion para validar que las passwords sean iguales
  const validatePassword = () => {
    if (data.password === data.repeatPassword) return true;
    Swal.fire(
      "Contraseña mal escrita",
      "Las contraseñas ingresadas no coinciden",
      "error"
    );
    return false;
  };

  // Validar inputs vacios
  const validateEmptyInputs = () => {
    if (
      data.email != "" &&
      data.password != "" &&
      data.repeatPassword != "" &&
      data.nombre != "" &&
      data.apPaterno != "" &&
      data.apMaterno != "" &&
      data.fechaNacimiento != "" &&
      data.sexo != "" &&
      data.cp != "" &&
      data.ciudad != "" &&
      data.colonia != "" &&
      data.calle != "" &&
      data.numExt != ""
    )
      return true;

    Swal.fire("Campos vacios", "Debes llenar todos los campos", "error");
    return false;
  };

  // Validar check de Aviso de Privacidad
  const validarCheck = () => {
    if (data.privacidad) return true;
    Swal.fire(
      "Aceptar acuerdo",
      "Para continuar debe aceptar el Aviso de Privacidad",
      "error"
    );
    return false;
  };

  const mostrarError = (error) => {
    switch (error) {
      case "auth/email-already-in-use":
        Swal.fire(
          "Correo electrónico registrado",
          "El correo electrónico ingresado ya esta registrado",
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
      default:
        Swal.fire("Error", "Ocurrio un error inesperado", "error");
        break;
    }
  };

  return (
    <div className="bg-white min-h-screen w-[100%] flex justify-end select-none relative">
      {/* izquierdo */}
      <div className="w-7/12 bg-[#0A86D8] flex justify-center items-center fixed left-0 top-0 h-screen">
        {/* Wave */}
        <div className="custom-shape-divider-bottom-1666572273">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <div className="flex flex-col w-[300px] text-white">
          <h2 className="text-2xl">
            Nueva App <span className="font-bold">EasyPay</span>
          </h2>
          <h3 className="text-4xl font-semibold">Más que una pulsera!</h3>
          <p className="mt-2 text-sm">
            Creamos nuestra pulsera para una mayor seguridad en tus viajes
          </p>
        </div>
      </div>

      {/* derecho */}
      <div className="w-5/12 pt-5 pb-10 flex flex-col">
        {/* Nav */}
        <div className="h-[85px] w-[100%] flex justify-between items-center px-8">
          <div className="w-[150px] flex items-center">
            <img src={logo} alt="Logo Easypay" className="" />
          </div>
          <NavLink to="/login" className="font-bold underline">
            Atras
          </NavLink>
        </div>

        {/* Form container */}
        <div className="flex-1 flex justify-center items-center p-5">
          <form className="w-[400px] text-base text-black">
            {/* Email */}
            <FormInput
              titulo="Correo electrónico"
              tipo="email"
              id="email"
              placeholder="Correo electrónico"
              autoComplete="off"
              value={data.email}
              onChange={(e) => changeValue("email", e.target.value)}
            />

            <div className="flex gap-x-5 w-[100%]">
              {/* Password */}
              <FormInput
                titulo="Password"
                tipo="password"
                id="password"
                placeholder="Password"
                value={data.password}
                onChange={(e) => changeValue("password", e.target.value)}
              />

              {/* Password */}
              <FormInput
                titulo="Confirm Password"
                tipo="password"
                id="repeatPassword"
                placeholder="Confirm your password"
                value={data.repeatPassword}
                onChange={(e) => changeValue("repeatPassword", e.target.value)}
              />
            </div>

            {/* Otros datos */}
            <div className="mt-5 w-full">
              {/* Nombre */}
              <FormInput
                titulo="Nombre"
                tipo="text"
                id="nombre"
                placeholder="Nombre"
                value={data.nombre}
                onChange={(e) => changeValue("nombre", e.target.value)}
              />
              <div className="flex gap-x-5 w-[100%]">
                {/* Apellido paterno */}
                <FormInput
                  titulo="Apellido Paterno"
                  tipo="text"
                  id="apPaterno"
                  placeholder="Apellido Paterno"
                  value={data.apPaterno}
                  onChange={(e) => changeValue("apPaterno", e.target.value)}
                />
                {/* Apellido materno */}
                <FormInput
                  titulo="Apellido Materno"
                  tipo="text"
                  id="apMaterno"
                  placeholder="Apellido Materno"
                  value={data.apMaterno}
                  onChange={(e) => changeValue("apMaterno", e.target.value)}
                />
              </div>
              {/* Fecha de nacimiento */}
              <FormInput
                titulo="Fecha de nacimiento"
                tipo="date"
                id="fechaNacimiento"
                value={data.fechaNacimiento}
                onChange={(e) => changeValue("fechaNacimiento", e.target.value)}
              />
              {/* Sexo */}
              <div className="w-full flex flex-col mb-3 text-base">
                <label className="tracking-tight font-medium" htmlFor="sexo">
                  Sexo
                </label>
                <select
                  name="sexo"
                  id="sexo"
                  value={data.sexo}
                  className="border-b py-2 border-gray-200 outline-none w-full"
                  onChange={(e) => changeValue("sexo", e.target.value)}
                >
                  <option value="Masculino" defaultValue>
                    Masculino
                  </option>
                  <option value="Femenino">Femenino</option>
                </select>
              </div>
            </div>

            {/* Otros datos */}
            <div className="mt-8 w-full">
              <div className="flex gap-x-5 w-[100%]">
                {/* cp */}
                <FormInput
                  titulo="CP"
                  tipo="number"
                  id="cp"
                  placeholder="Código postal"
                  value={data.cp}
                  onChange={(e) => changeValue("cp", e.target.value)}
                />
                {/* ciudad */}
                <FormInput
                  titulo="Ciudad"
                  tipo="text"
                  id="ciudad"
                  placeholder="Ciudad"
                  value={data.ciudad}
                  onChange={(e) => changeValue("ciudad", e.target.value)}
                />
              </div>
              <div className="flex gap-x-5 w-[100%]">
                {/* Colonia */}
                <FormInput
                  titulo="Colonia"
                  tipo="text"
                  id="colonia"
                  placeholder="Colonia"
                  value={data.colonia}
                  onChange={(e) => changeValue("colonia", e.target.value)}
                />
                {/* Calle */}
                <FormInput
                  titulo="Calle"
                  tipo="text"
                  id="calle"
                  placeholder="Calle"
                  value={data.calle}
                  onChange={(e) => changeValue("calle", e.target.value)}
                />
              </div>
              <div className="flex gap-x-5 w-[100%]">
                {/* Num Exterior */}
                <FormInput
                  titulo="Número Exterior"
                  tipo="number"
                  id="numExt"
                  placeholder="Número exterior"
                  value={data.numExt}
                  onChange={(e) => changeValue("numExt", e.target.value)}
                />
                {/* Num Interior */}
                <FormInput
                  titulo="Número Interior"
                  tipo="number"
                  id="numInt"
                  placeholder="Número interior"
                  value={data.numInt}
                  onChange={(e) => changeValue("numInt", e.target.value)}
                />
              </div>
            </div>
            {/* Checkbox container */}
            <div className="mt-6 w-full flex flex-row-reverse gap-x-4">
              <label htmlFor="check" className="text-xs">
                He leído, entiendo y consiento al uso de mis datos personales
                conforme al
                <Link to="/" className="font-medium">
                  Aviso de Privacidad
                </Link>
              </label>
              <input
                type="checkbox"
                name="check"
                id="check"
                className="w-8"
                value={data.privacidad}
                onChange={(e) => changeValue("privacidad", !data.privacidad)}
              />
            </div>

            {/* Boton */}
            <button
              onClick={registerUser}
              className="mt-5 rounded-sm border border-blue-500 px-5 py-3 w-1/2 duration-200 bg-blue-200 hover:shadow-xl hover:bg-orange-200 hover:border-orange-500"
            >
              Registrar
            </button>
            <p className="text-xs text-center font-normal mt-10">
              Ya tienes una cuenta?{" "}
              <Link to="/login" className="font-medium">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
