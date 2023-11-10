import SectionTitle from "./SectionTitle";
import featured from '../../src/assets/home/featured.jpg'


const Featured = () => {
    return (
        <div>
            <SectionTitle
            heading='Check it out'
            subHeading='Featured Item'
            >
            </SectionTitle>
            <div>
                <div>
                    <img src={featured} alt="" />
                </div>
                <div>
                <p>March 20, 2023</p>
                <p>WHERE CAN I GET SOME?</p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Error <br />voluptate facere, deserunt dolores maiores quod nobis quas quasi. <br />Eaque repellat recusandae ad laudantium tempore consequatur <br />consequuntur omnis ullam maxime tenetur.
                </div>
            </div>
        </div>
    );
};

export default Featured;