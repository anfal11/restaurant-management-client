import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import MenuItem from "../Shared/MenuItem";

const PopularMenu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(()=> {
        fetch('./menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems);
        })
    
    },[])

    // console.log(menu);

    return (
        <div className="mb-12 p-4">
            <SectionTitle 
            heading='Check it out' 
            subHeading='From Our Menu'/>
            <section className="grid md:grid-cols-2 gap-3">
                {
                    menu.map (item => <MenuItem key={item._id} item = {item}></MenuItem>)
                }
            </section>
           <div className="flex items-center justify-center my-3">
           <button className="btn btn-outline border-0 border-b-4">View Full Menu</button>
           </div>
        </div>
    );
};

export default PopularMenu;