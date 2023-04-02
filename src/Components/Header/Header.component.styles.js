import { StyleSheet } from 'react-native';

const shadow = {
  shadowColor: '#171717',
  shadowOffset: {width: 1, height: 1},
  shadowOpacity: 0.1,
  shadowRadius: 3,
};

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 125,
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#F5F5F5',
    alignItems: 'flex-end'
  },
  title: {
    fontSize: 24,
    color: '#110F2B',
    fontWeight: 'bold',
    paddingBottom: 4
  },
  backButton: {
    flex: 0,
    height: 42,
    width: 42,
    marginRight: 20,
    borderRadius: 21,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    ...shadow
  },
  filterButton: {
    position: 'absolute',
    height: 42,
    width: 42,
    right: 0,
    bottom: 20,
    marginRight: 20,
    borderRadius: 21,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    ...shadow
  }
});