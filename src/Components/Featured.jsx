import SectionTitle from "./SectionTitle";
import featured from '../../src/assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
            heading='Check it out'
            subHeading='Featured Item'
            >
            </SectionTitle>
            <div className="bg-slate-600 opacity-60 max-w-7xl mx-auto gap-2 flex flex-col md:flex-row justify-center items-center py-8 px-16">
                <div>
                    <img className="w-[500px]" src={featured} alt="" />
                </div>
                <div className="ml-10 space-y-2">
                <p>March 20, 2023</p>
                <p>WHERE CAN I GET SOME?</p>
                <p>Explore our signature dishes, crafted with precision. Delight in the fusion of flavors at our culinary haven. Indulge in a gastronomic journey!</p>
                <button className="btn btn-outline border-0 border-b-4 text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;