import React from 'react';
import '../styles/app.css';

import { Product } from './App';

interface ProductItemType {
  product: Product;
  addCart: (clickedItem: Product) => void;
}

export function ProductItem(props: ProductItemType) {
  return (
    <tr>
      <td>{props.product.category.name}</td>
      <td>{props.product.name}</td>
      <td>{props.product.price}</td>
      <td>
        <button onClick={() => props.addCart(props.product)}>+</button>
      </td>
    </tr>
  );
}
