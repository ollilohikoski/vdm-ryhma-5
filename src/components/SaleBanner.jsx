import React from 'react';
import './SaleBanner.css';
import SaleLogo from '../assets/sale-logo.webp';
import sale1 from '../assets/sale/sale1.png';
import sale2 from '../assets/sale/sale2.png';
import sale3 from '../assets/sale/sale3.png';
import sale4 from '../assets/sale/sale4.png';
import sale5 from '../assets/sale/sale5.png';

const products = [
    { id: 1, price: 9.99, imageUrl: sale1, discount: '-20%' },
    { id: 2, price: 14.99, imageUrl: sale2, discount: '-15%' },
    { id: 3, price: 19.99, imageUrl: sale3, discount: '-10%' },
    { id: 4, price: 24.99, imageUrl: sale4, discount: '-25%' },
    { id: 5, price: 29.99, imageUrl: sale5, discount: '-30%' },
];

const SaleBanner = () => {
    return (
        <div className="sale-banner">
            <div className="promo-banner">
                <div className="header">
                    <div className="logo-container">
                        <a href="#shop" className="logo-link">
                            <img 
                                src={SaleLogo} 
                                alt="Sale Logo" 
                                className="logo-image"
                            />
                        </a>
                    </div>
                    <div className="view-more">
                        <span className="link-text">View more</span>
                        <span className="arrow-icon">→</span>
                    </div>
                </div>

                <div className="product-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="image-wrapper">
                                <img
                                    src={product.imageUrl}
                                    alt="Product"
                                    className="product-image"
                                />
                                <div className="discount-badge">{product.discount}</div>
                            </div>
                            <div className="product-info">
                                <div className="price-container">
                                    <span className="current-price">${product.price.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SaleBanner;