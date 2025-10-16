// import { Home } from 'lucide-react'
import "./App.css";
import About from "./component/About";
import ContactSection from "./component/ContactSection";
import Faq from "./component/Faq";
import Hero from "./component/Hero";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import OtherProject from "./component/OtherProject";
// import Testimonial from './component/Testimonial'
import GetInTouch from "./component/GetInTouch";
import MobileGetInTouch from "./component/MobileGetInTouch";

function App() {
    return (
        <div className=" bg-[#000000] text-white">
            <Navbar />
            <Home />
            <Hero />
            <section id="about">
                <About />
            </section>
            <section id="work">
                <OtherProject />
            </section>
            <section id="contact">
                <ContactSection />
            </section>
            {/* <section>
        <Testimonial/>
        </section> */}
            <section>
                <Faq />
            </section>
            <section>
                <GetInTouch />
            </section>
            <section>
                <MobileGetInTouch />
            </section>
        </div>
    );
}

export default App;
