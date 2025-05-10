import React, { useRef, useEffect, useState } from 'react';

const CategoryMenu = () => {
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
            </div>
        </>
    );
};

export default CategoryMenu;
