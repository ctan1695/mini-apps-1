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
      userID: 0
    }

    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleNextForName = this.handleNextForName.bind(this);
    this.handleNextForAddress = this.handleNextForAddress.bind(this);
    this.handleNextForPayment = this.handleNextForPayment.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  handleCheckout() {
    //AJAX request to POST new record into db (INSERT into customers table with just the primary key and Name = empty string)
    //Make the DB and server return the Primary Key value to the client.
    //Set state for UserID to be the ID received from server response.
    this.setState({currentPage: Name});
  }

  handleNextForName() {
    //AJAX request to POST new record into db (UPDATE customers table: Name, Email and Password columns with user inputted info WHERE ID = this.state.userID)
    this.setState({currentPage: Address});
  }

  handleNextForAddress() {
    //AJAX request to POST new record into db (INSERT into addresses table: non-FK columns should be the info from the customer's input and customer_ID should be this.state.userID)
    this.setState({currentPage: Payment});
  }

  handleNextForPayment() {
    //AJAX request to POST new record into db (INSERT into payment table: non-FK columns should be the info from the customer's input and customer_ID should be this.state.userID)
    //AJAX request to GET all information tied to this.state.userID.
    //Set state using the info received on server response (should be the name, address and payment info for the user).
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