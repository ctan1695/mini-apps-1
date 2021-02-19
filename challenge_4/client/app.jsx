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
      winner_message: ''
    }

    this.startGame = this.startGame.bind(this);
    this.changePlayer = this.changePlayer.bind(this);
    this.play = this.play.bind(this);
  }

  startGame() {
    this.setState({current_player: this.state.player_one, board:
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
        console.log('i: ', i);
        console.log('board[i][colIndex]: ', board[i][colIndex])
        if (board[i][colIndex] === 0) {

          board[i][colIndex] = this.state.current_player;
          break;
        }
      }

      var nextPlayer = this.changePlayer();

      this.setState({board: board, current_player: nextPlayer});
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

