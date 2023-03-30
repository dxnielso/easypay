const FormInput = ({ titulo, tipo, id, placeholder="", onChange, autoComplete="true", value="" }) => {
  return (
    <div className="w-full flex flex-col mb-3 text-base">
      <label className="tracking-tight font-medium" htmlFor={id}>{titulo}</label>
      <input
        type={tipo}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete={autoComplete}
        className="border-b py-2 border-gray-200 outline-none w-full"
        value={value}
      />
    </div>
  );
};

export default FormInput;
