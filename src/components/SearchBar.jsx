import React from 'react';
import Overlay from './Overlay';

const SearchBar = () => {
    const [dropdown, setDropdown] = React.useState(false);

    return (
        <>
            <div className='w-3/4 sm:max-w-[33rem] border-black border-1 flex'>
                <input
                    onFocus={() => setDropdown(true)}
                    onBlur={() => setDropdown(false)}
                    type="text"
                    placeholder='Waste'
                    className='w-full bg-white px-4 py-2 text-xs outline-none'
                />
                <div className='bg-black px-5'></div>
                <div className={
                    `absolute mt-[2.05rem] left-1/2 -translate-x-1/2 w-9/10 md:w-4/5 bg-white max-h-60 overflow-y-auto lg:translate-x-[initial] lg:left-[initial] lg:max-w-[33rem]
      transition-all duration-200 transform p-4 flex flex-col gap-4 z-50  border-1 border-gray-200
      ${dropdown ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`
                }>
                    <div className='mt-2 text-lg text-gray-700'>Search Discovery</div>
                    <div className='flex flex-row flex-wrap gap-2'>
                        {['🔥 Bikini', '🔥 Summer Dress', '🔥 Shorts', '🔥 Phone case', 'Glowmode', 'Skirt', 'Tops', 'Earrings'].map((item, index) => (
                            <div key={index} className="p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer text-sm  font-extralight">{item}</div>
                        ))}
                    </div>
                </div>
            </div>
            {dropdown && (<Overlay />)}

        </>
    );
};

export default SearchBar;
