import React from 'react';
import renderer from 'react-test-renderer';

import CategoyItem from './CategoyItem.component';

describe('CategoyItem Component', () => {
  it('should render category item properly', () => {
    const item = {
      "id": "11",
      "name": "T-Shirts"
    }
    const tree = renderer
      .create(<CategoyItem name={item.name} key={item.id}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});