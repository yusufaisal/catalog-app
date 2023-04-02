import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './CategoyItem.component.styles';

const _renderName = (props) => (
  <Text style={styles.name}>{props.name}</Text>
);

const CategoyItem = (props) => (
  <TouchableOpacity>
    <View style={styles.container}>
      {_renderName(props)}
    </View>
  </TouchableOpacity>
);

export default CategoyItem;