import ListCard from "../Elements/Card/ListCard"
import Footer from "../Fragments/Footer"
import Header from "../Fragments/Header"
import MobileView from "../Layout/MobileView"


function EducationPage() {
  return (
   <>
        <MobileView>
            <Header />
            <div className="mt-7">
                <h1 className="text-lg font-semibold text-black font-sans text-center">Materi Digital Marketing</h1>
                <ListCard />
            </div>
            <Footer /> 
        </MobileView>
   </>
  )
}

export default EducationPage
