function Name (props) {
  return (
    <div>
      <h3>Checking Out Order #{props.currentOrderID.toString()}</h3>

      <form>
        <h2>Enter your Name, Email and Password</h2>
        <div>
          <label >Name:</label>
          <input type="text" name="name" id="name" required></input>
        </div>

        <div>
          <label >Email:</label>
          <input type="text" name="email" id="email" required></input>
        </div>

        <div>
          <label >Password:</label>
          <input type="text" name="password" id="password" required></input>
        </div>

        <div>
          <input type="submit" value="Next" onClick={(e) => {props.handleNextForName(e)}}></input>
        </div>
      </form>
    </div>
  )
}

export default Name;

