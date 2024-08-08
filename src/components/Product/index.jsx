import React, { useState, useEffect } from 'react';
import Header from './Header';
import Cart from './Cart';
import './product.scss';

function Product({ products }) {
    const [listCards, setListCards] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        initApp();
    }, [products]);

    const initApp = () => {
        const initialListCards = products.map(product => ({ ...product, quantity: 0, price: 0 }));
        setListCards(initialListCards);
    };

    const addToCard = (index) => {
        const newCards = [...listCards];
        newCards[index].quantity += 1;
        newCards[index].price = newCards[index].quantity * products[index].price;
        setListCards(newCards);
        reloadCard(newCards);
    };

    const changeQuantity = (index, newQuantity) => {
        const newCards = [...listCards];
        newCards[index].quantity = newQuantity;
        newCards[index].price = newQuantity * products[index].price;
        setListCards(newCards);
        reloadCard(newCards);
    };

    const reloadCard = (newCards) => {
        const total = newCards.reduce((acc, card) => acc + card.price, 0);
        const count = newCards.reduce((acc, card) => acc + card.quantity, 0);
        setTotalPrice(total);
        setQuantity(count);
        if (count === 0) {
            setIsActive(false);
        }
    };

    return (
        <div id="product">
            <div className={`container ${isActive ? 'active' : ''}`}>
                <Header quantity={quantity} setIsActive={setIsActive} />
                <div className="list">
                    {products.map((product, index) => (
                        <div className="item" key={product.id}>
                            <img src={`${product.image}`} alt={product.name} />
                            <div className="title">{product.name}</div>
                            <div className="price">{product.price.toLocaleString()}</div>
                            <button onClick={() => addToCard(index)}>Add To Card</button>
                        </div>
                    ))}
                </div>
            </div>
            <Cart
                listCards={listCards}
                totalPrice={totalPrice}
                isActive={isActive}
                setIsActive={setIsActive}
                changeQuantity={changeQuantity}
            />
        </div>
    );
}

export default Product;
