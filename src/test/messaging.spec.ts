import { Messaging } from '../messaging';

const createSut = () => {
  return new Messaging();
};

describe(`Messaging`, () => {
  afterEach(() => jest.clearAllMocks());
});
