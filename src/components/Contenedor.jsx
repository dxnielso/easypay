import Header from "./Header";

const Contenedor = ({ children, texto }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)]">
      <Header />
      {/* Contenido */}
      <div className="w-100% flex-1 px-28 py-16">
        {/* Titulo */}
        <h1 className="text-4xl font-semibold mb-8">{texto}</h1>
        {children}
      </div>
    </div>
  );
};

export default Contenedor;
