import * as React from 'react';
import { View } from 'react-native';

import Header from '../../Components/Header/Header.component';
import CategoryList from '../../Components/CategoryList/CategoryList.component';
import ProductList from '../../Components/ProductList/ProductList.component';

import styles from './Catalog.component.styles';

import {
  getCategory,
  getProduct
} from '../../Utils/Network.utils';

const _renderHeader = () => (
  <Header title={'Shoes'}/>
);

const _renderCategoryList = (state) => (
  <CategoryList
    items={state.categories}
  />
);

const _renderProductList = (state) => (
  <ProductList
    products={state.products}
  />
)

const _getCategory = async (setState) => {
  try {
    const categories = await getCategory();
    const products = await getProduct();

    setState(prevState => ({
      ...prevState,
      products, 
      categories: categories
    }))
  } catch {
    // do nothing
  }
}
const useNetworkCall = (setState) => {
  React.useEffect(() => {
    _getCategory(setState);
  }, []);
};

const Catalog = () => {
  const [state, setState] = React.useState({
    products: [],
    categories: []
  })

  useNetworkCall(setState);

  return (
    <View style={styles.container}>
      {_renderHeader()}
      {_renderCategoryList(state)}
      {_renderProductList(state)}
    </View>
  )
}

export default Catalog