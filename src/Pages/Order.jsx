import { Helmet } from "react-helmet-async";
import order from "../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../Hooks/useMenu";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  
  
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");

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
                      <button className="btn bg-gray-200 text-yellow-600 border-b-4 border-b-yellow-600 hover:bg-black hover:text-white">
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
                      <button className="btn bg-gray-200 text-yellow-600 border-b-4 border-b-yellow-600 hover:bg-black hover:text-white">
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
                      <button className="btn bg-gray-200 text-yellow-600 border-b-4 border-b-yellow-600 hover:bg-black hover:text-white">
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
                      <button className="btn bg-gray-200 text-yellow-600 border-b-4 border-b-yellow-600 hover:bg-black hover:text-white">
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
                      <button className="btn bg-gray-200 text-yellow-600 border-b-4 border-b-yellow-600 hover:bg-black hover:text-white">
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
