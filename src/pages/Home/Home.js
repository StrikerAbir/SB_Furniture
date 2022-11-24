import React from 'react';
import useTitle from '../../hooks/useTitle';
import Categories from '../Categories/Categories';
import Advertise from './Advertise/Advertise';
import Banner from './Banner/Banner';
import Stats from './Stats/Stats';

const Home = () => {
    useTitle('Home')
    return (
        <div className='md:mx-0 mx-5'>
            <Banner></Banner>
            <Categories></Categories>
            <Advertise></Advertise>
            <Stats></Stats>
        </div>
    );
};

export default Home;