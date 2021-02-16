function Home (props) {
  return (
      <button onClick={() => {props.handleCheckout()}}>Checkout</button>
  )
};

export default Home;