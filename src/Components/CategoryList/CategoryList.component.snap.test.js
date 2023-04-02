import React from 'react';
import renderer from 'react-test-renderer';

import CategoryList from './CategoryList.component';

jest
  .mock('../CategoyItem/CategoyItem.component', () => 'CategoryItem');

describe('CategoryList Component', () => {
  it('should render category list properly', () => {
    const items = [
      {
          "id": "11",
          "name": "T-Shirts"
      },{
          "id": "15",
          "name": "Women Clothing"
      },{
          "id": "13",
          "name": "Sport Shoes"
      }
    ]
    const tree = renderer
      .create(<CategoryList items={items}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});