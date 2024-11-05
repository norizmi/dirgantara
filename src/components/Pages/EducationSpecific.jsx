import { Link } from "react-router-dom";
import Footer from "../Fragments/Footer";
import Header from "../Fragments/Header";
import MobileView from "../Layout/MobileView";
import Clock from "../assets/icon/clock.svg";
import Back from "../assets/icon/back.svg";
import { useState } from "react";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

function EducationSpecific() {
  const [more, setMore] = useState(true);

  const handleMore = () => {
    setMore(!more);
  };

  return (
    <>
      <MobileView>
        <Header />
        <div>
          <div className="w-[335px] mx-auto flex flex-col p-6">
            <Link to="/education">
              <img
                src={Back}
                alt="button_back"
                className="mt-9 hover:bg-slate-200 p-2 hover:rounded-full"
              />
            </Link>
            <div className="mt-10">
              <MediaPlayer
                title="Google Ads"
                src="https://www.youtube.com/watch?v=L3btCFT0WmI"
              >
                <MediaProvider />
                <DefaultVideoLayout icons={defaultLayoutIcons} />
              </MediaPlayer>
            </div>
            <div>
              <h2 className="text-lg text-black font-sans font-semibold mt-4">
                Google Ads for beginners
              </h2>
              <div className="flex gap-1 items-center mt-1 text-sm">
                <img src={Clock} alt="clock" className="w-[14px]" />
                <p>1h 30min</p>
                <div className="bg-slate-400 w-1 h-1 rounded-full mr-1 ml-1"></div>
                <p>10 lessons</p>
              </div>
            </div>
            <p className="font-semibold text-lg text-center text-black mt-8">
              Lessons
            </p>
            <div className="mt-4 mb-11">
              <h2 className="text-black font-semibold text-lg">Google Ads</h2>
              <p className="text-justify text-black mt-4 text-sm font-light">
                Google Ads merupakan platform periklanan digital yang
                dikembangkan oleh Google, menawarkan solusi pemasaran online
                yang powerful bagi bisnis dari berbagai skala. Platform ini
                bekerja dengan sistem lelang berbasis Pay-Per-Click (PPC), di
                mana pengiklan hanya perlu membayar ketika iklan mereka diklik
                oleh pengguna, menjadikannya pilihan yang cost-effective untuk
                memasarkan produk atau jasa.
              </p>
              <div onClick={handleMore}>
                {!more ? (
                  <div className="mt-2 text-sm text-black font-semibold cursor-pointer">
                    <p className="text-justify text-black mt-4 text-sm font-light">
                      Keunggulan utama Google Ads terletak pada kemampuannya
                      dalam melakukan targeting yang sangat presisi. Pengiklan
                      dapat menentukan target audience berdasarkan berbagai
                      parameter seperti lokasi geografis, demografi, minat,
                      perilaku online, bahkan kata kunci yang dicari oleh
                      pengguna. Sistem ini didukung oleh algoritma canggih yang
                      mempertimbangkan berbagai faktor seperti Quality Score, Ad
                      Rank, dan bid price untuk menentukan penempatan iklan.
                    </p>
                    <p className="mt-2">Show less</p>
                  </div>
                ) : (
                  <p className="mt-2 text-sm text-black font-semibold cursor-pointer active:scale-95 w-max">
                    Show more
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </MobileView>
    </>
  );
}

export default EducationSpecific;
