import Banner from "./banner/Banner";
import HowItWorks from "./howitworls/HowItWorks";
import PremiumMembers from "./premiummembers/PremiumMembers";
import SuccessCounter from "./successcounter/SuccessCounter";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PremiumMembers></PremiumMembers>
            <HowItWorks></HowItWorks>
            <SuccessCounter></SuccessCounter>
        </div>
    );
};

export default Home;