import Home from './home.js';
import Name from './name.js';
import Address from './address.js';
import Payment from './payment.js';
import Confirmation from './confirmation.js';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPage: Home
    }

    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleNextForName = this.handleNextForName.bind(this);
    this.handleNextForAddress = this.handleNextForAddress.bind(this);
    this.handleNextForPayment = this.handleNextForPayment.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  handleCheckout() {
    console.log('checkout clicked');
    this.setState({currentPage: Name});
  }

  handleNextForName() {
    this.setState({currentPage: Address});
  }

  handleNextForAddress() {
    this.setState({currentPage: Payment});
  }

  handleNextForPayment() {
    this.setState({currentPage: Confirmation});
  }

  handlePurchase() {
    this.setState({currentPage: Home});
  }

  render () {
    return (
      <this.state.currentPage handleCheckout={this.handleCheckout}
      handleNextForName={this.handleNextForName} handleNextForAddress={this.handleNextForAddress} handleNextForPayment={this.handleNextForPayment} handlePurchase={this.handlePurchase} />
    )
  }
}

export default App;

const container = document.querySelector('#app');

ReactDOM.render(<App />, container);