import Carousel from "../Fragments/Carousel";
import Header from "../Elements/Header";

function Home() {
  return (
    <>
      <main className="my-0 mx-auto min-h-full max-w-screen-sm">
        <div className="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden bg-neutral-50 pb-[66px]">
          <Header />
          <Carousel />
          <div>
             <div className="text-2xl text-black">KAMI DIRGANTARA</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
