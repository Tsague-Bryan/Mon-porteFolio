
import About from "./components/About"
import Experience from "./components/experience"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Project from "./components/Project"

function App() {

  return (
    <>
      <div>
        <div className="p-5 md:-px[15%]"> <Navbar />  <Home /> </div>
      </div>
      <About />
      <div className="p-5 md:-px[15%]">
        <Experience />
        <br />
        <Project/>
        <Footer/>
      </div>
    </>

  )
}

export default App
