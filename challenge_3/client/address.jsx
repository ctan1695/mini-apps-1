function Address (props) {
  return (
    <div>
    <h3>Summary for Order #{props.currentOrderID.toString()}</h3>

    <form>
      <h2>Please Enter your Address</h2>
      <div>
        <label >Address Line 1:</label>
        <input type="text" name="addr1" id="addr1" required></input>
      </div>

      <div>
        <label >Address Line 2:</label>
        <input type="text" name="addr2" id="addr2" required></input>
      </div>

      <div>
        <label >City:</label>
        <input type="text" name="city" id="city" required></input>
      </div>

      <div>
        <label >State:</label>
        <input type="text" name="state" id="state" required></input>
      </div>

      <div>
        <label >Zip Code:</label>
        <input type="text" name="zip" id="zip" required></input>
      </div>

      <div>
        <label >Phone Number:</label>
        <input type="text" name="phone" id="phone" required></input>
      </div>

      <div>
        <input type="submit" value="Next" onClick={(e) => {props.handleNextForAddress(e)}}></input>
      </div>
    </form>
  </div>
  )
}

export default Address;

