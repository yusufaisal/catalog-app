import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header.component';

jest
  .mock('react-native-vector-icons/Ionicons', () => 'Icon');
  
describe('Header Component', () => {
  it('should render Header properly', () => {
    const tree = renderer
      .create(<Header title={'Shoes'}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});