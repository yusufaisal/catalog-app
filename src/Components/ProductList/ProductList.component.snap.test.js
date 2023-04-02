import React from 'react';
import renderer from 'react-test-renderer';

import ProductList from './ProductList.component';

jest
  .mock('../ProductItem/ProductItem.component', () => 'ProductItem');
  
describe('ProductList Component', () => {
  const products = [{
    "id": "1",
    "image": "https://fe.dev.dxtr.asia/storage/products/Product_07.png",
    "name": "Pumma Runing Shoes",
    "price": "$350",
    "off": "20% Off",
    "rating": 4,
    "new": true,
    "isFav": true,
    "out_of_stock": false,
    "reviewCount": 150,
  }, {
    "id": "2",
    "image": "https://fe.dev.dxtr.asia/storage/products/Product_01.png",
    "name": "Heels Sandals",
    "price": "$450",
    "off": "",
    "rating": 4.5,
    "new": false,
    "isFav": false,
    "out_of_stock": true,
  }]

  it('should render ProductItem properly', () => {
    const tree = renderer
      .create(<ProductList products={products}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});