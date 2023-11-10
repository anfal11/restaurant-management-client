import { Helmet } from "react-helmet-async";
import About from "../Components/About";
import Banner from "../Components/Banner";
import CallUs from "../Components/CallUs";
import CardItem from "../Components/CardItem";
import Category from "../Components/Category";
import Featured from "../Components/Featured";
import PopularMenu from "../Components/PopularMenu";
import Testimonials from "../Components/Testimonials";

const Home = () => {
    return (
        <div>
         <Helmet>
        <title>Tavern Restaurant | Home</title>
      </Helmet>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <CardItem></CardItem>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;