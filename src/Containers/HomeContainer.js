import Home from '../Components/Home';
import { connect } from 'react-redux';
import { addToCart , removeFromCart } from '../Services/action/action';

const mapStateToProps = (state) => ({
  data:state
});
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeFromCartHandler: (data) => dispatch(removeFromCart(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default Home;
