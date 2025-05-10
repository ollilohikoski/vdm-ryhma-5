import salePicture from '../assets/sale-picture.webp';

const SlideOut = ({ isOpen, setIsOpen, isLeft = false, topPosition = 'top-2/5' }) => {
    return (
        <div
            className={`fixed ${topPosition} ${isLeft ? 'left-0' : 'right-0'} z-50 flex transition-transform duration-300 ${
                isOpen ? 'translate-x-0' : isLeft ? '-translate-x-full' : 'translate-x-full'
            }`}
        >
            <div className={`flex h-fit w-fit ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="bg-black w-10 relative flex flex-col justify-center items-center">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-0 left-0 right-0 p-1.5 text-white hover:opacity-75"
                    >
                        ×
                    </button>
                    <span className="whitespace-nowrap transform -rotate-90 text-white text-md font-bold tracking-widest uppercase">
                        New Users Only
                    </span>
                </div>

                <div className="bg-pink-100 flex flex-col justify-between w-full">
                    <img
                        src={salePicture}
                        alt="Promo"
                        className="w-full h-full object-cover mb-4"
                    />

                    <div className='space-y-6 px-5 pb-6'>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="ENTER YOUR EMAIL ADDRESS"
                                className="w-full px-4 py-1.5 border text-gray-400 bg-white border-black text-center italic font-semibold tracking-widest text-sm sm:text-base"
                            />

                            <button
                                className="w-full sm:flex-1 bg-yellow-500 text-black px-2 py-2 border border-black font-semibold uppercase tracking-widest text-sm sm:text-base"
                                onClick={() => setIsOpen(false)}
                            >
                                Register
                            </button>
                        </div>

                        <div className="space-y-1 text-xs sm:text-sm text-gray-800">
                            <div className="flex items-start gap-2">
                                <input type="checkbox" className="mt-0.5" />
                                <span>
                                    I agree to the Privacy & Cookie Policy and
                                    acknowledge that I have read the Terms &
                                    Conditions.
                                </span>
                            </div>
                            <div className="flex items-start gap-2">
                                <input type="checkbox" className="mt-0.5" />
                                <span>
                                    I'd like to receive exclusive offers and
                                    news by email.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlideOut;