import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header'
import PopupLayer from '../components/PopupLayer'
import SlideOut from '../components/SlideOut';

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
        <div className='max-w-4xl w-full mx-auto flex gap-8 mt-58 sm:mt-40'>
            <h1>Home Page</h1>
            <Link to="/survey">
                <button className='bg-black text-white px-4 py-2 rounded'>
                    Survey sivulle
                </button>
            </Link>
        </div>
    </>
    );
}

export default Home;