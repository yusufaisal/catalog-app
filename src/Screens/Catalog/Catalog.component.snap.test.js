import React from 'react';
import renderer from 'react-test-renderer';

jest
  .mock('../../Components/Header/Header.component', () => 'Header')
  .mock('../../Components/CategoryList/CategoryList.component', () => 'CategoryList')
  .mock('../../Components/ProductList/ProductList.component', () => 'ProductList')
  .mock('../../Utils/Network.utils', () => ({
    getCategory: jest.fn(),
    getProduct: jest.fn()
  }));

import Catalog from './Catalog.component';
import {
  getCategory,
  getProduct
} from '../../Utils/Network.utils';

describe('Catalog screen', () =>  {

  const categoryResp = [];
  const productResp = [];

  beforeEach(() => {
    jest.useFakeTimers();
    getCategory.mockReturnValueOnce(categoryResp);
    getProduct.mockReturnValueOnce(productResp);
  });

  it('should able to render screen properly', async () => {
    jest.runAllTimers();
    const tree = await renderer
      .create(<Catalog/>)
      .toJSON();
    jest.runAllTimers();

    expect(tree).toMatchSnapshot();
  })
})
