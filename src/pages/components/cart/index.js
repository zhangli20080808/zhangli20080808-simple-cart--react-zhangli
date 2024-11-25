import React, { useState } from 'react';
import styles from './index.less';

function ShoppingCart({ cartItems, onRemoveFromCart }) {
  const totalCost = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.count,
      0,
    );
  };
  return (
    <div className={styles.cart}>
      <button className={styles.button}>
        <div className={styles.title}>购物车</div>
        <div className={styles.content}>
          <ul>
            {items.map((item) => (
              <li key={item.name}>
                {item.name}: {item.count}件 - 总价: {item.price * item.count}
                <button onClick={() => onRemoveFromCart(item.id)}>删除</button>
              </li>
            ))}
          </ul>
          <p>Total Cost: {totalCost()}</p>
          <button onClick={() => alert('总金额是 ' + totalCost())}>购买</button>
        </div>
      </button>
    </div>
  );
}

export default ShoppingCart;
