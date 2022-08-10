/* source */
import abstractLeft from "../../source/abstract-left.svg";
import abstractRight from "../../source/abstract-right.svg";

export function Home() {
  return (
    <main id="home">
      <div className="hidden absolute w-full items-center justify-between mt-[230px] px-[10%] z-[-1] select-none md:flex">
        <img src={abstractLeft} />
        <img src={abstractRight} />
      </div>

      <section className={`mt-[100px] flex flex-col items-center`}>
        <h1 className="font-bold text-center text-[30px] xl:text-[70px]">
          Gerencie seu negocio <br /> online
        </h1>
        <p className="text-center font-normal text-gray-600 text-[10px] xl:text-[20px] sm:text-[30px]">
          Crie seu cardápio, encomendas e Painel administrativo totalmente
          <br />
          online. Aumente suas vendas e produtividade.
        </p>
        <button className="bg-green-600 px-[130px] py-[17px] rounded-[28px] font-semibold text-white md:px-[144px] mt-[60px] hover:bg-green-700 transition-colors">
          Começe já
        </button>
      </section>
    </main>
  );
}
