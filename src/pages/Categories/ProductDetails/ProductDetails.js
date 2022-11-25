import React from 'react';
import useTitle from '../../../hooks/useTitle';
import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
const ProductDetails = () => {
    const data = useLoaderData();
    console.log(data);
    const {image,title,location,resale_price,original_price,years_of_use,product_condition,post_time,seller_name,seller_verified,seller_phone,seller_email,description } = data;
    useTitle("Categories");
    return (
      <div>
        <div className="mt-16 mb-10">
          <section>
            <div className="text-center mb-10">
              <p className="text-2xl font-bold text-green-500">Product Details</p>
              <h2 className="text-5xl font-semibold">{title} </h2>
            </div>
            <div>
              <div className="card lg:card-side bg-base-100 mx-3 rounded-none">
                <PhotoProvider>
                  <PhotoView src={image}>
                    <img className='lg:w-1/2' src={image} alt="" />
                  </PhotoView>
                </PhotoProvider>
                <div className="flex justify-center items-center lg:w-1/2">
                  <div className="card-body">
                    <h2 className="card-title">Title: {title}</h2>
                    <div>
                      <p>{description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xl font-bold">
                        {/* Price: <span className="text-green-500">${price}</span> */}
                      </p>
                      <div className="flex items-center">
                        {/* <p className="mr-1 font-semibold">Rating: {rating}</p> */}
                        {/* <FaStar className="text-yellow-500"></FaStar> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>

          </section>
        </div>
      </div>
    );
};

export default ProductDetails;