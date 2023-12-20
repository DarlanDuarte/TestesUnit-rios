describe('Testando alguma coisa', () => {
  it('Teste para persistency', () => {
    const number = 10;
    expect(number).toBe(10);
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
    expect(number).toBeGreaterThanOrEqual(10);
    expect(number).toBeLessThanOrEqual(10);
    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();
    expect(number).toEqual(10);
  });
});

describe(`Objects`, () => {
  it('Testando Objetos', () => {
    const person = { name: 'Darlan', age: 28 };
    const newPerson = { ...person };

    expect(newPerson).toEqual(person);
    expect(person).toHaveProperty('age');
    expect(person).not.toHaveProperty('lastName');
    expect(person).toHaveProperty('age', 28);
    expect(person.name).toBe('Darlan');
  });
});
