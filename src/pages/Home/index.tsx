import { Header } from "../../components/Header";

import abstractLeft from "../../source/abstract-left.svg";
import abstractRight from "../../source/abstract-right.svg";

export function Home() {
  return (
    <main id="home">
      <Header />
      <div className="flex absolute w-full items-center justify-between mt-[230px] px-[10%] z-[-1] select-none">
        <img src={abstractLeft} />
        <img src={abstractRight} />
      </div>

      <section className="mt-[100px] flex flex-col items-center">
        <h1 className="font-bold text-[80px] text-center">
          Gerencie seu negocio <br /> online
        </h1>
        <p className="text-center font-normal text-gray-600 mt-[20px] text-xl">
          Crie seu cardápio, encomendas e Painel administrativo totalmente
          <br />
          online. Aumente suas vendas e produtividade.
        </p>
        <button className="bg-green-600 px-[144px] py-[17px] rounded-[28px] font-semibold text-white mt-[60px]">
          Começe já
        </button>
      </section>
    </main>
  );
}
