import * as React from 'react';
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './ProductItem.component.styles';

const _renderProductImage = (props) => (
  <View style={styles.imageViewContainer}>
    <Image
      style={styles.imageView}
      source={{uri: props.image}}
    />
  </View>
);

const _renderProductName = (props) => (
  <Text numberOfLines={1} style={styles.name}>{props.name}</Text>
);

const _renderProductPrice = (props) => (
  <View style={styles.priceContainer}>
    <Text style={styles.price}>{props.price}</Text>
    {props.off !== '' && <Text style={styles.off}>{props.off}</Text>}
  </View>
);

const _renderOutOfStock = () => (
  <View style={styles.outOfStockContainer}>
    <Text style={styles.outOfStock}>Out of stock</Text>
  </View>
);

const _renderNewTag = () => (
  <Text style={styles.new}>New</Text>
);

const _renderTags = (props) => {
  if (props.out_of_stock) return _renderOutOfStock()
  else if (props.new) return _renderNewTag();
  else return null
};

const _renderFavorite = (props) => (
  <View style={styles.favorite}>
    <Icon 
      size={20} 
      name={props.isFav ? "heart" : "heart-outline"} 
      color={props.isFav ? "#FE4F65" : "#898989"}
    />
  </View>
);

const _renderHalfStar = (index) => (
  <Icon 
    key={index}
    size={12} 
    name="star-half-sharp"
    color="#FECD12"
  />
);

const _renderFullStar = (index) => (
  <Icon
    key={index}
    size={12} 
    name="star-sharp"
    color="#FECD12"
  />
);

const _renderEmptyStar = (index) => (
  <Icon 
    key={index}
    size={12} 
    name="star-outline"
    color="#91918F"
  />
);

const _renderRating = (props) => {
  component = [];
  let i = 0;
  while (i < 5) {
    if (props.rating - i === 0.5) {
      component.push(_renderHalfStar(i))
    } else if (props.rating - i >= 1) {
      component.push(_renderFullStar(i))
    } else {
      component.push(_renderEmptyStar(i))
    }
    i++;
  }

  return (
    <View style={styles.rating}>
      {component}
    </View>
  );
};

const ProductItem = (props) => (
  <View style={styles.container}>
    {_renderTags(props)}
    {_renderFavorite(props)}
    {_renderProductImage(props)}
    {_renderRating(props)}
    {_renderProductName(props)}
    {_renderProductPrice(props)}
  </View>
);

export default ProductItem;