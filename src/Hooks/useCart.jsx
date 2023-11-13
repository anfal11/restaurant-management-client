import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";


const useCart = () => {
    const axiosSecure = useAxios();
    const {user} = useContext(AuthContext);
    const { refetch,  data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/v1/cart?email=${user?.email}`);
            return res.data;
          },
      })
    return [cart, refetch];
    
};

export default useCart;