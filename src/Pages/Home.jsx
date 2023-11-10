import About from "../Components/About";
import Banner from "../Components/Banner";
import CallUs from "../Components/CallUs";
import Category from "../Components/Category";
import Featured from "../Components/Featured";
import PopularMenu from "../Components/PopularMenu";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Featured></Featured>
        </div>
    );
};

export default Home;