import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../../shared/Loading";

const AllSeller = () => {
  const url = `http://localhost:1000/users/status?type=Seller`;

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

  const handleVerify = (email) => {
    fetch(`http://localhost:1000/status?email=${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="bg-base-200 p-10 h-screen">
      <h3 className="text-3xl my-5 ">My Paid Orders</h3>
      {users.length === 0 ? (
        <p className="text-3xl my-5 text-center">There are no Sellers</p>
      ) : (
        <div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}
                {users?.map((user, index) => (
                  <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.seller_verified ? (
                                <>
                                    <div className='text-primary'>Verified</div>
                                </>
                      ) : (
                        <button
                          className="btn btn-primary btn-sm"
                          onClick={() => handleVerify(user.email)}
                        >
                          Verify
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllSeller;
