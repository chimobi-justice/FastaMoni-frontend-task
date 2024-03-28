import BusinessStats from "../../Components/BusinessStats";
import CaseStudy from "../../Components/CaseStudy";
import Client from "../../Components/Client";
import ConsultingInfo from "../../Components/ConsultingInfo";
import Details from "../../Components/Details";
import Experience from "../../Components/Experience";
import FAQ from "../../Components/FAQ";
import Footer from "../../Components/Footer";
import HeroSection from "../../Components/HeroSection";
import Mission from "../../Components/Mission";
import NavBar from "../../Components/NavBar";

const Home = () => {
    return (
        <>
            <NavBar />
            <HeroSection />
            <Experience />
            <Details />
            <CaseStudy />
            <Mission />
            <FAQ />
            <Client />
            <ConsultingInfo />
            <BusinessStats />
            <Footer />
        </>
    )
}

export default Home;