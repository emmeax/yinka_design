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
import Testimonial from "./component/Testimonial";

function App() {
    return (
        <div>
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
            <section id="testimonial">
                <Testimonial />
            </section>
            <section>
                <Faq />
            </section>
            <section>
                <GetInTouch />
            </section>
        </div>
    );
}

export default App;
