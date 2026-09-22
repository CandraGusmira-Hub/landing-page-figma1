import HeroSection from "./section/HeroSection"
import Navbar from "./components/Navbar"
import Service from "./section/Service"
import AlurKerja from "./section/AlurKerja"
import Project from "./section/Project"
import PriceList from "./section/PriceList"
import CtaSection from "./section/Ctasection"
import Footer from "./section/Footer"
import Preloader from "./components/PreLoader"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Preloader/>
        <Navbar/>
        <main>
          <HeroSection />
          <Service/>
          <Project/>
          <AlurKerja/>
          <PriceList/>
        </main>
      <CtaSection/>
      <Footer/>
    </div>
  )
}

export default App