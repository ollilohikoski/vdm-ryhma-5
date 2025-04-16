import React from 'react';
import { FiUser, FiHeart, FiShoppingBag, FiMenu } from 'react-icons/fi';

const IconMenu = () => {
    const icons = [
        { Icon: FiUser },
        { Icon: FiHeart },
        { Icon: FiShoppingBag },
        { Icon: FiMenu }
    ];

    return (
        <div className="flex gap-6 justify-evenly w-full sm:w-fit">
            {icons.map(({ Icon }, index) => (
                <Icon
                    key={index}
                    className="w-6 h-6 cursor-pointer hover:text-gray-600"
                />
            ))}
        </div>
    );
};

export default IconMenu;
