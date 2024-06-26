/* eslint-disable react/no-unescaped-entities */
import Accordion from "../Fragments/Accordion";
import Carousel from "../Fragments/Carousel";
import Footer from "../Fragments/Footer";
import Header from "../Fragments/Header";
import Product from "../Fragments/Product";
import MobileView from "../Layout/MobileView";
import arrow from "../assets/icon/arrow.svg";

function Home() {
  return (
    <>
      <MobileView>
        <Header />
        <Carousel />
        <div className="font-sans">
          <div className="mt-20 ml-9 mb-8">
            <p className="text-2xl text-black font-semibold underline underline-offset-8">
              KAMI DIRGANTARA
            </p>
            <p className="text-black w-[264px] mt-7 text-sm font-extralight">
              Dirgantara adalah platform pembelajaran digital yang gamifikasi
              untuk digital marketing, untuk membantu pemain meningkatkan
              pengetahuan dan keterampilan mereka. Fitur menarik seperti video,
              kuis, dan game membuat belajar lebih efektif dan menyenangkan,
              dengan materi yang selalu terbaru dan relevan.
            </p>
          </div>
          <div className="bg-[#AE4743] relative pl-9 pt-10 pb-32">
            <div className="flex items-center mb-4">
              <span className="w-1 h-3 bg-white mr-2"></span>
              <p className="text-white text-sm font-extralight">Tentang Kami</p>
            </div>
            <p className="w-[246px] text-white">
              "Dirgantara: The Digital Marketing Adventure Board Game" -
              jelajahi pemasaran digital dengan cara paling menyenangkan!
              Gameplay seru menggabungkan konsep pemasaran dengan edukasi.
              Belajar komprehensif seraya bersenang-senang. Pelopor pembelajaran
              digital menghibur demi kesuksesan di era digital.
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#F0F0F0] rounded-t-[55%]"></div>
          </div>
          <Product />
          <div className="bg-[#AE4743] text-white pt-36 pb-14">
            <div className="text-sm text-center font-semibold">
              <p>Butuh Pertanyaan Cepat?</p>
              <div className="flex justify-center gap-2 mt-3">
                <p>Lihat ke bawah</p>
                <img src={arrow} alt="arrow-down" className="inline" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center mt-5 mb-7">
              <p className="text-black font-semibold text-2xl">
                FAQ's
              </p>
            </div>
            <div className="flex justify-center items-center">
               <Accordion />
            </div>
          </div>
        </div>
        <Footer />
      </MobileView>
    </>
  );
}

export default Home;
