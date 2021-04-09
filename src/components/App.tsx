import React from 'react';
import axios from 'axios';

import '../styles/app.css';
import NavBar from './NavBar';
import { Products } from './Products';
import { Cart } from './Cart';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const ProductsContext = React.createContext<Product[]>([]);
export const CartContext = React.createContext<Product[]>([]);

export interface Product {
  id: number;
  name: string;
  category: Category;
  price: number;
}

interface Category {
  id: string;
  name: string;
}

// Hello everyone! I am done this not simple test

export const App = () => {
  const [allProducts, setAllProducts] = React.useState<Product[]>([]);
  const [cartItems, setCartItems] = React.useState([] as Product[]);

  React.useEffect(() => {
    axios.get('http://localhost:3001/api/products/').then((res) => setAllProducts(res.data));
  }, []);

  const handleAddToCart = (clickedItem: Product) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) => (item.id === clickedItem.id ? { ...item, amount: item } : item));
      }
      return [...prev, { ...clickedItem }];
    });
  };
  const handleRemoveFromCart = (id: number) => {
    let filteredItem = cartItems.filter((f) => f.id !== id);
    setCartItems(filteredItem);

  };

  const sortByCategoryClick = (key: 'category') => {
    const sortPrice = [...allProducts];
    let sortedPrice = sortPrice.sort((a: any, b: any): any => {
      return a[key] > b[key] ? 1 : -1;
    });
    setAllProducts(sortedPrice);
  };

  const sortByPriceClick = (key: 'price') => {
    const sortPrice = [...allProducts];
    let sortedPrice = sortPrice.sort((a: any, b: any): any => {
      return a[key] > b[key] ? 1 : -1;
    });
    setAllProducts(sortedPrice);
  };

  return (
    <ProductsContext.Provider value={allProducts}>
      <CartContext.Provider value={cartItems}>
        <Router>
          <div className="main">
            <NavBar />
            <Switch>
              <Route
                exact
                path={'/'}
                render={() => (
                  <Products
                    sortByCategoryClick={sortByCategoryClick}
                    sortByPriceClick={sortByPriceClick}
                    addCart={handleAddToCart}
                  />
                )}
              />
              <Route path={'/cart'} render={() => <Cart removeFromCart={handleRemoveFromCart} />} />
            </Switch>
          </div>
        </Router>
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
};
