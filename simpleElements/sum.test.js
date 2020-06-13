const sum = require("./sum");


test ( "1 + 2 -> 3 " , () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(1, 4)).not.toBe(2)
    expect(sum(1, 4)).not.toBeGreaterThan(6)
})

test('the data is peanut butter', done => {
    function callback(data) {
      try {
        expect(data).toBe('peanut butter');
        done();
      } catch (error) {
        done(error);
      }
    }
  
    fetchData(callback);
  });