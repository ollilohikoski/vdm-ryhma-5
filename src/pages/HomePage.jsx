import React, { useEffect, useState } from 'react';

import Header from '../components/Header'
import PopupLayer from '../components/PopupLayer'
import SlideOut from '../components/SlideOut';
import About from '../components/About';
import ProductCategories from '../components/ProductCategories';
import SaleBanner from '../components/SaleBanner';

const Home = () => {
    const [isSlideOpen, setIsSlideOpen] = useState(false);
    const [isLeftSlideOpen, setIsLeftSlideOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(true);
    const [isPopupClosed, setIsPopupClosed] = useState(false);

    useEffect(() => {
        if (!isPopupOpen) {
            setIsSlideOpen(true);
            setIsPopupClosed(true);
        }
    }, [isPopupOpen]);

    useEffect(() => {
        if (!isSlideOpen && !isPopupOpen && isPopupClosed) {
            setIsLeftSlideOpen(true);
        }
    }, [isSlideOpen, isPopupOpen, isPopupClosed]);

    return(
    <>
        <PopupLayer isOpen={isPopupOpen} setIsOpen={setIsPopupOpen}/>
        <SlideOut isOpen={isSlideOpen} setIsOpen={setIsSlideOpen} />
        <SlideOut 
            isOpen={isLeftSlideOpen} 
            setIsOpen={setIsLeftSlideOpen} 
            isLeft={true} 
            topPosition="top-1/6" 
        />
        <Header />
        <ProductCategories />
        <SaleBanner />
        <About />
    </>
    );
}

export default Home;