import { Helmet } from "react-helmet-async";
import order from "../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Order = () => {

  return (
    <div>
      <Helmet>
        <title>Tavern Restaurant | Order</title>
      </Helmet>

      <section>
        <Cover img={order} title={"ORDER FOOD"}></Cover>
        <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
      </section>
    </div>
  );
};

export default Order;
