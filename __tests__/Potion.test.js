const Potion = require('../lib/Potion.js');


test('creates a health potion object', () => {
    const potion = new Potion('health');
  
    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
  });

  test('creates a random potion object', () => {
      const potion = new Potion();
      // potion name will be a string  
      expect(potion.name).toEqual(expect.any(String));
      // tests to make sure string isn't empy
      expect(potion.name.length).toBeGreaterThan(0);
      // tests to make sure potion value has a number 
      expect(potion.value).toEqual(expect.any(Number));
  });