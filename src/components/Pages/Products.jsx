import { useState, useRef, useEffect } from "react";
import Footer from "../Fragments/Footer";
import Header from "../Fragments/Header";
import MobileView from "../Layout/MobileView";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ularGame from "../assets/images/ular-game.png";
import monopoli from "../assets/images/monopoli-game.png";
import kartuGame from "../assets/images/kartu-game.png";

function DirgantaraProducts() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const mainRef = useRef(null);
  const thumbnailRef = useRef(null);

  useEffect(() => {
    if (
      mainRef.current &&
      thumbnailRef.current &&
      thumbnailRef.current.splide
    ) {
      mainRef.current.sync(thumbnailRef.current.splide);
    }
  }, []);

  const descriptions = [
    "Ular Tangga dengan tipe bermain yang lebih,  Power Card dan Question Card menjadi senjatamu untuk bisa memenangkan permainan ini.",
     "Monopoli dengan sistem yang lebih complex, kami akan memberi informasi lebih lanjut terkait permainan ini, stay tuned.",
     "Card Game dengan sistem yang ditujukan untuk mempelajari serta memahami setiap role di digital marketin, stay tuned."
  ]

  const mainOptions = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    pagination: false,
    arrows: true,
    gap: "1rem",
    rewind: true,
    width: 600,
    height: 300,
    cover: true,
  };

  const thumbnailOptions = {
    fixedWidth: 70,
    fixedHeight: 70,
    gap: 10,
    drag: false,
    rewind: true,
    pagination: false,
    arrows: false,
    cover: true,
    isNavigation: true,
    focus: 'center',
    dragMinThreshold: {
      mouse: 4,
      touch: 10,
    },
  };

  const images = [ularGame, monopoli, kartuGame];
  const titles = ["Ular Game", "Monopoli", "Kartu Game"];

  return (
    <MobileView>
      <Header />
      <div className="font-sans w-60 mt-14 pl-8">
        <h2 className="text-xl font-semibold">Produk kami</h2>
        <p className="text-sm font-light mt-4">
          Temukan penjelasan mendalam tentang setiap permainan, cara bermain,
          dan manfaat edukatif yang ditawarkan
        </p>
      </div>
      <div className="w-full max-w-3xl mx-auto px-4">
        <Splide
          options={mainOptions}
          className="mt-14"
          ref={mainRef}
          onMove={(splide) => {
            setCurrentSlide(splide.index);
          }}
          hasTrack={false}
          aria-label="Produk Dirgantara"
        >
          <SplideTrack>
            {images.map((image, index) => (
              <SplideSlide key={index}>
                <img
                  src={image}
                  alt={titles[index]}
                  className="w-full h-full object-cover"
                />
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>

        <Splide options={thumbnailOptions} ref={thumbnailRef} className="mt-4">
          {images.map((image, index) => (
            <SplideSlide key={index}>
              <div
                className={`cursor-pointer ${
                  currentSlide === index ? "opacity-100" : "opacity-30"
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>

        <div className="font-sans pl-4 mt-10 w-72 mb-12">
          <h3 className="text-lg font-semibold">{titles[currentSlide]}</h3>
          <p className="text-sm font-light mt-2">{descriptions[currentSlide]}</p>
        </div>

      </div>
      <Footer />
    </MobileView>
  );
}

export default DirgantaraProducts;
