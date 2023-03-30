// Componentes
import CardCompania from "../components/CardCompania";
import Contenedor from "../components/Contenedor";
import Footer from "../components/Footer";

const Companias = () => {
  return (
    <>
      <Contenedor texto="Compañias afiliadas">
        <div className="grid grid-cols-4 gap-8">
          {/* Map de compañias afiliadas */}
          <CardCompania
            compania="Flecha amarilla"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti numquam earum."
            imagen="http://www.lasmasinnovadoras.com/sectorprivado/wp-content/uploads/flechaamarilla.png"
            color="bg-yellow-500"
          />
          <CardCompania
            compania="Primera Plus"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti numquam earum."
            imagen="https://info.primeraplus.com.mx/wp-content/uploads/2019/03/primera-plus-logo-color.png"
            color="bg-red-500"
          />
          <CardCompania
            compania="Flecha amarilla"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti numquam earum."
            imagen="https://cdn-icons-png.flaticon.com/512/2681/2681788.png"
            color="bg-green-500"
          />
          <CardCompania
            compania="Flecha amarilla"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti numquam earum."
            imagen="https://cdn-icons-png.flaticon.com/512/2681/2681788.png"
            color="bg-blue-700"
          />
          <CardCompania
            compania="Flecha amarilla"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti numquam earum."
            imagen="https://cdn-icons-png.flaticon.com/512/2681/2681788.png"
            color="bg-yellow-700"
          />
          <CardCompania
            compania="Flecha amarilla"
            desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti numquam earum."
            imagen="https://cdn-icons-png.flaticon.com/512/2681/2681788.png"
            color="bg-red-700"
          />
        </div>
      </Contenedor>
      <Footer />
    </>
  );
};

export default Companias;
