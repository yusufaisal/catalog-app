import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './Header.component.styles';

const _renderBackButton = () => (
  <TouchableOpacity style={styles.backButton}>
    <Icon size={24} name="arrow-back-outline" color="#080808" />
  </TouchableOpacity>
);

const _renderFilterButton = () => (
  <TouchableOpacity style={styles.filterButton}>
    <Icon size={24} name="options-outline" color="#080808" />
  </TouchableOpacity>
);

const _renderTitle = (props) => (
  <Text style={styles.title}>{props.title}</Text>
);

const Header = (props) => (
  <View style={styles.container}>
    {_renderBackButton()}
    {_renderTitle(props)}
    {_renderFilterButton()}
  </View>
)

export default Header;