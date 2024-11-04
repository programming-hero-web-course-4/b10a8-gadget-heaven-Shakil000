import React from 'react';
import Banner from '../components/Banner';
import Heading from '../components/Heading';
import { useLoaderData } from 'react-router-dom';
import Categories from '../components/Categories';

const Home = () => {

    const categories = useLoaderData();
    return (
        <div>
            <Banner></Banner>

            <Heading title={'Explore Cutting-Edge Gadgets'}></Heading>
           
            <Categories categories={categories}></Categories>

        </div>
    );
};

export default Home;