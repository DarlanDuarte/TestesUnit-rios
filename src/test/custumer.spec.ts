import { IndividualCustomer, EnterpriseCustomer } from '../customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (name: string, cnpj: string) => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe(`Individual Customer`, () => {
  it(`should have firstName, lastName and cpf`, () => {
    const sut = createIndividualCustomer('Darlan', 'Duarte', '123-456-789');
    expect(sut).toHaveProperty('firstName', 'Darlan');
    expect(sut).toHaveProperty('lastName', 'Duarte');
    expect(sut).toHaveProperty('cpf', '123-456-789');
  });

  it(`should have methods to getName and getIdn for individual customers`, () => {
    const sut = createIndividualCustomer('Darlan', 'Duarte', '123-456-789');
    expect(sut.getName()).toBe('Darlan Duarte');
    expect(sut.getIDN()).toBe('123-456-789');
  });
});

describe(`Enterprise Customer`, () => {
  it(`should have name and cnpj`, () => {
    const sut = createEnterpriseCustomer('Darlan', '123-456');
    expect(sut).toHaveProperty('name', 'Darlan');
    expect(sut).toHaveProperty('cnpj', '123-456');
  });

  it(`should have methods to getName and getIdn for enterprise customers`, () => {
    const sut = createEnterpriseCustomer('Darlan', '123-456');
    expect(sut.getName()).toBe('Darlan');
    expect(sut.getIDN()).toBe('123-456');
  });
});
