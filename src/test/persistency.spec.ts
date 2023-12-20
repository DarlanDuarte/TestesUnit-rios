import { Persistency } from '../persistency';

describe(`Persistency`, () => {
  //AfterEach Jest.clearAllMocks => Limpa cada teste depois de executar ou chamar
  afterEach(() => jest.clearAllMocks());

  it(`should return undefined`, () => {
    // sut => System under Test
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it(`should call console.log once`, () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
  // Se não tivesse chamando o clearAllMocks daria  error pois estaria chamando 2 vezes e não uma
  it(`should call console.log once`, () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it(`should call console.log with "Pedido salvo com sucesso!"`, () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso!');
  });
});
