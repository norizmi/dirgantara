import logoDigantara from '../assets/logo-dirgantara.png';

function Header() {
  return (
    <>
      <div className="navbar bg-nav-grey">
        <div className="flex-1">
          <img src={logoDigantara} alt="logo-dirgantara"/>
        </div>
        <div className="flex-none">
          <button className="btn btn-ghost btn-info">
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
        </div>
      </div>
    </>
  );
}

export default Header;
