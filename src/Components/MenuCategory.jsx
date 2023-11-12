import { Link } from "react-router-dom";
import Cover from "../Shared/Cover";
import MenuItem from "../Shared/MenuItem";


const MenuCategory = ({items, title, coverImg}) => {
    return (
        <div className="px-2">
        { title && <Cover img={coverImg} title={title}></Cover>}
            <section className="grid md:grid-cols-2 gap-3 mt-16">
                {
                    items.map (item => <MenuItem key={item._id} item = {item}></MenuItem>)
                }
            </section>
            <Link to={`/order/${title}`}>
            <div className="flex items-center justify-center my-3">
           <button className="btn btn-outline border-0 border-b-4">ORDER YOUR FAVOURITE FOOD</button>
           </div>
            </Link>
        </div>
    );
};

export default MenuCategory;