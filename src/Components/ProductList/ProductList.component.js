import * as React from 'react';
import { View, FlatList, ScrollView } from 'react-native';

import ProductItem from '../ProductItem/ProductItem.component';

import styles from './ProductList.component.styles';

const _renderProductItem = ({ item }) => (
  <ProductItem {...item}/>
);

const _renderList = (props) => (
  <FlatList
    data={props.products}
    renderItem={_renderProductItem}
    numColumns={2}
    keyExtractor={(item, index) => item.id.toString()}
    showsVerticalScrollIndicator={false}
  />
)

const ProductList = (props) => (
  <View style={styles.container}>
    {_renderList(props)}
  </View>
);

export default ProductList;