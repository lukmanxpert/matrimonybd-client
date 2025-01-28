import Banner from "./banner/Banner";
import HowItWorks from "./howitworls/HowItWorks";
import PremiumMembers from "./premiummembers/PremiumMembers";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PremiumMembers></PremiumMembers>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;