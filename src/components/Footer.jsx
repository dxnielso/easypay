// Componentes
import IconoRounded from '../components/IconoRounded';
// React
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// Extra
import logo from '../assets/logo_blanco.png'

const Footer = () => {
  return (
    <footer className="bottom-0 w-full bg-[#161616] flex flex-col gap-y-16 px-32 py-[50px] text-white">
      {/* Div superior */}
      <div className="flex justify-between items-center">
        <div className="w-[200px]">
          <img src={logo} alt="Easypay logo" />
        </div>
        <div className="flex flex-col gap-y-3">
          <Link className="text-base font-medium border-b border-transparent hover:border-white duration-200">Sobre nosotros</Link>
          <Link className="text-base font-medium border-b border-transparent hover:border-white duration-200">Contactanos</Link>
        </div>
      </div>

      {/* Linea */}
      <div className="w-full h-[1px] bg-white"></div>

      {/* Div inferior */}
      <div className="flex justify-center items-center">
        <div className="flex gap-x-8">
          <IconoRounded icono={<FaFacebookF />} tipo="facebook"/>
          <IconoRounded icono={<FaTwitter />} tipo="twitter"/>
          <IconoRounded icono={<FaInstagram />} tipo="instagram"/>
          <IconoRounded icono={<MdEmail />} tipo="email"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
