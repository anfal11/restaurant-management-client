// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
    const axiosPublic = useAxiosPublic();
    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(()=> {
    //     fetch('http://localhost:5000/api/v1/menu')
    //     .then(res => res.json())
    //     .then(data => {
    //         setMenu(data);
    //         setLoading(false);
    //         // const popularItems = data.filter(item => item.category === 'popular');
    //         // setMenu(popularItems);
    //     })
    // },[])
    const {refetch, data: menu = [], isPending: loading} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await axiosPublic.get('/api/v1/menu');
            return res.data;
        }
       
    })

    return [menu, loading, refetch]
};

export default useMenu;