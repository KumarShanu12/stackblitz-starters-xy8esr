import  Header from '../Components/Header';
import { connect } from 'react-redux';
import { addToCart } from '../Services/action/action';

const mapStateToProps = (state) => ({
  data:state
});
const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
// export default ;

 