import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import menuImg from "../assets/menu/banner3.jpg";
import dessertImg from "../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../assets/menu/pizza-bg.jpg";
import saladImg from "../assets/menu/salad-bg.jpg";
import soupImg from "../assets/menu/soup-bg.jpg";
import useMenu from "../Hooks/useMenu";
import SectionTitle from "../Components/SectionTitle";
import MenuCategory from "../Components/MenuCategory";



const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const offered = menu.filter(item => item.category === 'offered');

  return (
    <div>
      <Helmet>
        <title>Tavern Restaurant | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      {/* main cover  */}
      <SectionTitle
      heading={"Don't miss"}
        subHeading={"TODAY'S OFFER"}>
      </SectionTitle>
      {/* offered menu items */}

      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu items */}
      
      <MenuCategory items={dessert} title="Dessert" coverImg={dessertImg}></MenuCategory>

      <MenuCategory items={pizza} title="Pizza" coverImg={pizzaImg}></MenuCategory>

      <MenuCategory items={salad} title="Salad" coverImg={saladImg}></MenuCategory>

      <MenuCategory items={soup} title="Soup" coverImg={soupImg}></MenuCategory>

    </div>
  );
};

export default Menu;
