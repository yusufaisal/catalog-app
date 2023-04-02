import * as React from 'react';
import { View, ScrollView } from 'react-native';

import CategoryItem from '../CategoyItem/CategoyItem.component';

import styles from './CategoryList.component.styles';

const _renderCategoryItems = (props) => {
  return props.items.map(item => (
    <CategoryItem name={item.name} key={item.id}/>
  ))
};

const CategoryList = (props) => {

  return (
    <View>
      <ScrollView 
        horizontal 
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <View style={styles.container}>
          {_renderCategoryItems(props)}
        </View>
      </ScrollView>
    </View>
    
  )
};

export default CategoryList;