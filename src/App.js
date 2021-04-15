// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from "react-particles-js";
import Navbar from "./Elements/NavBar";
import Header from "./Elements/Header";
import Section from "./Elements/Section";
import Education from "./Elements/Education";
import Experience from "./Elements/Experience";
import Footer from './Elements/Footer';

function App() {
  return (  
  <>
    {/* // <h2>PORTOFOLIO PROJECT...</h2> */}
    <Particles

      params={{
        particles:{
          number:{
            value:30,
            density:{
              enable:true , 
              value_area:900
            }
          },
          shape:{
            type: "circle",
            stroke: {
              width: 6,
              color: "#f9ab00"
            }
          }
        }
      }}



    />
    <Navbar />
    <Header/>
    <Section/>
    <Education/>
    <Experience/>
    <Footer/>

  </>
  
    );
}

export default App;
