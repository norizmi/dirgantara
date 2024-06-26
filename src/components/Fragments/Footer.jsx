import { Link } from "react-router-dom";
import ig from "../assets/icon/ig.svg";
import tiktok from "../assets/icon/tiktok.svg";
import x from "../assets/icon/x.svg";


function Footer() {
  return (
    <>
      <footer className="footer bg-[#AE4743] text-white p-8 flex flex-col mt-4">
        <nav>
          <h6 className="font-semibold">DIRGANTARA</h6>
          <Link className="link link-hover" to="/">Home</Link>
          <Link className="link link-hover" to="/">Role in Game</Link>
          <Link className="link link-hover" to="/">How to Play</Link>
          <Link className="link link-hover" to="/">Dirgantara Products</Link>
          <Link className="link link-hover" to="/education">Education</Link>
          <Link className="link link-hover" to="/">Spinner</Link>
          <Link className="link link-hover" to="/contact">Contact</Link>
        </nav>
        <nav className="mx-auto">
          <div className="flex justify-center items-center gap-2">
            <a href="https://www.instagram.com/dirgantaragames.id/">
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
