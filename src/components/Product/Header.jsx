import React from 'react';

function Header({ quantity, setIsActive }) {
    return (
        <header>
            <h1>Your Shopping Cart</h1>
            {quantity > 0 && (
                <div className="shopping" onClick={() => setIsActive(true)}>
                    <img src="/assets/products/shopping.svg" alt="shopping" />
                    <span className="quantity">{quantity}</span>
                </div>
            )}
        </header>
    );
}

export default Header;
