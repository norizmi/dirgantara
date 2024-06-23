import ularGame from "../assets/ular-game.png";
import monopoli from "../assets/monopoli-game.png"
import kartuGame from "../assets/kartu-game.png"

function Product() {
  return (
    <>
      <div className="mt-8 text-center">
        <div>
          <p className="text-center font-bold text-black text-2xl mb-3">
            Produk Kami
          </p>
          <p className="text-center text-black font-extralight text-xs mx-auto w-[318px]">
            “Permainan Ular Tangga Edukasi, permainan Monopoli Edukasi,
            permainan kartu edukasi”
          </p>
        </div>

        <div>
          <div className="mt-16 font-sans flex justify-center items-center flex-wrap">
            <img src={ularGame} alt="ular-tangga" />
            <p className="text-sm text-black w-[275px] font-extralight">
              “Permainan ular tangga edukasi adalah permainan papan yang
              menggabungkan hiburan dan pembelajaran melalui konsep gamifikasi”
            </p>
            <button className="btn mt-8 bg-neutral-300 text-black border-none hover:bg-slate-800 hover:text-white">
              <a href="/">Selengkapnya</a>
            </button>
          </div>
        </div>
        <div>
          <div className="mt-16 font-sans flex justify-center items-center flex-wrap">
            <img src={monopoli} alt="ular-tangga" />
            <p className="text-sm text-black w-[275px] font-extralight">
            “Monopoli edukasi adalah permainan papan yang menggabungkan konsep monopoli dengan pembelajaran melalui gamifikasi”
            </p>
            <button className="btn mt-8 bg-neutral-300 text-black border-none hover:bg-slate-800 hover:text-white">
              <a href="/">Selengkapnya</a>
            </button>
          </div>
        </div>
        <div>
          <div className="mt-16 font-sans flex justify-center items-center flex-wrap">
            <img src={kartuGame} alt="ular-tangga" />
            <p className="text-sm text-black w-[275px] font-extralight">
            “Permainan kartu edukasi adalah permainan yang menggabungkan unsur hiburan dari kartu dengan pembelajaran melalui gamifikasi”
            </p>
            <button className="btn mt-8 bg-neutral-300 text-black border-none hover:bg-slate-800 hover:text-white">
              <a href="/">Selengkapnya</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
