import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "./SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    return (
        <div>
            <SectionTitle
            heading={"Hurry Up!!!"}
            subHeading={"Payment"}
            ></SectionTitle>
            <div>
            <Elements stripe={stripePromise}>
      <CheckOutForm />
    </Elements>
            </div>
        </div>
    );
};

export default Payment;