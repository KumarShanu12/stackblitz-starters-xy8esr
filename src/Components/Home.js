import * as React from 'react';
import axios from axios;
const Home = (props) => {

  
  console.log('prop', props);
  return (
    <>
      <div>

     {/* Header */}


<div>
     <div>
       {/* Routing */}
     </div> 

     <div>
       {/* Product */}
     </div> 
    
     <div>
       {/* Add to cart */}
     </div> 

</div>  

     
     

     

      


















        <h1>Home Component</h1>
        <div className="cart-wrapper">
          <div className="img-wrapper item">
            <img src="https://www.fdfproject.com/wp-content/uploads/2018/12/iphone-png.png" />
          </div>
          <div className="text-wrapper item">
            <span>I-Phone</span>
            <span>Price: $1000.00</span>
          </div>
          <div className="btn-wrapper item">
            <button
              onClick={() => {
                props.addToCartHandler({
                  id: 1,
                  title:
                    'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
                  price: 109.95,
                  description:
                    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
                  category: "men's clothing",
                  image:
                    'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
                  rating: {
                    rate: 3.9,
                    count: 120,
                  },
                });
              }}
            >
              Add To Cart
            </button>

            <button
              onClick={() => {
                props.removeFromCartHandler();
              }}
            >
              remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
