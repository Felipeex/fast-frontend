/* source */
import abstractLeft from "../../source/abstract-left.svg";
import abstractRight from "../../source/abstract-right.svg";

export function Home() {
  return (
    <main id="home">
      <div className="hidden absolute w-full items-center justify-between mt-56 px-[10%] -z-10 select-none md:flex">
        <img src={abstractLeft} />
        <img src={abstractRight} />
      </div>

      <section className={`mt-24 flex flex-col items-center`}>
        <h1 className="font-bold text-center text-3xl xl:text-7xl">
          Gerencie seu negocio <br /> online
        </h1>
        <p className="text-center font-normal text-gray-600 text-xs xl:text-xl sm:text-3xl">
          Crie seu cardápio, encomendas e Painel administrativo totalmente
          <br />
          online. Aumente suas vendas e produtividade.
        </p>
        <button className="bg-green-600 px-32 py-4 rounded-[28px] font-semibold text-white md:px-36 mt-16 hover:bg-green-700 transition-colors">
          Começe já
        </button>
      </section>
    </main>
  );
}
