import { Helmet } from "react-helmet-async";
import order from "../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover";

const Order = () => {
    return (
        <div>
            <Helmet>
                <title>Tavern Restaurant | Order</title>
            </Helmet>

            <section>
                <Cover img={order} title={'ORDER FOOD'}>

                </Cover>
            </section>
        </div>
    );
};

export default Order;