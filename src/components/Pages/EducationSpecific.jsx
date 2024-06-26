import { Link } from "react-router-dom";
import Footer from "../Fragments/Footer";
import Header from "../Fragments/Header";
import MobileView from "../Layout/MobileView";
import Clock from "../assets/icon/clock.svg";
import Back from "../assets/icon/back.svg";
import { useState } from "react";

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
          <div className="w-[335px] mx-auto">
            <Link to="/education">
              <img
                src={Back}
                alt="button_back"
                className="mt-9 hover:bg-slate-200 p-2 hover:rounded-full"
              />
            </Link>
            <div className="mt-10">
              <div className="bg-blue-500 h-52 rounded-lg"></div>
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
            <div className="mt-7 mb-11">
              <h2 className="text-black font-semibold text-lg">Google Ads</h2>
              <p className="text-justify text-black mt-4 text-sm font-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
              <div onClick={handleMore}>
                {!more ? (
                  <div className="mt-2 text-sm text-black font-semibold cursor-pointer w-[335px]">
                    <p className="text-justify text-black mt-4 text-sm font-light">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                    <p>
                      Show less
                    </p>    
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
