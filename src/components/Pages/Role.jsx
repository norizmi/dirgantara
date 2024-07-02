import Footer from "../Fragments/Footer";
import Header from "../Fragments/Header";
import MobileView from "../Layout/MobileView";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from 'react-router-dom'
import cc from "../assets/images/cc1.jpg"
import ceo from "../assets/images/ceo2.jpg"
import sm from "../assets/images/sm1.jpg"
import designer from "../assets/images/designer.jpg"
import ba from "../assets/images/ba.jpg"
import seo from "../assets/images/seo.jpg"

const roles = [
  { name: "CEO", image: ceo },
  { name: "Social Media", image: sm },
  { name: "Content Creator", image: cc },
  { name: "Graphic Designer", image: designer },
  { name: "Brand Ambassador", image: ba },
  { name: "SEO", image: seo },
];

function Role() {
  return (
    <>
      <MobileView>
        <Header />
        <div className="h-full">
          <div className="text-black font-sans ml-7 mt-16 w-60">
            <h2 className="text-xl font-semibold">Role dalam permainan</h2>
            <p className="font-light mt-3 text-sm">
              Setiap role memiliki kemampuan khusus yang dapat digunakan selama
              permainan
            </p>
          </div>

          <div className="pt-9 mt-14 mb-10 h-full">
            <div className="flex justify-center mx-auto">
              <Splide
                options={{
                  rewind: true,
                  gap: "1rem",
                  fixedWidth: "40%",
                  fixedHeight: '15rem',
                  perPage: 1,
                  drag: 'free',
                  snap: true,
                  padding: { left: 300 },
                  arrows: false,
                  trimSpace: false,
                }}
                aria-label="Role Images"
              >
                {roles.map((role, index) => (
                  <SplideSlide key={index}>
                    <Link to={`/role/${role.name.toLowerCase().replace(' ', '-')}`}>
                      <img src={role.image} alt={role.name} className="rounded-lg mx-auto w-[200px] h-[145px] shadow-lg" />
                    </Link>
                    <h2 className="text-xl text-center mt-4 font-semibold text-black">{role.name}</h2>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </div>
        <Footer />
      </MobileView>
    </>
  );
}

export default Role;