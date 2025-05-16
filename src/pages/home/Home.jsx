import Banner from "./banner/Banner";
import HowItWorks from "./howitworls/HowItWorks";
import PremiumMembers from "./premiummembers/PremiumMembers";
import SuccessCounter from "./successcounter/SuccessCounter";
import WhyChooseUs from "./whychooseus/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Banner />
            <PremiumMembers />
            <HowItWorks />
            <WhyChooseUs />
            <SuccessCounter />
        </div>
    );
};

export default Home;