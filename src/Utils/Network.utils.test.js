import * as React from 'react';
import axios from 'axios';
 
import {
  getCategory,
  getProduct
} from './Network.utils';

jest.mock('axios');

describe('Network utils unit test', () => {
  describe('#getCategory', () => {
    it('should be able to return categories response data', async () => {
      const responseData = [
        { id: 1, name: 'shoes' },
        { id: 2, name: 't-shirt' },
        { id: 3, name: 'bag' }
      ];
      axios.get.mockResolvedValueOnce({ data: responseData });

      const data = await getCategory();

      expect(data).toEqual(responseData);
    });

    it('should be able to catch error', async () => {
      axios.get.mockRejectedValueOnce({ code: 'generalError' });

      try {
        await getCategory();
      } catch (error) {
        expect(error.code).toEqual('generalError');
      }
    });
  });

  describe('#getProduct', () => {
    it('should be able to return products response data', async () => {
      const responseData = [
        { id: 1, name: 'Nike Dunk', image: '/url/image/product_image.jpg'},
        { id: 2, name: 'Air Jordan', image: '/url/image/product_image.jpg'},
        { id: 3, name: 'Air Force 1', image: '/url/image/product_image.jpg'}
      ];
      axios.get.mockResolvedValueOnce({ data: responseData });

      const data = await getProduct();

      expect(data).toEqual(responseData);
    });

    it('should be able to throw error', async () => {
      axios.get.mockRejectedValueOnce({ code: 'generalError' });

      try {
        await getProduct();
      } catch (error) {
        expect(error.code).toEqual('generalError');
      }
    });
  });
});