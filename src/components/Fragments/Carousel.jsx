/* eslint-disable no-mixed-spaces-and-tabs */
import frame1 from "../assets/images/frame1.png";
import frame2 from "../assets/images/frame2.png";
import frame3 from "../assets/images/frame3.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import Button from "../Elements/Button";


function Carousel() {
    
      return (
        <Splide options={{
            type: 'loop',
            rewind:true, 
            autoplay: true,
            perMove: 1,
            perPage: 1, 
            arrows: false,
            pagination: false,
            autoScroll: {
                pauseOnHover: true,
                pauseOnFocus: false,
                speed: 1
            },
         }}
        extensions={{ AutoScroll }}> 
        <SplideSlide>
            <div>
            <img src={frame1} alt="image 1" className="w-screen"/>
            <Button>Selengkapnya</Button>
            </div>
        </SplideSlide>
        <SplideSlide>
            <div>
            <img src={frame2} alt="image 1" className="w-screen"/>
        <Button>Selengkapnya</Button>
            </div>
        </SplideSlide>
        <SplideSlide>
            <div>
            <img src={frame3} alt="image 1" className="w-screen"/>
        <Button>Selengkapnya</Button>
            </div>
        </SplideSlide>
       </Splide>

      )
}

export default Carousel;
