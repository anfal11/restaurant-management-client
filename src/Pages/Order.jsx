import { Helmet } from "react-helmet-async";
import order from "../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../Hooks/useMenu";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import toast from "react-hot-toast";
// import axios from "axios";
import useAxios from "../Hooks/useAxios";
import useCart from "../Hooks/useCart";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosSecure = useAxios();
  const [, refetch] = useCart();

  


  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");


  const handleAddToCart = (item) => {
    // console.log(item, user?.email);
    if (user && user.email) {
      // sent cart item to the database
     const cartItem = {
        email: user?.email,
        name: item?.name,
        price: item.price,
        image: item.image,
     }
    //  console.log(cartItem);

    //  axios.post('http://localhost:5000/api/v1/cart', cartItem)
    axiosSecure.post('/api/v1/cart', cartItem)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            toast.success("Your item added to cart successfully");
            refetch();
          }
        })
        // refetch cart to update the count
       
    } else {
      toast('Please login to add to cart', {
        icon: '❌',
      });
      navigate('/login');
    }
  }

  return (
    <div>
      <Helmet>
        <title>Tavern Restaurant | Order</title>
      </Helmet>

      <section>
        <Cover img={order} title={"ORDER FOOD"}></Cover>
        <Tabs
          defaultIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          className="my-10"
        >
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-10">
              {salad.map((item) => (
                <div
                  className="card w-80 lg:w-72 bg-base-100 shadow-xl"
                  key={item._id}
                >
                  <figure>
                    <img src={item.image} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title uppercase">{item.category}</h2>
                    <h2 className="absolute right-0 top-0 bg-slate-800 text-white px-4 mt-4 mr-4">
                      ${item.price}
                    </h2>
                    <p>{item.recipe}</p>
                    <div className="card-actions justify-center">
                      <button
                      onClick={() => handleAddToCart(item)}
                       className="btn bg-gray-200 text-yellow-600 border-b-4 border-b-yellow-600 hover:bg-black hover:text-white">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-10">
              {pizza.map((item) => (
                <div
                  className="card w-80 lg:w-72 bg-base-100 shadow-xl"
                  key={item._id}
                >
                  <figure>
                    <img src={item.image} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title uppercase">{item.category}</h2>
                    <h2 className="absolute right-0 top-0 bg-slate-800 text-white px-4 mt-4 mr-4">
                      ${item.price}
                    </h2>
                    <p>{item.recipe}</p>
                    <div className="card-actions justify-center">
                      <button
                      onClick={() => handleAddToCart(item)}
                       className="btn bg-gray-200 text-yellow-600 border-b-4 border-b-yellow-600 hover:bg-black hover:text-white">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-10">
              {soup.map((item) => (
                <div
                  className="card w-80 lg:w-72 bg-base-100 shadow-xl"
                  key={item._id}
                >
                  <figure>
                    <img src={item.image} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title uppercase">{item.category}</h2>
                    <h2 className="top-0 absolute right-0 bg-slate-800 text-white px-4 mt-4 mr-4">
                      ${item.price}
                    </h2>
                    <p>{item.recipe}</p>
                    <div className="card-actions justify-center">
                      <button
                      onClick={() => handleAddToCart(item)}
                       className="btn bg-gray-200 text-yellow-600 border-b-4 border-b-yellow-600 hover:bg-black hover:text-white">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-10">
              {dessert.map((item) => (
                <div
                  className="card w-80 lg:w-72 bg-base-100 shadow-xl"
                  key={item._id}
                >
                  <figure>
                    <img src={item.image} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title uppercase">{item.category}</h2>
                    <h2 className="top-0 absolute right-0 bg-slate-800 text-white px-4 mt-4 mr-4">
                      ${item.price}
                    </h2>
                    <p>{item.recipe}</p>
                    <div className="card-actions justify-center">
                      <button
                        onClick={() => handleAddToCart(item)}
                       className="btn bg-gray-200 text-yellow-600 border-b-4 border-b-yellow-600 hover:bg-black hover:text-white">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-10">
              {drinks.map((item) => (
                <div
                  className="card w-80 lg:w-72 bg-base-100 shadow-xl"
                  key={item._id}
                >
                  <figure>
                    <img src={item.image} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title uppercase">{item.category}</h2>
                    <h2 className="top-0 absolute right-0 bg-slate-800 text-white px-4 mt-4 mr-4">
                      ${item.price}
                    </h2>
                    <p>{item.recipe}</p>
                    <div className="card-actions justify-center">
                      <button
                       onClick={() => handleAddToCart(item)}
                       className="btn bg-gray-200 text-yellow-600 border-b-4 border-b-yellow-600 hover:bg-black hover:text-white">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </section>
    </div>
  );
};

export default Order;
