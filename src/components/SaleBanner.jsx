import React from 'react';
import './SaleBanner.css';
import SaleLogo from '../assets/sale-logo.webp';

const products = [
    { id: 1, price: 9.99, imageUrl: SaleLogo, discount: '-20%' },
    { id: 2, price: 14.99, imageUrl: SaleLogo, discount: '-15%' },
    { id: 3, price: 19.99, imageUrl: SaleLogo, discount: '-10%' },
    { id: 4, price: 24.99, imageUrl: SaleLogo, discount: '-25%' },
    { id: 5, price: 29.99, imageUrl: SaleLogo, discount: '-30%' },
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