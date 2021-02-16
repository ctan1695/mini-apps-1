

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <button>Checkout</button>
    )
  }
}



const container = document.querySelector('#app');

ReactDOM.render(<App />, container);