import React from 'react';

import { Link } from 'react-router-dom';
const CategoryCard = ({ category }) => {
    const {image, title} = category;
    return (
      <div className="card card-compact  bg-base-100 rounded-none border-b-2">
        <PhotoProvider>
          <PhotoView src={image}>
            <img src={image} alt="" />
          </PhotoView>
        </PhotoProvider>

        <div className="card-body">
          <div className="flex items-center justify-between">
            <h2 className="card-title">{title}</h2>
            
          </div>
          <div className="card-actions items-center">
           
            <Link
              to={`/serviceDetails/}`}
              className="btn bg-green-500 hover:bg-green-600 border-none"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    );
};

export default CategoryCard;