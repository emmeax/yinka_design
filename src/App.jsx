// import { Home } from 'lucide-react'
import "./App.css";
import About from "./component/About";
import ContactSection from "./component/ContactSection";
import Faq from "./component/Faq";
import GetInTouch from "./component/GetInTouch";
import Hero from "./component/Hero";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import OtherProject from "./component/OtherProject";
import SmoothScroll from "./component/smooth-scroll";
import Testimonial from "./component/Testimonial";

function App() {
    return (
        <SmoothScroll>
            <Navbar />
            <Home />
            <Hero />
            <About />
            <OtherProject />
            <ContactSection />
            <Testimonial />
            <Faq />
            <GetInTouch />
        </SmoothScroll>
    );
}

export default App;
