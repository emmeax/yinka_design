import About from "@/component/About";
import ContactSection from "@/component/ContactSection";
import Faq from "@/component/Faq";
import Hero from "@/component/Hero";
import RecentProjects from "@/component/RecentProjects";
import SkillsetsAndProjects from "@/component/SkillsetsAndProjects";
import Testimonial from "@/component/Testimonial";

const Home = () => {
    return (
        <main>
            <Hero />
            <SkillsetsAndProjects />
            <About />
            <RecentProjects />
            <ContactSection />
            <Testimonial />
            <Faq />
        </main>
    );
};

export default Home;
