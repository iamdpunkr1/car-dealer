import Navbar from "./components/Navbar"
import Find from "./components/Find"
import Hero from "./components/Hero"
import './App.css'
import Welcome from "./components/Welcome"
import Types from "./components/Types"
import Offers from "./components/Offers"
import Services from "./components/Services"

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Find/>
    <Welcome/>
    <Types/>
    <Offers/>
    <Services/>
    </>
  )
}

export default App
