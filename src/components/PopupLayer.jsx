import React from "react";
import topBow from "../assets/top-bow.png";
import clickHand from "../assets/click-hand.png";

const PopupLayer = ({isOpen, setIsOpen}) => {

    if (!isOpen) return null;
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-screen z-40 flex flex-col justify-center animate-fadeInPopup opacity-0 items-center pointer-events-none">
                <img src={topBow} alt="coupon-new-user-header" className="w-full max-w-sm z-50" />
                <div
                    className="bg-white text-center shadow-lg rounded-lg overflow-hidden max-w-sm w-full pointer-events-auto -mt-4 z-50"
                >
                    <div className="relative mb-4 flex items-center justify-center py-3" style={{ background: "linear-gradient(179deg,#ffe2cc 0.47%,#fff 99.51%)", width: "100%" }}>
                        <h2 className="text-[#a63e00] font-extrabold text-xl">Special Deals Just for You</h2>
                        <button className="absolute right-4 top-4" onClick={() => setIsOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    
                    <div className="px-4">
                        <ul className="px-4">
                            <li>
                                <div className="relative">
                                    <div className="absolute -top-1 -left-1 bg-[#e5402c] text-white text-xs py-0.5 px-2 z-10">
                                        New user only
                                    </div>
                                    
                                    <div className="relative bg-[#fff6f3] rounded-xl p-4 shadow-sm">
                                        <main>
                                            <ul className="flex justify-between">
                                                <li>
                                                    <div className="flex items-end gap-1 justify-center mt-1">
                                                        <div className="flex flex-col gap-3">
                                                            <div className="flex flex-row items-end">
                                                                <div className="text-[#e5402c] font-bold text-3xl leading-none">50</div>
                                                                <div className="text-[#e5402c] font-bold text-xl leading-none">% OFF</div>
                                                            </div>
                                                            <div className="text-[#e5402c] text-xs">For orders over 5€</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="flex flex-col-reverse">
                                                    <div className="text-xs text-[#e5402c]">
                                                        <span>Expires in 2 day(s)</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </main>
                                        
                                        <div className="my-2">
                                            <div className="border-t border-dashed border-[#FFE2CF]"></div>
                                        </div>
                                        
                                        <footer>
                                            <ul className="text-xs text-left text-[#e5402c]">
                                                <li>Applies to Select Products</li>
                                            </ul>
                                        </footer>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200 px-4 pb-6">
                        <button className="bg-black text-white py-3 px-14 rounded-full font-medium" onClick={() => alert("You must be logged in to collect coupons!")} >
                            Collect All
                        </button>
                    
                        <img
                            src={clickHand}
                            className="absolute w-20 h-20 ml-55 -mt-5 animate-clickhand"
                        />
                    </div>
                </div>
                <p className="text-xs text-white mt-3 z-30">Coupons confirmed after login</p>
            </div>
            <div className="fixed z-30 top-0 left-0 w-full h-screen opacity-0 bg-black pointer-events-none animate-fadeInBackground"/>
        </>
    )
}

export default PopupLayer;