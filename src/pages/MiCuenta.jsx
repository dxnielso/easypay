// Componentes
import Header from "../components/Header";
import CardInfo from "../components/CardInfo";
import CardOperacion from "../components/CardOperacion";
import Footer from "../components/Footer";

// Iconos
import { TbLetterE } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { FaPlaceOfWorship } from "react-icons/fa";

// Redux
import { useSelector } from "react-redux";

const MiCuenta = () => {
  const { nombre, email } = useSelector((state) => state.userSlice);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)]">
      <Header />
      <div className="flex w-100% flex-1 min-h-[calc(100vh-100px)]">
        {/* izquierda */}
        <main className="w-3/5 px-28 py-16">
          <h2 className="text-4xl font-medium mb-8 text-gray-900">
            Hola <span className="font-semibold">{nombre}</span>
          </h2>

          {/* Saldo disponible */}
          <CardInfo texto="Saldo disponible" dinero="149.00" />

          {/* Gasto semanal */}
          <CardInfo texto="Gasto semanal" dinero="304.50" />
        </main>

        {/* Derecha */}
        <div className="w-2/5 min-h-full bg-white px-14 pr-28 py-16">
          <h2 className="font-semibold text-base mb-5">
            Operaciones disponibles
          </h2>
          <div className="grid grid-cols-3 gap-x-3">
            <CardOperacion
              texto="Pulseras"
              link="/pulsera"
              icono={<TbLetterE />}
            />
            <CardOperacion
              texto="Recargar dinero"
              link="/recargar-dinero"
              icono={<GiReceiveMoney />}
            />
            <CardOperacion
              texto="Compañias afiliadas"
              link="/companias"
              icono={<FaPlaceOfWorship />}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MiCuenta;
