const shadow = {
  shadowColor: '#171717',
  shadowOffset: {width: 1, height: 1},
  shadowOpacity: 0.1,
  shadowRadius: 3,
}

export default {
  container: {
    backgroundColor: '#FFFFFF',
    borderColor: '#ECECEC',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginHorizontal: 5,
    marginVertical: 5,
    ...shadow
  },
  name: {
    fontWeight: '500',
    fontSize: 16
  }
};