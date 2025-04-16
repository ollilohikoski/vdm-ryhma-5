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
        'Categories', 'New In', 'Sale', 'Women Clothing', 'Beachwear',
        'Curve', 'Home & Kitchen', 'Men Clothing', 'Kids', 'Underwear & Sleepwear',
        'Accessories', 'Beauty', 'Shoes', 'Sports', 'Plus Size',
        'Activewear', 'Maternity', 'Formal Wear', 'Jewelry', 'Bags & Purses', 'Lorem Ipsum',
        'Dolor Sit', 'Amet Consectetur', 'Adipiscing Elit', 'Sed Do Eiusmod Tempor',
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
                            {categories.map((item, index) => (
                                <div
                                    key={index}
                                    className='cursor-pointer whitespace-nowrap px-3 py-2 text-[0.81rem] font-light hover:bg-gray-200'
                                    onClick={() => setActiveCategory(item)}
                                    onMouseEnter={() => setActiveCategory(item)}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex px-2 shadow-[-7px_0px_5px_-5px_rgba(0,0,0,0.2)]'>
                        <button
                            onClick={() => scroll('left')}
                            disabled={leftDisabled}
                            className={`bg-white/80 px-2 hover:bg-white cursor-pointer font-bold ${leftDisabled ? 'opacity-50' : ''}`}>
                            ‹
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            disabled={rightDisabled}
                            className={`bg-white/80 px-2 hover:bg-white cursor-pointer font-bold ${rightDisabled ? 'opacity-50' : ''}`}>
                            ›
                        </button>
                    </div>
                </div>
                {dropdown && (
                    <div className='fixed top-full left-1/2 w-screen -translate-x-1/2 bg-white border-t border-gray-200 z-50 max-h-[70vh] flex flex-row overflow-hidden px-13'>
                        <div className='flex flex-col gap-2 mt-2 py-2 min-w-[250px] border-r border-gray-200 overflow-y-scroll'>
                            {categories.map((item, index) => (
                                <div
                                    key={index}
                                    className={`p-2 cursor-pointer text-sm font-extralight ${activeCategory === item ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                                    onClick={() => setActiveCategory(item)}
                                    onMouseEnter={() => setActiveCategory(item)}
                                >
                                    {item}
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
