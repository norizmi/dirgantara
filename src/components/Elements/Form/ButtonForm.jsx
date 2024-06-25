import arrowSerong from "../../assets/icon/arrowSerong.png";

function ButtonForm() {
  return (
    <>
      <div className="bg-[#AE4743] rounded-full w-[342px] h-[56px] font-semibold text-md text-white flex justify-center items-center transition-all duration-100 active:scale-95 active:bg-red-800 cursor-pointer">
        <div className="flex-grow justify-center items-center text-center text-lg">
        <button>Kirim</button>
        </div>
          <img src={arrowSerong} alt="arrow" className="bg-white rounded-full p-2 mr-2"/>
      </div>
    </>
  );
}

export default ButtonForm;
