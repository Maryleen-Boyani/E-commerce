import propTypes from 'prop-types';
import { ShopContext } from '../../context/shop-context';
import { useContext } from 'react';
export const Product = (props)=>{
    const {id, productName, price, productImage}=props.data;
    const {addToCart} = useContext(ShopContext);

    return (
        <>
           <div className="product">
                <img src={productImage} />
                <div className="description">
                    <p>
                        <b>{productName}</b>
                    </p>
                    <p>${price}</p>
                    <button className="addToCartBttn" onClick={()=> addToCart(id)}>
                        Add To Cart
                    </button>
                </div>
           </div>
        </>
        
    )
    
};

Product.propTypes = {
    data: propTypes.shape({
        id: propTypes.string.isRequired,
        productName: propTypes.string.isRequired,
        price: propTypes.number.isRequired,
        productImage: propTypes.string.isRequired,
    }).isRequired,
}