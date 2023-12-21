import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Benefits from "../../Components/Benefits/Benefits";
import CallToAction from "../../Components/CallToAction/CallToAction";
import Services from "../../Components/Services/Services";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Benefits></Benefits>
            <Services></Services>
            <Testimonials></Testimonials>
            <CallToAction></CallToAction>
        </div>
    );
};

export default Home;