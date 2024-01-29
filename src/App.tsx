import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Layout from "./components/Layout"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import './index.css'

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/resume" element={<Resume/> } />
        </Route>
      </Routes>
    </>
  )
}

export default App
