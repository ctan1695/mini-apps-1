function Confirmation (props) {
  return (
    <div>
    <h3>Summary for Order #{props.currentOrderID.toString()}</h3>

    <form>
      <div className="name-info">
        <div>
          <h1>Account Information:</h1>
          Name: {props.summaryInfo.name}
          Email: {props.summaryInfo.email}
          Password: {props.summaryInfo.password}
        </div>
        <div>
          <h1>Address Information:</h1>
            Address Line 1: {props.summaryInfo.line_1}
            Address Line 2: {props.summaryInfo.line_2}
            City: {props.summaryInfo.city}
            State: {props.summaryInfo.state}
            Zip Code: {props.summaryInfo.zip_code}
            Phone Number: {props.summaryInfo.phone_number}
        </div>
        <div>
          <h1>Payment Information:</h1>
            Credit Card Number: {props.summaryInfo.credit_card_number}
            CVV: {props.summaryInfo.cvv}
            Expiry Date: {props.summaryInfo.expiry_date}
            Billing Zip Code: {props.summaryInfo.billing_zip}
        </div>
      </div>

      <div className="address-info"></div>

      <div className="payment-info"></div>

      <div>
        <input type="submit" value="Purchase" onClick={(e) => {props.handlePurchase(e)}}></input>
      </div>
    </form>
  </div>
  )
}

export default Confirmation;

