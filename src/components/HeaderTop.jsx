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
        <div className='text-white bg-black w-full flex justify-center items-center h-7 lg:h-12'>
            <span className='text-white font-bold text-sm sm:text-lg lg:text-2xl flex items-center tracking-widest'>
                We <span className={`inline-block mx-1 w-5 sm:w-6 lg:w-8 text-center ${isYellow ? 'text-[1rem] sm:text-[1.2rem] lg:text-[1.7rem]' : 'text-[1.1rem] sm:text-[1.3rem] lg:text-[1.8rem]'}`}>{isYellow ? '💛' : '🤍'}</span> Best Sellers!
            </span> 
            <span className='my-1 ml-4 sm:ml-8 lg:ml-12 uppercase bg-yellow-300 px-3 sm:px-3.5 lg:px-4 py-1.5 sm:py-0.75 lg:py-1.5 font-bold text-black text-[0.5rem] sm:text-[0.55rem] lg:text-[0.8rem] tracking-wider'>Shop Now</span>
        </div>
    );
}

export default HeaderTop;