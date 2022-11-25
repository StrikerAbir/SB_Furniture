import { format } from "date-fns/esm";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../authProvider/AuthProvider";

const BookingModal = ({data}) => {
  const { user } = useContext(AuthContext);
  const { title, _id } = data;
  const date=new Date();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = form.date.value;
    const fName = form.fName.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const booking = {
      product: title,
      product_id: _id,
      buyer_name: fName,
      buyer_email: email,
      buyer_phone: phone,
      buy_date: date
    };

    

  }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{title}</h3>

          <form onSubmit={handleSubmit}>
            <div className="mt-12">
              <div className="form-control mb-6">
                <input
                  name="date"
                  type="text"
                  className="input input-bordered"
                  defaultValue={format(date, "Pp")}
                  disabled
                />
              </div>
             
              <div className="form-control mb-6">
                <input
                  name="fName"
                  type="text"
                  placeholder="Full Name"
                  defaultValue={user?.displayName}
                  disabled
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mb-6">
                <input
                  name="phone"
                  type="text"
                  placeholder="Phone Number"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mb-6">
                <input
                  name="email"
                  type="text"
                  placeholder="Email"
                  defaultValue={user?.email}
                  disabled
                  className="input input-bordered"
                />
              </div>

              <div className="flex justify-center">
                <input
                  type="submit"
                  value="book"
                  className=" btn btn-primary w-full"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;