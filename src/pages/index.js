import React from 'react';
import styles from './index.less';
import ProductItem from './components/product/ProductItem';
import ShoppingCart from './components/cart/index';
import { useState } from 'react';

function App() {
  const products = [
    { id: 1, imageUrl: '', productName: '苹果', price: '¥10.99' },
    { id: 2, imageUrl: '', productName: '香蕉', price: '¥20.99' },
    { id: 3, imageUrl: '', productName: '菠', price: '¥30.99' },
    { id: 4, imageUrl: '', productName: '荔枝', price: '¥30.99' },
    { id: 5, imageUrl: '', productName: '苹果', price: '¥30.99' },
  ];
  const [cartItems, setItems] = useState([]);

  const addToCart = (name, price) => {
    const existingItemIndex = cartItems.findIndex((item) => item.name === name);

    if (existingItemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].count += 1;
      setItems(updatedItems);
    } else {
      setItems([...items, { name, price, count: 1 }]);
    }
  };
  const removeFromCart = (id) => {
    cartItems(cartItems.filter((item) => item.id !== id));
  };
  return (
    <div className={styles.app}>
      <div className={styles.topTitle}>
        <h1>购物天堂</h1>
        <ShoppingCart cartItems={cartItems} onRemoveFromCart={removeFromCart} />
      </div>
      <div className={styles.productList}>
        {products.map((product) => (
          <ProductItem key={product.id} {...product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default App;
