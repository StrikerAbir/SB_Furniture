import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryProducts = () => {
    const products = useLoaderData();
    return (
        <div>
            <h2>products{ products.length }</h2>
        </div>
    );
};

export default CategoryProducts;