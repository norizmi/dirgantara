import logoDigantara from "../assets/images/logo-dirgantara.png";
import { useState, useEffect, useRef } from "react";
import menu from "../assets/icon/menu.svg";

function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 200;
      if (window.scrollY > scrollThreshold) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="transition-all duration-300 shadow-lg">
      <div
        className={`navbar top-0 left-0 right-0 bg-[#C7C7C7] z-10 ${
          isFixed ? "fixed shadow-md" : "sticky"
        }`}
      >
        <div className="container mx-auto flex justify-around items-center">
          <div className="flex-1">
            <img src={logoDigantara} alt="logo-dirgantara" />
          </div>
          <div className="flex-none relative" ref={menuRef}>
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                <label htmlFor="my-drawer-4" className="drawer-button ">
                  <img src={menu} alt="menu" className="w-7 mr-1" />
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                  <div className="flex flex-col items-center mt-10">
                    <li>
                      <a>Role in Game</a>
                    </li>
                    <li>
                      <a>How to Play</a>
                    </li>
                    <li>
                      <a>Dirgantara Products</a>
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
