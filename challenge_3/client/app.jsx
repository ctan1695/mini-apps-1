import Home from './home.js';
import Name from './name.js';
import Address from './address.js';
import Payment from './payment.js';
import Confirmation from './confirmation.js';

var mainUrl = 'http://localhost:3000';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPage: Home,
      userID: 0
    }

    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleNextForName = this.handleNextForName.bind(this);
    this.handleNextForAddress = this.handleNextForAddress.bind(this);
    this.handleNextForPayment = this.handleNextForPayment.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  handleCheckout() {
    var dataJSON = JSON.stringify({
      name: '',
      email: '',
      password: ''
      });

    $.ajax({
      method: 'POST',
      url: mainUrl + '/checkout',
      data: dataJSON,
      contentType: 'application/json', //Sending JSON data type to server
      dataType: 'text', //Expecting server to respond with a text data type (order's primary key as a string)
      success: (res) => {
        console.log('handleCheckout success: ', res);
      },
      error: (err) => {
        console.log('handleCheckout error: ', err);
      }
    })

    this.setState({currentPage: Name});
    // this.setState({userID: /* response from server */});
  }

  handleNextForName(event) {
    event.preventDefault();

    //AJAX request to POST new record into db (UPDATE customers table: Name, Email and Password columns with user inputted info WHERE ID = this.state.userID)
    var inputName = $('#name')[0].value;
    var inputEmail = $('#email')[0].value;
    var inputPassword = $('#password')[0].value;

    var dataJSON = JSON.stringify({
      id: this.state.userID.toString(),
      name: inputName,
      email: inputEmail,
      password: inputPassword
      });

    $.ajax({
      method: 'POST',
      url: mainUrl + '/name',
      data: dataJSON,
      contentType: 'application/json',
      dataType: 'text',
      success: (res) => {
        console.log('handleNextForName success: ', res);
      },
      error: (err) => {
        console.log('handleNextForName error: ', err);
      }
    })

    this.setState({currentPage: Address});
  }

  handleNextForAddress(event) {
    event.preventDefault();

    //AJAX request to POST new record into db (INSERT into addresses table: non-FK columns should be the info from the customer's input and customer_ID should be this.state.userID)


    this.setState({currentPage: Payment});
  }

  handleNextForPayment(event) {
    event.preventDefault();

    //AJAX request to POST new record into db (INSERT into payment table: non-FK columns should be the info from the customer's input and customer_ID should be this.state.userID)
    //AJAX request to GET all information tied to this.state.userID.
    //Set state using the info received on server response (should be the name, address and payment info for the user).
    this.setState({currentPage: Confirmation});
  }

  handlePurchase(event) {
    event.preventDefault();
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