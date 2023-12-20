import { Product } from '../product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe(`Product`, () => {
  afterEach(() => jest.clearAllMocks());

  it(`should return property`, () => {
    const sut = createSut('Camiseta', 49.91);
    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut.price).toBeCloseTo(49.91);
  });
});
