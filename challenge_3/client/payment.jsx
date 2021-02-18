function Payment (props) {
  return (
    <div>
    <h3>Checking Out Order #{props.currentOrderID.toString()}</h3>

    <form>
      <h2>Enter your Payment Information<</h2>
      <div>
        <label >Credit Card #:</label>
        <input type="text" name="cc" id="cc" required></input>
      </div>

      <div>
        <label >Expiry Date:</label>
        <input type="text" name="exp" id="exp" required></input>
      </div>

      <div>
        <label >CVV:</label>
        <input type="text" name="cicvvty" id="cvv" required></input>
      </div>

      <div>
        <label >Billing Zip Code:</label>
        <input type="text" name="zip" id="zip" required></input>
      </div>

      <div>
        <input type="submit" value="Next" onClick={(e) => {props.handleNextForPayment(e)}}></input>
      </div>
    </form>
  </div>
  )
}

export default Payment;

