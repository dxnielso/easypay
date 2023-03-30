const SmallButton = ({texto, onClick}) => {
  return (
    <button
      type="submit"
      className="w-full uppercase text-sm font-medium px-5 py-3 bg-[var(--blue)] text-white hover:opacity-70 duration-200"
      onClick={onClick}
    >
      {texto}
    </button>
  );
};

export default SmallButton;
