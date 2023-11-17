import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import {MdDelete} from 'react-icons/md'
import {FaUsers} from 'react-icons/fa'
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxios();

  const { reFetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/v1/users`);
      return res.data;
    },
  });

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure you want to remove item from cart?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!"
    }).then((result) => {
      if (result.isConfirmed) {

          axiosSecure.delete(`/api/v1/users/${user._id}`)
          .then((result) => {
              if (result.data.deletedCount > 0) {
                  Swal.fire({
                      title: "Removed!",
                      text: "Your item has been removed.",
                      icon: "success"
                    });
                    reFetch();
              }
          })

        
      }
    });
  }

  const handleMakeAdmin = (user) => {
    
  }

  return (
    <div>
      <div className="mt-20">
        <div className="flex justify-evenly">
          <h1 className="text-xl lg:text-4xl">All Users</h1>
          <h1 className="text-xl lg:text-4xl">Total Users: {users.length}</h1>
          {/* <h1 className="text-xl lg:text-4xl">Total Price: ${totalPrice}</h1> */}
          <button className="btn text-base lg:text-3xl bg-[#D1A054]">
            Pay
          </button>
        </div>

        <div className="my-20">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>User Name</th>
                  <th>User Email</th>
                  <th>Roll</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td className="lg:text-xl">{user?.name}</td>
                    <td>
                      <div className="flex items-center space-x-2">
                        <h1 className="lg:text-xl">{user?.email}</h1>
                      </div>
                    </td>
                    <td>
                    <button onClick={()=> handleMakeAdmin(user)}>
                <FaUsers className="text-2xl lg:text-4xl bg-[#D1A054] text-white p-1" />
                </button>
                    </td>                   
                    <td>
                      <button onClick={()=> handleDeleteUser(user)}>
                <MdDelete className="text-2xl lg:text-4xl text-[#B91C1C]" />
                </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
