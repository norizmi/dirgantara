import ularGame from "../assets/images/ular-game.png";
import monopoli from "../assets/images/monopoli-game.png"
import kartuGame from "../assets/images/kartu-game.png"
import styles from '../assets/css/style.css'

function Product() {

  return (
    <>
      <div className="mt-8 text-center relative">
        <div>
          <p className="font-bold text-black text-2xl mb-3">
            Produk Kami
          </p>
          <p className="text-black font-extralight text-xs mx-auto w-[318px]">
            “Permainan Ular Tangga Edukasi, permainan Monopoli Edukasi,
            permainan kartu edukasi”
          </p>
        </div>

        <div className={`flex flex-col gap-5 mt-5 ${styles.productHome}`}>
        <div>
          <div className="mt-16 font-sans flex justify-center flex-wrap">
            <img src={ularGame} alt="ular-tangga" />
            <p className="text-sm text-black w-[275px] font-extralight">
              “Permainan ular tangga edukasi adalah permainan papan yang
              menggabungkan hiburan dan pembelajaran melalui konsep gamifikasi”
            </p>
            <button className="btn mt-8 bg-neutral-300 text-black border-none hover:bg-slate-800 hover:text-white flex flex-col">
              <a href="/products">Selengkapnya</a>
            </button>
          </div>
        </div>
        <div>
          <div className="mt-16 font-sans flex justify-center flex-wrap">
            <img src={monopoli} alt="ular-tangga" />
            <p className="text-sm text-black w-[275px] font-extralight">
            “Monopoli edukasi adalah permainan papan yang menggabungkan konsep monopoli dengan pembelajaran melalui gamifikasi”
            </p>
            <button className="btn mt-8 bg-neutral-300 text-black border-none hover:bg-slate-800 hover:text-white flex flex-col">
              <a href="/products">Selengkapnya</a>
            </button>
          </div>
        </div>
        <div>
          <div className="mt-16 font-sans flex justify-center flex-wrap">
            <img src={kartuGame} alt="ular-tangga" />
            <p className="text-sm text-black w-[275px] font-extralight">
            “Permainan kartu edukasi adalah permainan yang menggabungkan unsur hiburan dari kartu dengan pembelajaran melalui gamifikasi”
            </p>
            <button className="btn mt-8 bg-neutral-300 text-black border-none hover:bg-slate-800 hover:text-white flex flex-col">
              <a href="/products">Selengkapnya</a>
            </button>
          </div>
        </div>
        </div>

   
        <div className="absolute left-0 right-0 h-20 bg-[#F0F0F0] rounded-b-[55%]"></div>
      </div>
    </>
  );
}

export default Product;
