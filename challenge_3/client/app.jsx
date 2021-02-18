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
      orderID: 0
    }

    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleNextForName = this.handleNextForName.bind(this);
    this.handleNextForAddress = this.handleNextForAddress.bind(this);
    this.handleNextForPayment = this.handleNextForPayment.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  handleCheckout() {
    var dataJSON = JSON.stringify({
      item: ''
      });
    var orderCreated;

    $.ajax({
      method: 'POST',
      url: mainUrl + '/checkout',
      data: dataJSON,
      contentType: 'application/json', //Sending JSON data type to server
      dataType: 'text', //Expecting server to respond with a text data type (order's primary key as a string)
      success: (res) => {
        var parsedResponse = JSON.parse(res);
        orderCreated = parsedResponse[0][0]['LAST_INSERT_ID()'];
        this.setState({orderID: orderCreated, currentPage: Name});
      },
      error: (err) => {
        console.log('handleCheckout error: ', err);
      }
    })
  }

  handleNextForName(event) {
    event.preventDefault();

    var inputName = $('#name')[0].value;
    var inputEmail = $('#email')[0].value;
    var inputPassword = $('#password')[0].value;

    var dataJSON = JSON.stringify({
      orderID: this.state.orderID,
      name: inputName,
      email: inputEmail,
      password: inputPassword
      });

    $.ajax({
      method: 'POST',
      url: mainUrl + '/name',
      data: dataJSON,
      contentType: 'application/json',
      success: (res) => {
        console.log('handleNextForName success');
      },
      error: (err) => {
        console.log('handleNextForName error: ', err);
      }
    })

    this.setState({currentPage: Address});
  }

  handleNextForAddress(event) {
    event.preventDefault();

    var inputLine1 = $('#addr1')[0].value;
    var inputLine2 = $('#addr2')[0].value;
    var inputCity = $('#city')[0].value;
    var inputState = $('#state')[0].value;
    var inputZip = $('#zip')[0].value;
    var inputPhone = $('#phone')[0].value;

    var data = {
      orderID: this.state.orderID,
      addr1: inputLine1,
      addr2: inputLine2,
      city: inputCity,
      state: inputState,
      zip: inputZip,
      phone: inputPhone
    };
    console.log('data; ', data);

    var dataJSON = JSON.stringify({
      orderID: this.state.orderID,
      addr1: inputLine1,
      addr2: inputLine2,
      city: inputCity,
      state: inputState,
      zip: inputZip,
      phone: inputPhone
    });

    $.ajax({
      method: 'POST',
      url: mainUrl + '/address',
      data: dataJSON,
      contentType: 'application/JSON',
      success: () => {
        console.log('handleNextForAddress success');
      },
      error: (err) => {
        console.log('handleNextForAddress err: ', err);
      }
    })

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
      <this.state.currentPage currentOrderID={this.state.orderID} handleCheckout={this.handleCheckout}
      handleNextForName={this.handleNextForName} handleNextForAddress={this.handleNextForAddress} handleNextForPayment={this.handleNextForPayment} handlePurchase={this.handlePurchase} />
    )
  }
}

export default App;

const container = document.querySelector('#app');

ReactDOM.render(<App />, container);