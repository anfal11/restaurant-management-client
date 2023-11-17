import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";

const AllUsers = () => {
    const axiosSecure = useAxios();

    const {  data: users =[] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
          const res = await axiosSecure.get(`/api/v1/users`);
            return res.data;
            },
      })


    return (
        <div>
            <div className="mt-20">
      <div className="flex justify-evenly">
        <h1 className="text-xl lg:text-4xl">All Users</h1>
        <h1 className="text-xl lg:text-4xl">Total Users: {users.length}</h1>
        {/* <h1 className="text-xl lg:text-4xl">Total Price: ${totalPrice}</h1> */}
        <button className="btn text-base lg:text-3xl bg-[#D1A054]">Pay</button>
      </div>

      <div className="my-20">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>User Email</th>
                <th>User Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
                {
                    users.map((user) => 

                    <tr key={user._id}>
                <td>
                  <div className="flex items-center space-x-2">
                    <img src={user?.photoUrl} alt="" className="w-10 h-10 rounded-full" />
                    <h1 className="lg:text-xl">{user?.email}</h1>
                  </div>
                </td>
                <td className="lg:text-xl">{ user?.name}</td>
                <th>
                  <button className="btn btn-ghost btn-xs lg:text-xl">{ user?.price}</button>
                </th>
                <td>
                {/* <button onClick={()=> handleDelete(user?._id)}>
                <MdDelete className="text-2xl lg:text-4xl text-[#B91C1C]" />
                </button> */}
                </td>
              </tr>
                     )
                }

            </tbody>

          </table>
        </div>
      </div>
    </div>
        </div>
    );
};

export default AllUsers;