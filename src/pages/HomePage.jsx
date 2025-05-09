import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header'
import PopupLayer from '../components/PopupLayer'
import SlideOut from '../components/SlideOut';
import About from '../components/About';
import ProductCategories from '../components/ProductCategories';

const Home = () => {
    const [isSlideOpen, setIsSlideOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(true);

    useEffect(() => {
        if (!isPopupOpen) {
            setIsSlideOpen(true);
        }
    }, [isPopupOpen]);
        

    return(
    <>
        <PopupLayer isOpen={isPopupOpen} setIsOpen={setIsPopupOpen}/>
        <SlideOut isOpen={isSlideOpen} setIsOpen={setIsSlideOpen} />
        <Header />
        <ProductCategories />
        <Link to="/survey">
            <button className='bg-black text-white px-4 py-2 rounded'>
                Survey sivulle
            </button>
        </Link>
    </>
    );
}

export default Home;