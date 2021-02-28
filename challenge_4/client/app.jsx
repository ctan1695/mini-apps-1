class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player_one: 1,
      player_two: 2,
      current_player: 1,
      board: [[0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0]],
      game_over: false,
      winner: 0,
      game_over_message: ''
    }

    this.startGame = this.startGame.bind(this);
    this.changePlayer = this.changePlayer.bind(this);
    this.play = this.play.bind(this);
    this.checkHorizontalWin = this.checkHorizontalWin.bind(this);
    this.checkVerticalWin = this.checkVerticalWin.bind(this);
    this.checkPositiveDiagonal = this.checkPositiveDiagonal.bind(this);
    this.checkNegativeDiagonal = this.checkNegativeDiagonal.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
    this.checkAnyWin = this.checkAnyWin.bind(this);
  }

  startGame() {
    this.setState({game_over_message: '', current_player: this.state.player_one, board:
      [[0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]]
    });
  }

  changePlayer() {
    if (this.state.current_player === this.state.player_one) {

      return this.state.player_two;
    } else {
      return this.state.player_one
    }
  }

  play (colIndex) {
    if(!this.state.gameOver) {
      var board = this.state.board;

      for (var i = 5; i >= 0; i--) {
        if (board[i][colIndex] === 0) {
          board[i][colIndex] = this.state.current_player;
          break;
        }
      }

      var nextPlayer = this.changePlayer();
      var winner = 0;

      if (this.checkAnyWin(this.state.player_one)) {
        winner = this.state.player_one;
      } else if (this.checkAnyWin(this.state.player_two)) {
        winner = this.state.player_two;
      }

      this.setState({board: board, current_player: nextPlayer, winner: winner}, () => {
        if(this.checkWinner()) {
          this.setState({game_over_message: `Game over, Player ${this.state.winner} won!`, game_over: true}, () => {
            console.log('this.state: ', this.state);
          });
        } else if(this.state.game_over === true && this.state.winner === 0) {
          this.setState({game_over_message: `Game over, there is a tie!`});
        }
      });
    }
  }

  checkHorizontalWin(player) {
    var board = this.state.board;
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

  checkVerticalWin(player) {
    var board = this.state.board;
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

  checkPositiveDiagonal(player) {
    var board = this.state.board;
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

  checkNegativeDiagonal(player) {
    var board = this.state.board;
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

  checkAnyWin(player) {
    if (this.checkHorizontalWin(player) || this.checkVerticalWin(player) || this.checkPositiveDiagonal(player) || this.checkNegativeDiagonal(player)) {
      return true;
    }

    var board = this.state.board;

    for (r = 0; r < board.length; r++) {
      var row = board[r];
      if (row.includes(0)) {
        return false;
      }
    }

    this.setState({game_over: true});
  }

  checkWinner() {
    console.log('check winner');
    console.log('this.state.winner: ', this.state.winner);
    if (this.state.winner !== 0) {
      console.log('true')
      return true;
    } else {
      return false;
    }
  }

  render () {
    return (
      <div>
        <button class="new-game" onClick={this.startGame}>New Game</button>
        <div>
          {this.state.board.map((row, i) =>
            (<Row num={i} row={row} play={this.play} />))}
        </div>
        <div id="message">{this.state.game_over_message}</div>
      </div>
    )
  }
}

var Row = (props) => {
  return (
    <div>
      {props.row.map((slot, i) =>
        <Slot value={slot} colIndex={i} play={props.play} />)}
    </div>
  )
}


var Slot = (props) => {
  var slotValue = 0;

  if (props.value === 1) {
    slotValue = 1;
  } else if (props.value === 2) {
    slotValue = 2;
  }

  return (
    <p1 class="slot" onClick={() => {props.play(props.colIndex)}}>     {slotValue}    </p1>
  )
}

const container = document.querySelector('#app');

ReactDOM.render(<App />, container);

