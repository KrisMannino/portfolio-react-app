import About from "./components/About";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
// import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import BackgroundOrbs from "./components/BackgroundOrbs";

//import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />
      <BackgroundOrbs />
      {/* <Routes>
        <Route path='/' element={<Hero /> } />
        <Route path='/about' element={<About /> } />
        <Route path='/skills' element={<Skills /> } />
        <Route path='/work' element={<Work /> } />
        <Route path='/achievements' element={<Achievements /> } />
        <Route path='/gallery' element={<Gallery /> } />
        <Route path='/contact' element={<Contact /> } />
      </Routes> */}
      
      <Hero />
      <About />
      <Skills />
      <Work />
      <Achievements />
      {/* <Gallery /> */}
      <Contact />
    </div>
  );
}

export default App;
