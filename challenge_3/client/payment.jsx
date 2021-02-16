function Payment (props) {
  return (
    <div>
      <p1>PaymentPage</p1>
      <button onClick={() => {props.handleNextForPayment()}}>Next</button>
    </div>
  )
}

export default Payment;

