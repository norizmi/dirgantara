import Footer from "../Fragments/Footer";
import Header from "../Fragments/Header";
import MobileView from "../Layout/MobileView";
import Back from "../assets/icon/back.svg";
import { Link } from "react-router-dom";
// import { SpinWheel } from "spin-wheel-game";
// import { useState } from "react";

// const segments = [
//   { segmentText: "1", segColor: "red" },
//   { segmentText: "2", segColor: "blue" },
//   { segmentText: "3", segColor: "green" },
//   { segmentText: "4", segColor: "orange" },
//   { segmentText: "5", segColor: "purple" },
//   { segmentText: "6", segColor: "brown" },
// ];

const Spinner = () => {
  // const [spinResult, setSpinResult] = useState('');
  // const [showAlert, setShowAlert] = useState(false);

  // const handleSpinFinish = (result) => {

  //   setSpinResult(result);
  //   setShowAlert(true);

  //   setTimeout(() => {
  //     setShowAlert(false);
  //   }, 10000);
  // };

  // const spinWheelProps = {
  //   segments,
  //   onFinished: handleSpinFinish,
  //   primaryColor: "black",
  //   contrastColor: "white",
  //   buttonText: "Spin",
  //   isOnlyOnce: false,
  //   size: 180,
  //   upDuration: 200,
  //   downDuration: 700,
  //   fontFamily: "Arial",
  //   arrowLocation: "top",
  //   showTextOnSpin: true,
  //   isSpinSound: true,
  // };

  return (
    <MobileView>
      <Header />
      <Link to="/">
              <img
                src={Back}
                alt="button_back"
                className="mt-9 hover:bg-slate-200 p-2 hover:rounded-full ml-7"
              />
            </Link>
      <div className="flex flex-col items-center mt-10 mb-12 bg-[#F0F0F0]">

      <iframe
        src="https://pickerwheel.com/emb/?choices=1,2,3,4,5,6&title=unveil%20your%20destiny&mute=false"
        width="100%"
        height="550px"
        scrolling="no"
        frameBorder="0"
        title="Picker Wheel"
        style={{ backgroundColor: '#F0F0F0' }}
      ></iframe>
      </div>
      <Footer />
    </MobileView>
  );
};

export default Spinner;