const shadow = {
  shadowColor: '#171717',
  shadowOffset: {width: 1, height: 1},
  shadowOpacity: 0.1,
  shadowRadius: 3,
}

export default {
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    borderColor: '#ECECEC',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginHorizontal: 5,
    marginVertical: 5,
    ...shadow
  },
  imageViewContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    fontWeight: '500',
    fontSize: 14,
    color: '#757479'
  },
  imageView: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5
  },
  price: {
    color: '#020202',
    fontSize: 18,
    fontWeight: '700',
  },
  off: {
    color: '#6D6B9C',
    fontWeight: '600',
  },
  outOfStockContainer: {
    position: 'absolute',
    left: 12,
    top: 12,
    alignSelf: 'flex-start',
    backgroundColor: '#FE4C4C',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10
  },
  outOfStock: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 12
  },
  new: {
    position: 'absolute',
    left: 12,
    top: 12,
    fontWeight: '500',
    fontSize: 16
  },
  favorite: {
    position: 'absolute',
    right: 12,
    top: 12,
  },
  rating: {
    flexDirection: 'row'
  }
};