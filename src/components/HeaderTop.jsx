import React from 'react';


const HeaderTop = () => {
    const [isYellow, setIsYellow] = React.useState(false);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setIsYellow(prev => !prev);
        }, 200);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='text-white bg-black w-full flex justify-center items-center h-8 sm:h-10 md:h-12'>
            <span className='text-white font-bold text-sm sm:text-md md:text-xl flex items-center'>
                We <span className={`inline-block mx-1 w-5 sm:w-6 md:w-7 text-center ${isYellow ? 'text-[1rem] sm:text-[1.1rem] md:text-[1.5rem]' : 'font-baseline'}`}>{isYellow ? '💛' : '🤍'}</span> Best Sellers!
            </span> 
            <span className='my-1 ml-4 sm:ml-8 md:ml-12 uppercase bg-yellow-300 px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-0.75 md:py-1 font-bold text-black text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem]'>Shop Now</span>
        </div>
    );
}

export default HeaderTop;