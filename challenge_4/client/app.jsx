class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player_one: 1,
      player_two: 2,
      current_player: 0,
      board: [[0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0]],
      game_over: false,
      winner_message: ''
    }
  }

  render () {
    return (
      <div>{this.state.board.map((row, i) =>
      (<Row num={i} row={row} play={this.play} />))}</div>
    )
  }
}

var Row = (props) => {

  console.log('props: ', props.row);
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

