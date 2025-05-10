import React, { useRef, useEffect, useState } from 'react';
import Overlay from './Overlay';

const CategoryMenu = () => {
    const [dropdown, setDropdown] = React.useState(false);
    const [activeCategory, setActiveCategory] = React.useState('Categories');
    const scrollContainerRef = useRef(null);
    const menuContainerRef = useRef(null);
    const [leftDisabled, setLeftDisabled] = useState(true);
    const [rightDisabled, setRightDisabled] = useState(false);

    const categories = [
        { name: 'Categories' },
        { name: 'Lapsityövoimalla tuotettu', emphasized: true },
        { name: 'Women Clothing' },
        { name: 'Nopeasti hajoava', emphasized: true },
        { name: 'Curve' },
        { name: 'Vastuuton', emphasized: true},
        { name: 'Men Clothing' },
        { name: 'Rahan hukka', emphasized: true },
        { name: 'Underwear & Sleepwear' },
        { name: 'Turhat härpäkkeet', emphasized: true },
        { name: 'Beauty' },
        { name: 'Kertakäyttöinen', emphasized: true },
        { name: 'Sports' },
        { name: 'Suoraa kaatopaikalle', emphasized: true },
        { name: 'Activewear' },
        { name: 'Huonolaatuinen', emphasized: true },
        { name: 'Formal Wear' },
        { name: 'Feikkiä', emphasized: true },
        { name: 'Bags & Purses' },
        { name: 'Shoes' },
        { name: 'Epäeettinen', emphasized: true },
        { name: 'Accessories' },
        { name: 'Ympäristölle haitallinen', emphasized: true },
        { name: 'Home & Living' },
        { name: 'Lyhytikäinen', emphasized: true },
        { name: 'Kids & Baby' },
        { name: 'Tarpeeton', emphasized: true },
        { name: 'Electronics' },
        { name: 'Ylihinnoiteltu', emphasized: true },
        { name: 'Outdoor Gear' },
    ];

    const checkScrollPosition = () => {
        const container = scrollContainerRef.current;
        if (!container) return;

        setLeftDisabled(container.scrollLeft <= 0);
        setRightDisabled(
            container.scrollLeft + container.clientWidth >= container.scrollWidth
        );
    };

    useEffect(() => {
        checkScrollPosition();
    }, []);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft += direction === 'left' ? -300 : 300;
            setTimeout(checkScrollPosition, 100);
        }
    };

    return (
        <>
            <div
                ref={menuContainerRef}
                className='relative w-full'
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={ () => setDropdown(false)}
            >
                <div className='w-full flex items-center relative'>
                    <div className='w-full overflow-x-hidden relative'>
                        <div
                            ref={scrollContainerRef}
                            className='flex gap-2 overflow-x-scroll scrollbar-hide'
                            style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none' }}
                            onScroll={checkScrollPosition}
                        >
                            {categories.map((category, index) => (
                                <div
                                    key={index}
                                    className={`cursor-pointer whitespace-nowrap px-3 py-2 text-[0.81rem] hover:bg-gray-200 ${
                                        category.emphasized ? 'font-bold text-red-600' : 'font-light'
                                    }`}
                                    onClick={() => setActiveCategory(category.name)}
                                    onMouseEnter={() => setActiveCategory(category.name)}
                                >
                                    {category.name}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex px-2 shadow-[-7px_0px_5px_-5px_rgba(0,0,0,0.2)] bg-white'>
                        <button
                            onClick={() => scroll('left')}
                            disabled={leftDisabled}
                            className={`px-2 hover:bg-gray-100 cursor-pointer font-bold ${leftDisabled ? 'opacity-30 cursor-not-allowed' : ''}`}>
                            ‹
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={rightDisabled}
                            className={`px-2 hover:bg-gray-100 cursor-pointer font-bold ${rightDisabled ? 'opacity-30 cursor-not-allowed' : ''}`}>
                            ›
                        </button>
                    </div>
                </div>
                {dropdown && (
                    <div className='fixed top-full left-1/2 w-screen -translate-x-1/2 bg-white border-t border-gray-200 z-50 max-h-[70vh] flex flex-row overflow-hidden px-13'>
                        <div className='flex flex-col gap-2 mt-2 py-2 min-w-[250px] border-r border-gray-200 overflow-y-scroll'>
                            {categories.map((category, index) => (
                                <div
                                    key={index}
                                    className={`p-2 cursor-pointer text-sm ${
                                        activeCategory === category.name ? 'bg-gray-200' : 'hover:bg-gray-100'
                                    } ${category.emphasized ? 'font-semibold text-red-700' : 'font-extralight'}`}
                                    onClick={() => setActiveCategory(category.name)}
                                    onMouseEnter={() => setActiveCategory(category.name)}
                                >
                                    {category.name}
                                </div>
                            ))}
                        </div>
                        <div className='flex-1 p-6 overflow-y-auto'>
                            <div className='mb-4'>
                                <h3 className='font-medium text-lg mb-1'>{activeCategory}</h3>
                                <div className='w-12 h-0.5 bg-black'></div>
                            </div>
                            <div className='grid grid-cols-3 gap-4'>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                                    <div key={item} className='flex flex-col items-center'>
                                        <div className='w-full aspect-square rounded-full bg-gray-100 mb-2 overflow-hidden'>

                                        </div>
                                        <span className='text-xs text-center'>Subcategory {item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex-1 p-6 overflow-y-auto'>
                            <div className='mb-4'>
                                <h3 className='font-medium text-lg mb-1'>{activeCategory}</h3>
                                <div className='w-12 h-0.5 bg-black'></div>
                            </div>
                            <div className='grid grid-cols-3 gap-4'>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                                    <div key={item} className='flex flex-col items-center'>
                                        <div className='w-full aspect-square rounded-full bg-gray-100 mb-2 overflow-hidden'>

                                        </div>
                                        <span className='text-xs text-center'>Subcategory {item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {dropdown && <Overlay />}
        </>
    );
};

export default CategoryMenu;
