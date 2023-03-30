
const IconoRounded = ({icono, tipo}) => {
  return (
    <a href="/" className={`p-5 rounded-full border border-white duration-200 text-xl ${tipo == 'facebook' ? "hover:bg-[#3b5998]" : tipo == 'twitter' ? "hover:bg-[#00acee]" : tipo == 'instagram' ? "hover:bg-[#C13584]" : "hover:bg-[var(--blue)]"}`} target="_blank">
      {icono}
    </a>
  )
}

export default IconoRounded