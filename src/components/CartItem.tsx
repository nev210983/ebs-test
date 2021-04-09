import React from 'react';
import { Product } from './App';

interface CartItemProps {
  item: Product;
  removeFromCart: (id: number) => void;
}

export const CartItem: React.FC<CartItemProps> = ({ item, removeFromCart }) => {
  return (
    <tr>
      <td>{item.category.name}</td>
      <td>{item.name}</td>
      <td>1</td>
      <td>{item.price}</td>
      <td>
        <button onClick={() => removeFromCart(item.id)}>-</button>
      </td>
    </tr>
  );
};
