const sum = require("./sum");


test ( "1 + 2 -> 3 " , () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(1, 4)).not.toBe(2)
    expect(sum(1, 4)).not.toBeGreaterThan(6)
})