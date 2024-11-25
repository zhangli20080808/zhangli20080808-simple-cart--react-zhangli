import React from 'react';
import styles from './index.less';

function ProductItem(props) {
  const { productName, price, onAddToCart } = props;

  return (
    <div className={styles.productItem}>
      <div className={styles.div}></div>
      <div className={styles.bottom}>
        <div className={styles.name}>{productName}</div>
        <div className={styles.right}>
          <span className={styles.procice}>{price}</span>
          <button onClick={() => onAddToCart(id)}>加入购物车</button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
