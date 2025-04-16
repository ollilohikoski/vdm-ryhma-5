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
        <div className='text-white bg-black w-full flex justify-center items-center'>
        <span className='text-white text-base flex items-center'>
            We <span className={`inline-block mx-1 w-7 text-center ${isYellow ? 'text-[1.2rem]' : 'font-baseline'}`}>{isYellow ? '💛' : '🤍'}</span> Best Sellers!
        </span> 
        <span className='my-1 ml-12 uppercase bg-yellow-300 px-3 py-1 font-bold text-black text-[0.6rem]'>Shop Now</span>
    </div>
    );
}

export default HeaderTop;