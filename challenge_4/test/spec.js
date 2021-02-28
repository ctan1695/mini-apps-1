/*
4 tests:

1) Horizontal win
2) Vertical win
3) Diagonal win
4) Tie

*/

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
describe('Win Helper Functions', function () {
  var board = [];
  //Winner Helper Functions
  var checkHorizontalWin = function (player) {
    // var board = this.state.board;
    var winner = false;

    for (var r = 0 ; r < board.length; r++) {
      if (!winner) {
        var row = board[r];
        if (row.includes(player)) {
          for (var c = 0; c < row.length; c++) {
            if (row[c] === player && row[c + 1] === player && row[c + 2] === player && row[c + 3] === player) {
              winner = true;
              return winner;
            }
          }
        }
      }
    }
    return winner;
  }

  var checkVerticalWin = function (player) {
    // var board = this.state.board;
    var winner = false;

    for (var r = 3; r < board.length; r++) {
      for (var c = 0; c < board[r].length; c++) {
        if (board[r][c] === player &&
            board[r - 1][c] === player &&
            board[r - 2][c] === player &&
            board[r - 3][c] === player) {
              return true;
        }
      }
    }
    return false;
  }

  var checkNegativeDiagonal = function (player) {
    // var board = this.state.board;
    for (var r = 3; r < board.length; r++) {
      for (var c = 3; c < 7; c++) {
        if (board[r][c] === player &&
            board[r - 1][c - 1] === player &&
            board[r - 2][c - 2] === player &&
            board[r - 3][c - 3] === player) {
          return true;
        }
      }
    }
    return false;
  }

  var checkPositiveDiagonal = function (player) {
    // var board = this.state.board;
    for (var r = 3; r < board.length; r++) {
      for (var c = 0; c < 4; c++) {
        if (board[r][c] === player &&
            board[r - 1][c + 1] === player &&
            board[r - 2][c + 2] === player &&
            board[r - 3][c + 3] === player ) {
          return true;
        }
      }
    }
    return false;
  }

  it('should detect a horizontal win', function () {
    board =
      [ [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0, 0],
        [1, 2, 2, 2, 2, 0, 0]];

    assert.equal(checkHorizontalWin(2), true);
    assert.equal(checkHorizontalWin(1), false);
  })

  it('should detect a vertical win', function () {
    board =
      [ [0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0],
        [0, 1, 2, 0, 0, 0, 0],
        [0, 1, 2, 0, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0],
        [1, 2, 2, 2, 0, 0, 0]];

    assert.equal(checkVerticalWin(1), true);
    assert.equal(checkVerticalWin(2), false);
  })

  it('should detect a negative diagonal win', function () {
    board =
      [ [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 0],
        [0, 1, 1, 2, 0, 0, 0],
        [0, 2, 1, 1, 2, 0, 0],
        [1, 2, 2, 2, 1, 0, 0]];

    assert.equal(checkNegativeDiagonal(1), true);
    assert.equal(checkNegativeDiagonal(2), false);
  })

  it('should detect a positive diagonal win', function () {
    board =
      [ [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0],
        [0, 0, 0, 2, 1, 0, 0],
        [0, 1, 2, 1, 1, 0, 0],
        [1, 2, 2, 2, 1, 0, 0]];

    assert.equal(checkPositiveDiagonal(2), true);
    assert.equal(checkPositiveDiagonal(1), false);
  })

  it('should detect a tie', function () {
    board =
    [ [2, 2, 2, 1, 1, 2, 2],
      [1, 1, 1, 2, 2, 1, 1],
      [2, 2, 2, 1, 1, 2, 2],
      [1, 1, 1, 2, 2, 1, 1],
      [2, 2, 2, 1, 2, 2, 2],
      [1, 1, 1, 2, 1, 1, 1]]

    var checkAnyWin = function (player) {
      if (checkHorizontalWin(player) || checkVerticalWin(player) || checkPositiveDiagonal(player) || checkNegativeDiagonal(player)) {
        return true;
      }

      // var board = this.state.board;

      for (r = 0; r < board.length; r++) {
        var row = board[r];
        if (row.includes(0)) {
          return false;
        }
      }

      // this.setState({game_over: true});
      return 'tie';
    }

    assert.equal(checkAnyWin(1), 'tie');
    assert.equal(checkAnyWin(2), 'tie');
  })
})