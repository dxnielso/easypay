// Componentes
import BigInputSearch from "../components/BigInputSearch";
import Contenedor from "../components/Contenedor";
import Footer from "../components/Footer";
import PreguntaFrecuente from "../components/PreguntaFrecuente";

const Ayuda = () => {
  // * * * * * FUNCIONES * * * * * * *
  const handlerChangeText = () => {};

  return (
    <>
    <Contenedor texto="Ayuda">
      {/* Buscador */}
      <BigInputSearch
        placeholder="Buscar pregunta"
        handlerChange={handlerChangeText}
      />

      <h2 className="text-2xl font-semibold mb-8">Preguntas frecuentes</h2>
      <div className="flex flex-col gap-y-8">
        <PreguntaFrecuente pregunta="¿Cómo recargo dinero a mi cuenta?" respuesta=""/>
        <PreguntaFrecuente pregunta="¿Cuántas pulseras puedo vincular a mi cuenta?" respuesta=""/>
        <PreguntaFrecuente pregunta="¿Qué métodos de pago puedo usar para recargar mi cuenta?" respuesta=""/>
        <PreguntaFrecuente pregunta="¿Qué beneficios tiene usar una pulsera Easypay?" respuesta=""/>
        <PreguntaFrecuente pregunta="¿Donde puedo recargar dinero a mi cuenta?" respuesta=""/>
        <PreguntaFrecuente pregunta="¿Cuál es el proceso para pagar en los transportes con la pulsera Easypay?" respuesta=""/>
      </div>
    </Contenedor>
    <Footer />
    </>
  );
};

export default Ayuda;
