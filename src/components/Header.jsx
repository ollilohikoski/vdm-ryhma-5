import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import IconMenu from './IconMenu';
import CategoryMenu from './CategoryMenu';
import HeaderTop from './HeaderTop';

const Header = () => {
    const [isVisible, setIsVisible] = React.useState(true);
    const [lastScrollY, setLastScrollY] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > window.innerHeight) {
                setIsVisible(false);
            } else if (currentScrollY > 300) {
                setIsVisible(currentScrollY < lastScrollY);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);
    
    return (
        <>
        <header className={`fixed top-0 w-full shadow-md z-20 bg-white transition-transform duration-300 ${
            isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}>
            <HeaderTop />
            <div className='flex flex-col sm:px-4 md:px-12'>
                <div className='text-black py-4 w-full flex justify-between items-center flex-col sm:flex-row sm:gap-8 gap-4'>
                    <Logo />
                    <SearchBar />
                    <IconMenu />
                </div>
                <CategoryMenu />
            </div>
        </header>
        <div className='mt-66 sm:mt-44 lg:mt-48' />
        </>
    );
};

export default Header;
