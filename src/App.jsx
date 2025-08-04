import './App.css'
import AboutSection from './components/about'
import ContactSection from './components/contact'
 import TypingText from './components/hero'
import Navbar from './components/navbar'
import ProjectsSection from './components/projects'
import SkillsSection from './components/skills'
 

function App() {
 
  return (
    <>
     <Navbar/>
    <TypingText/>
    <br/>
     <SkillsSection/>
     <AboutSection/>
     <ProjectsSection/>
     <ContactSection/>
     
    </>
  )
}

export default App
