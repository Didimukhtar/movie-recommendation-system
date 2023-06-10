import { Link } from "react-router-dom"
import Header from "../components/Header.jsx"
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import Genres from "../components/Genres.jsx";
import Footer from "../components/Footer.jsx";

const LandingPage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Features />
            <Genres />
            <Footer />
        </div>
    )
}

export default LandingPage