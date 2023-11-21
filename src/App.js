import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Social_Links from "./components/Social_Links";
import About from "./components/About";
//import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";


function App() {
  return (
    <>
      <NavBar/>
 
   <Home/>
   <About/>

   <Portfolio/>
   <Experience/>
   <Contact/>
   <Social_Links/>
   
    </>
   
  );
}

export default App;
