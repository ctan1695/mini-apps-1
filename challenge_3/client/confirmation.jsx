function Confirmation (props) {
  return (
    <div>
      <p1>ConfirmationPage</p1>
      <button onClick={() => {props.handlePurchase()}}>Purchase</button>
    </div>
  )
}

export default Confirmation;

