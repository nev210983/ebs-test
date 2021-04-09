import React from 'react';
import '../styles/app.css';
import { ProductItem } from './ProductItem';

import { Product, ProductsContext } from './App';

interface ProductsType {
  sortByCategoryClick: (key: 'category') => void;
  sortByPriceClick: (key: 'price') => void;
  addCart: (clickedItem: Product) => void;
}

export const Products: React.FC<ProductsType> = ({ sortByCategoryClick, sortByPriceClick, addCart }) => {
  const allProducts = React.useContext<Product[]>(ProductsContext);
  const [selectPriceArr, setSelectPriceArr] = React.useState<boolean>(false);
  const [selectCategoryArr, setSelectCategoryArr] = React.useState<boolean>(false);

  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th
            className="item-hover"
            onClick={() => {
              sortByCategoryClick('category');
              setSelectCategoryArr(!selectCategoryArr);
            }}
          >
            Category
            <span className={`item-hover ${selectCategoryArr ? 'reverse' : ''}`}>^</span>
          </th>
          <th>Name</th>
          <th
            className="item-hover"
            onClick={() => {
              sortByPriceClick('price');
              setSelectPriceArr(!selectPriceArr);
            }}
          >
            Price
            <span className={`item-hover ${selectPriceArr ? 'reverse' : ''}`}>^</span>
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {allProducts.map((product) => (
          <ProductItem key={product.id} product={product} addCart={addCart} />
        ))}
      </tbody>
    </table>
  );
};
