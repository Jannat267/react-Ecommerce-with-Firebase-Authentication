import React from 'react';

const ReviewItem = (props) => {
    const{key,name,quantity,price,img}=props.product;
    const {removeHandler}=props;
    return (
       
        <div className='product'>
            
           <div>
               <img src={img}/>
           </div>
           <div>
           <p className='product-name'>{name}</p>
           <p>Quantity : {quantity}</p>
           <p>Price : {price}</p>
            <button className='btn-regular' onClick={ ()=>removeHandler(key)}>Remove</button>
           </div>
           

        </div>
    );
};

export default ReviewItem;