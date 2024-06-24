import ig from "../assets/icon/ig.svg";
import tiktok from "../assets/icon/tiktok.svg";
import x from "../assets/icon/x.svg";

function Footer() {
  return (
    <>
      <footer className="footer bg-[#AE4743] text-white p-8 flex flex-col">
        <nav>
          <h6 className="font-semibold">DIRGANTARA</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Role in Game</a>
          <a className="link link-hover">How to Play</a>
          <a className="link link-hover">Dirgantara Products</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="mx-auto">
          <div className="flex justify-center items-center gap-2">
            <a>
              <img src={ig} alt="instagram" />
            </a>
            <a>
              <img src={tiktok} alt="tiktok" />
            </a>
            <a>
              <img src={x} alt="twitter" />
            </a>
          </div>
        </nav>
        <aside className="text-center text-sm font-extralight">
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by DIRGANTARA
          </p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
