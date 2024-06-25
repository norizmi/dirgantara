import Footer from "../Fragments/Footer"
import Header from "../Fragments/Header"
import FormView from "../Layout/FormView"
import MobileView from "../Layout/MobileView"


function Contact() {
  return (
    <>
      <MobileView>
        <Header />
        <div className="font-sans flex flex-col items-center mb-14">
          <p className="text-sm mt-10 mb-5 font-semibold text-black">Perlu jawaban kilat?</p>
          <h2 className="text-lg font-semibold text-black mb-8">Mari kita berbincang</h2> 
          <p className="w-[305px] text-sm text-center text-black font-extralight">Berikan pertanyaan kamu di sini atau kirimkan
          email kepada kami info@dirgantara.com</p> 
        </div>
        <FormView />    
        <Footer />
      </MobileView>
    </>
  )
}

export default Contact
