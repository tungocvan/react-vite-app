import React from 'react';

function Cart({ listCards, totalPrice, isActive, setIsActive, changeQuantity }) {
    return (
        <>
            {listCards.length > 0 && (
                <div className={`card ${isActive ? 'active' : ''}`}>
                    <h1>Cart</h1>
                    <ul className="listCard">
                        {listCards.map((card, index) => (
                            card.quantity > 0 && (
                                <li key={index}>
                                    <div><img src={`${card.image}`} alt={card.name} /></div>
                                    <div>{card.name}</div>
                                    <div>{card.price.toLocaleString()}</div>
                                    <div>
                                        <button onClick={() => changeQuantity(index, card.quantity - 1)}>-</button>
                                        <div className="count">{card.quantity}</div>
                                        <button onClick={() => changeQuantity(index, card.quantity + 1)}>+</button>
                                    </div>
                                </li>
                            )
                        ))}
                    </ul>
                    <div className="checkOut">
                        <div className="total">{totalPrice.toLocaleString()}</div>
                        <div className="closeShopping" onClick={() => setIsActive(false)}>Close</div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Cart;
