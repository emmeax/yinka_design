// import { Home } from 'lucide-react'
import { MotionConfig } from "motion/react";
import "./App.css";
import About from "./component/About";
import ContactSection from "./component/ContactSection";
import Faq from "./component/Faq";
import GetInTouch from "./component/GetInTouch";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import OtherProject from "./component/OtherProject";
import SkillsetsAndProejcts from "./component/SkillsetsAndProejcts";
import SmoothScroll from "./component/smooth-scroll";
import Testimonial from "./component/Testimonial";

function App() {
    return (
        <SmoothScroll>
            <MotionConfig transition={{ ease: "easeOut" }}>
                <Navbar />
                <Home />
                <SkillsetsAndProejcts />
                <About />
                <OtherProject />
                <ContactSection />
                <Testimonial />
                <Faq />
                <GetInTouch />
            </MotionConfig>
        </SmoothScroll>
    );
}

export default App;
