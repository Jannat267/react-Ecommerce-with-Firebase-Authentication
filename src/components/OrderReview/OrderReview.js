import React from 'react';
import Cart from '../Cart/Cart';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import PlaceOrder from '../PlaceOrder/PlaceOrder';
import { Link,useHistory } from 'react-router-dom';

const OrderReview = () => {
    const  [products,setProducts]= useProducts();
    const [cart,setCart]=useCart(products);
    const history = useHistory();

    const removeHandler=key=>{
        const newCart= cart.filter(product=>product.key!==key);
        setCart(newCart);
        removeFromDb(key);
    }
    const handlePlaceOrder=()=>{
        
        history.push('./placeOrder');
        setCart([]);
        clearTheCart();
        
    }
    
    return (
        <div className='shop-container'>

            <div className='product-container'>
                <h1>Total ordered product : {cart.length}</h1>
                {
                  cart.map(product=><ReviewItem 
                    key={product.key}
                    removeHandler={removeHandler}
                    product={product}></ReviewItem>)  
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart}>
                    
                    <button className='btn-regular'
                    onClick={handlePlaceOrder}>
                        Place Order
                    </button>
                    
                   
                </Cart>
            </div>
            
        </div>
    );
};

export default OrderReview;