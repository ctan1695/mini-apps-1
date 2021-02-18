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
      orderID: 0,
      summaryInfo: {}
    }

    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleNextForName = this.handleNextForName.bind(this);
    this.handleNextForAddress = this.handleNextForAddress.bind(this);
    this.handleNextForPayment = this.handleNextForPayment.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
    this.displaySummary = this.displaySummary.bind(this);
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
      contentType: 'application/json',
      dataType: 'text',
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

    var inputCC = $('#cc')[0].value;
    var inputExp = $('#exp')[0].value;
    var inputCVV = $('#cvv')[0].value;
    var inputBilling = $('#zip')[0].value;

    var dataJSON = JSON.stringify({
      orderID: this.state.orderID,
      cc: inputCC,
      exp: inputExp,
      cvv: inputCVV,
      billing: inputBilling
    })

    $.ajax({
      method: 'POST',
      url: mainUrl + '/payment',
      contentType: 'application/json',
      data: dataJSON,
      success: () => {
        console.log(' handleNextForPayment success');
        this.displaySummary((queryResults) => {
          this.setState({summaryInfo: queryResults, currentPage: Confirmation})
        });
      },
      error: (err) => {
        console.log('handleNextForPayment error: ', err);
      }
    })
  }

  displaySummary(callback) {
    var dataJSON = JSON.stringify({
      orderID: this.state.orderID
    });

    $.ajax({
      method: 'GET',
      url: mainUrl + '/summary',
      contentType: 'application/json',
      data: dataJSON,
      success: (res) => {
        var queryResults = res[0][0];
        callback(queryResults);
      },
      error: (err) => {
        console.log('handlePurchase error: ', err);
      }
    })
  }

  handlePurchase(event) {
    event.preventDefault();

    this.setState({currentPage: Home});
  }

  render () {
    return (
      <this.state.currentPage currentOrderID={this.state.orderID} handleCheckout={this.handleCheckout}
      handleNextForName={this.handleNextForName} handleNextForAddress={this.handleNextForAddress} handleNextForPayment={this.handleNextForPayment} handlePurchase={this.handlePurchase} summaryInfo={this.state.summaryInfo}/>
    )
  }
}

export default App;

const container = document.querySelector('#app');

ReactDOM.render(<App />, container);