import propTypes from 'prop-types';

export const Product = (props)=>{
    const {id, productName, price, productImage}=props.data;
    return (
        <>
           <div className="product">
                <img src={productImage} />
                <div className="description">
                    <p>
                        <b>{productName}</b>
                    </p>
                    <p>${price}</p>
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