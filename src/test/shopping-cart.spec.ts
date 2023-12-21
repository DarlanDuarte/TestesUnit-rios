import { ShoppingCart } from '../shopping-cart';
import { Discount } from '../discount';
import { CartItem } from '../interfaces/cart-item';

const createSut = () => {
  const discontMock = createDiscontMock();
  const sut = new ShoppingCart(discontMock);
  return { sut, discontMock };
};

const createDiscontMock = () => {
  class DiscontMock extends Discount {}
  return new DiscontMock();
};

const createCardItemMock = (name: string, price: number) => {
  class CardItemMock implements CartItem {
    constructor(
      public name: string,
      public price: number,
    ) {}
  }

  return new CardItemMock(name, price);
};

const createSutWithProduct = () => {
  const { sut, discontMock } = createSut();
  const addItem1 = createCardItemMock('Camiseta', 40);
  const addItem2 = createCardItemMock('short', 20);
  sut.addItem(addItem1);
  sut.addItem(addItem2);
  return { sut, discontMock };
};

describe(`Shopping-Card`, () => {
  it(`should be an empty cart when no product is added `, () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it(`should have 2 cart items and total = 60`, () => {
    const { sut } = createSutWithProduct();
    expect(sut.items.length).toBe(2);
    expect(sut.total()).toBe(60);
    expect(sut.totalWithDicount()).toBe(60);
  });

  it(`should add Prouduct and clear cart `, () => {
    const { sut, discontMock } = createSutWithProduct();
    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it(`should remove products`, () => {
    const { sut, discontMock } = createSutWithProduct();
    expect(sut.items.length).toBe(2);
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
    sut.removeItem(0);
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it(`should call discount.calculate once when totalWithDiscount is called`, () => {
    const { sut, discontMock } = createSutWithProduct();
    const spyDiscontMock = jest.spyOn(discontMock, 'calculate');
    sut.totalWithDicount();
    expect(spyDiscontMock).toHaveBeenCalledTimes(1);
  });

  it(`should call discount.calculate with total price when totalWithDiscount is called`, () => {
    const { sut, discontMock } = createSutWithProduct();
    const spyDiscontMock = jest.spyOn(discontMock, 'calculate');
    sut.totalWithDicount();
    expect(spyDiscontMock).toHaveBeenCalledWith(sut.total());
  });
});
