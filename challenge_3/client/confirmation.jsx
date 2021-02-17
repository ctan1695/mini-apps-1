function Confirmation (props) {
  return (
    <div>
    <h3>Confirmation Page</h3>

    <form>
      <div className="name-info"></div>

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

