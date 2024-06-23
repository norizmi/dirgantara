/* eslint-disable react/no-unescaped-entities */
import Carousel from "../Fragments/Carousel";
import Header from "../Fragments/Header";
import Product from "../Fragments/Product";

function Home() {
  return (
    <>
      <main className="my-0 mx-auto min-h-full max-w-screen-sm">
        <div className="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden pb-[66px] bg-[#F0F0F0]">
          <Header />
          <Carousel />
          <div>
            <div className="mt-20 ml-9 font-sans mb-8">
              <p className="text-2xl text-black font-semibold underline underline-offset-8">
                KAMI DIRGANTARA
              </p>
              <p className="text-black w-[264px] mt-7 text-sm font-extralight">
                Dirgantara adalah platform pembelajaran digital yang gamifikasi
                untuk digital marketing, untuk membantu pemain meningkatkan
                pengetahuan dan keterampilan mereka. Fitur menarik seperti
                video, kuis, dan game membuat belajar lebih efektif dan
                menyenangkan, dengan materi yang selalu terbaru dan relevan.
              </p>
            </div>
            <div className="bg-[#AE4743] relative pl-9 pt-10 pb-32">
              <div className="flex items-center mb-4">
              <span className="w-1 h-4 bg-white mr-2"></span>
              <p className="text-white text-sm font-extralight">Tentang Kami</p>
              </div>
              <p className="w-[246px] text-white">"Dirgantara: The Digital Marketing Adventure Board Game" - jelajahi pemasaran digital dengan cara paling menyenangkan! Gameplay seru menggabungkan konsep pemasaran dengan edukasi. Belajar komprehensif seraya bersenang-senang. Pelopor pembelajaran digital menghibur demi kesuksesan di era digital.</p>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#F0F0F0] rounded-t-[55%]"></div>
            </div>
           <Product />
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
