import React, { useContext } from 'react';
import useTitle from '../../../hooks/useTitle';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AuthContext } from '../../../authProvider/AuthProvider';
import BookingModal from './BookingModal/BookingModal';
const ProductDetails = () => {
    const {user}= useContext(AuthContext);
    const data = useLoaderData();
    console.log(data);
    const {image,title,location,resale_price,original_price,years_of_use,product_condition,post_time,seller_name,seller_verified,seller_phone,seller_email,description } = data;
    useTitle(title);
    return (
      <div>
        <div className="mt-16 mb-10">
          <section>
            <div className="text-center mb-10">
              <p className="text-2xl font-bold text-primary">Product Details</p>
              <h2 className="text-5xl font-semibold">{title} </h2>
            </div>
            <div>
              <div className="card lg:card-side bg-base-100 mx-3 rounded-none">
                <PhotoProvider>
                  <PhotoView src={image}>
                    <img className="lg:w-1/2" src={image} alt="" />
                  </PhotoView>
                </PhotoProvider>
                <div className="flex justify-center items-center lg:w-1/2">
                  <div className="card-body">
                    <h2 className="card-title">Title: {title}</h2>
                    <div>
                      <p>{description}</p>
                    </div>
                    <div className="">
                      <p classname="mb-2">
                        <span className="font-bold">Location:</span> {location}
                      </p>
                      <p classname="mb-2">
                        <span className="font-bold">Resale price:</span> $
                        {resale_price}
                      </p>
                      <p classname="mb-2">
                        <span className="font-bold">Original price:</span> $
                        {original_price}
                      </p>
                      <p classname="mb-2">
                        <span className="font-bold">Years of use:</span>{" "}
                        {years_of_use}
                      </p>
                      <p classname="mb-2">
                        <span className="font-bold">Product condition:</span>{" "}
                        {product_condition}
                      </p>
                      <p classname="mb-2">
                        <span className="font-bold">Post time:</span>{" "}
                        {post_time}
                      </p>
                      <p classname="mb-2">
                        <span className="font-bold">Seller name:</span>{" "}
                        {seller_name}
                      </p>
                      <p classname="mb-2">
                        <span className="font-bold">Seller phone:</span>{" "}
                        {seller_phone}
                      </p>
                      <p classname="mb-2">
                        <span className="font-bold">Seller email:</span>{" "}
                        {seller_email}
                      </p>
                      <div className="my-4">
                        <label
                          disabled={!user ? true : false}
                          htmlFor="booking-modal"
                          className="text-white btn btn-primary bg-gradient-to-r from-primary to-secondary"
                        >
                          {user ? "BOOK NOW" : "PLEASE LOGIN FIRST"}
                        </label>
                        <BookingModal
                                                data={data}
                                                key={data._id}
                        ></BookingModal>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
};

export default ProductDetails;