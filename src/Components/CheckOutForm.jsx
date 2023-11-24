import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import useAxios from "../Hooks/useAxios";
import useCart from "../Hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";

const CheckOutForm = () => {
    const [clientSecret, setClientSecret] = useState("");
    const [error, setError] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxios();
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => {
        return total + item.price;
    }, 0);
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();


    useEffect(() => {
        
         axiosSecure.post('/create-payment-intent', {price: totalPrice})
        .then((res) => {
            setClientSecret(res.data.clientSecret);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [axiosSecure, totalPrice]);
  

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
          }

          const card = elements.getElement(CardElement);
      
          if (card == null) {
            return;
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log('[error]', error);
            setError(error.message);
          } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('');
          }

          //confirm payment
          const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: user?.email || 'annonymous',
                  name: user?.displayName || 'annonymous',
                },
              },
            },
          );
          if (confirmError) {
            console.log(confirmError);
          } else {
            console.log(paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id);
                toast.success('Payment Successful');

                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), //utc convert
                    cartIds: cart.map(item => item._id),
                    status: 'pending', 
            }
           const res = await axiosSecure.post('/api/v1/payments', payment)
           refetch();
           if(res.data?.payment?.insertedId){
                toast.success('Payment Successful');
                navigate('/dashboard/paymentHistory');
           }
          }
        }
    }
    return (
        <form onSubmit={handleSubmit}>
        <CardElement
        className="px-10"
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="mx-10 btn bg-gradient-to-r from-yellow-800 to-yellow-600 text-white my-4" type="submit" disabled={!stripe|| !clientSecret}>
          Pay
        </button>
        <p className="text-red-500 mx-10"> {error}  </p>
        {transactionId && <p className="text-green-500 mx-10"> Your transaction Id: {transactionId} </p>}
      </form>
    );
};

export default CheckOutForm;