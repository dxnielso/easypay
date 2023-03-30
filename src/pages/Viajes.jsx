// Componentes
import CardViaje from "../components/CardViaje";
import BigInputSearch from "../components/BigInputSearch";
import Contenedor from "../components/Contenedor";
import Footer from "../components/Footer";

const Viajes = () => {
  // * * * * * FUNCIONES * * * * * * *
  const handlerChangeText = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <Contenedor texto="Viajes">
        {/* Buscador */}
        <BigInputSearch
          placeholder="Buscar por origen - destino"
          handlerChange={handlerChangeText}
        />

        {/* Filtrar por */}
        <select
          name="filtro"
          id="filtro"
          className="outline-none px-5 py-2 mb-5"
        >
          <option value="1" selected>
            Recientes - Antiguos
          </option>
          <option value="2">Antiguos - Recientes</option>
          <option value="3">Mayor costo - Menor costo</option>
          <option value="4">Menor costo - Mayor costo</option>
        </select>

        {/* Map de cada viaje */}
        <div className="flex flex-col gap-y-5">
          <CardViaje
            origen="Abasolo"
            destino="Irapuato"
            hora="10:04"
            costo="304.50"
          />
          <CardViaje
            origen="Abasolo"
            destino="Penjamo"
            hora="06:35"
            costo="15.00"
          />
          <CardViaje
            origen="Abasolo"
            destino="Penjamo"
            hora="06:35"
            costo="15.00"
          />
          <CardViaje
            origen="Abasolo"
            destino="Penjamo"
            hora="06:35"
            costo="15.00"
          />
          <CardViaje
            origen="Abasolo"
            destino="Penjamo"
            hora="06:35"
            costo="15.00"
          />
          <CardViaje
            origen="Abasolo"
            destino="Penjamo"
            hora="06:35"
            costo="15.00"
          />
        </div>
      </Contenedor>
      <Footer />
    </>
  );
};

export default Viajes;
