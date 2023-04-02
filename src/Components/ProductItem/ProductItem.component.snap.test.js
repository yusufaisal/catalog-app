import React from 'react';
import renderer from 'react-test-renderer';

import ProductItem from './ProductItem.component';

jest
  .mock('react-native-vector-icons/Ionicons', () => 'Icon');
  
describe('ProductItem Component', () => {
  const product = {
    "id": "1",
    "image": "https://fe.dev.dxtr.asia/storage/products/Product_07.png",
    "images": [
        "https://fe.dev.dxtr.asia/storage/products/Product_07.png",
        "https://fe.dev.dxtr.asia/storage/products/Product_02.png",
        "https://fe.dev.dxtr.asia/storage/products/Product_06.png"
    ],
    "name": "Pumma Runing Shoes",
    "price": "$350",
    "off": "20% Off",
    "rating": 4,
    "new": true,
    "isFav": true,
    "out_of_stock": false,
    "reviewCount": 150,
    "sizes": [
        6,
        7,
        8.5,
        32,
        36
    ],
    "description": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
  }

  it('should render ProductItem properly with new tag', () => {
    const tree = renderer
      .create(<ProductItem {...product}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render ProductItem properly with out of stock tag', () => {
    const tree = renderer
      .create(<ProductItem {...product} rating={3.5} out_of_stock={true}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render ProductItem properly without tag', () => {
    const tree = renderer
      .create(<ProductItem {...product} isFav={false} new={false}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});