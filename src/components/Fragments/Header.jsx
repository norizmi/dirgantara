import logoDigantara from '../assets/images/logo-dirgantara.png';
import { useState, useEffect, useRef } from 'react';

function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='transition-all duration-300 shadow-lg'>
      <div className={`navbar top-0 left-0 right-0 bg-[#C7C7C7] z-10 ${
        isFixed ? 'fixed shadow-md' : 'sticky'
      }`}>
        <div className='container mx-auto flex justify-around items-center'>
          <div className="flex-1">
            <img src={logoDigantara} alt="logo-dirgantara"/>
          </div>
          <div className="flex-none relative" ref={menuRef}>
            <button className="btn btn-ghost btn-info" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                <a href="#about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Role in Game</a>
                <a href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">How to Play</a>
                <a href="#contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dirgantara Products</a>
                <a href="#contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contact</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;