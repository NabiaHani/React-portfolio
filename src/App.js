import { Routes, Route} from "react-router-dom"
import "./App.css"
import Navbar from "./Components/Navbar"
// import { Home, AboutMe, Skills, Project, Contact} from "./Components/pages"
import Home from "./Components/pages/Home"
import AboutMe from "./Components/pages/About"
import Skills  from "./Components/pages/Skills"
import  Project  from "./Components/pages/Project"
import Contact  from "./Components/pages/Contact"
import './Components/ProjectStyle'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project  />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App