import Footer from "../Fragments/Footer";
import Header from "../Fragments/Header";
import MobileView from "../Layout/MobileView";
import Back from "../assets/icon/back.svg";
import { Link } from "react-router-dom";
import { SpinWheel } from "spin-wheel-game";
import { useState } from "react";

const segments = [
  { segmentText: "1", segColor: "red" },
  { segmentText: "2", segColor: "blue" },
  { segmentText: "3", segColor: "green" },
  { segmentText: "4", segColor: "orange" },
  { segmentText: "5", segColor: "purple" },
  { segmentText: "6", segColor: "brown" },
];

const Spinner = () => {
  const [spinResult, setSpinResult] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSpinFinish = (result) => {
    console.log(`Spin to ${result}`)
    setSpinResult(result);
    setShowAlert(true);

    // Hide the alert after 3 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);

    switch(result) {
      case 'Option 1':
        console.log('Action for Option 1');
        break;
      case 'Option 2':
        console.log('Action for Option 2');
        break;
      case 'Option 3':
        console.log('Action for Option 3');
        break;
      default:
        console.log('Unknown option');
    }
  };

  const spinWheelProps = {
    segments,
    onFinished: handleSpinFinish,
    primaryColor: "black",
    contrastColor: "white",
    buttonText: "Spin",
    isOnlyOnce: false,
    size: 180,
    upDuration: 100,
    downDuration: 600,
    fontFamily: "Arial",
    arrowLocation: "top",
    showTextOnSpin: true,
    isSpinSound: true,
  };

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
      <div className="flex flex-col items-center mt-10 mb-10">
        <SpinWheel {...spinWheelProps} />
        {showAlert && (
          <div className="mt-4 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded w-4/5 max-w-sm">
            <h4 className="font-bold">Hasil Putaran</h4>
            <p>Anda mendapatkan: {spinResult}</p>
          </div>
        )}
      </div>
      <Footer />
    </MobileView>
  );
};

export default Spinner;