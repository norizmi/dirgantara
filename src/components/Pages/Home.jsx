import Carousel from "../Elements/Carousel";
import Header from "../Elements/Header";

function Home() {
  return (
    <>
      <main className="my-0 mx-auto min-h-full max-w-screen-sm">
        <div className="my-0 mx-auto min-h-screen max-w-480 overflow-x-hidden bg-white pb-[66px]">
          <Header />
          <Carousel />

          
        </div>
      </main>
    </>
  );
}

export default Home;
