import { NODE_ENV } from '..';

describe('environments', () => {
  describe('NODE_ENV', () => {
    it('should be test', () => {
      expect(NODE_ENV).toEqual('test');
    });
  });
});
