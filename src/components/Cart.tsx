import React from 'react';
import { CartItem } from './CartItem';
import { CartContext, Product } from './App';

interface CartProps {
  removeFromCart: (id: number) => void;
}

export const Cart: React.FC<CartProps> = ({ removeFromCart }) => {
  const cartItems = React.useContext<Product[]>(CartContext);

  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>

      {cartItems.length === 0 ? <p>No items</p> : null}
      <tbody>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))}
      </tbody>
    </table>
  );
};
