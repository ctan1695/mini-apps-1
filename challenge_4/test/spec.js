/*
4 tests:

1) Horizontal win
2) Vertical win
3) Diagonal win
4) Tie

*/

var assert = require('assert');
describe('Array', function () {
  it('should return -1 when the value is not present', function () {
    assert.equal([1, 2, 3].indexOf(4), -1);
  })
})