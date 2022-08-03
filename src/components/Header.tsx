import Logo from "../source/logo-fast.svg";

export function Header() {
  return (
    <header className="flex items-center justify-around mt-[40px]">
      <div className="flex items-center gap-1">
        <img src={Logo} className="fill-green-600" />
        <span className="text-green-600 font-bold text-[26px]">
          Fast Delivery
        </span>
      </div>

      <nav className="flex gap-[42px] text-gray-600 list-none font-medium cursor-pointer">
        <li className="text-black-700">Home</li>
        <li>Ferramentas</li>
        <li>Planos</li>
        <li>Sobre</li>
        <li>Blog</li>
      </nav>

      <div>
        <a className="mr-5 font-medium cursor-pointer">Fazer Login</a>
        <button className="bg-black-600 py-[14px] px-[24px] text-white rounded-[30px] font-medium">
          Cadastrar
        </button>
      </div>
    </header>
  );
}
