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
    this.checkWinner = this.checkWinner.bind(this);
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
      var winner;

      if (this.checkHorizontalWin(this.state.player_one)) {
        winner = this.state.player_one;
      } else if (this.checkHorizontalWin(this.state.player_two)) {
        winner = this.state.player_two;
      } else if (this.checkVerticalWin(this.state.player_one)) {
        winner = this.state.player_one;
      } else if (this.checkVerticalWin(this.state.player_two)) {
        winner = this.state.player_two;
      } else {
        winner = 0;
      }

      this.setState({board: board, current_player: nextPlayer, winner: winner}, () => {
        if(this.checkWinner()) {
          console.log('cw true')

          this.setState({game_over_message: `Game over, Player ${this.state.winner} won!`, game_over: true}, () => {
            console.log('this.state: ', this.state);
          });
        };
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
    var count = 0;
    var colIndex;

    for (var r = 0; r < board.length; r++) {
      var row = board[r];
      for (var i = 0; i < row.length; i++) {
        if (row[i] === player) {
          colIndex = i;
          break;
        }
      }
      if (row[colIndex] === player) {
        count++;
      }
    }

    if (count === 4) {
      return true;
    } else {
      return false;
    }
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

