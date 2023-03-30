// React router
import { Link, useNavigate } from "react-router-dom";

const CardOperacion = ({ texto, link, icono }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-20 flex flex-col items-center duration-300 hover:translate-y-1"
      onClick={() => navigate(link)}
    >
      <Link to={link} className="p-5 rounded-full bg-[var(--blue)] text-white mb-2">{icono}</Link>
      <Link><h4 className="text-center text-sm">{texto}</h4></Link>
    </div>
  );
};

export default CardOperacion;
