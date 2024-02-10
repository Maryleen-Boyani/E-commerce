import PropTypes from "prop-types"

export const Product = (props)=>{
    const {id, productName, price, productImage} = props;
    return (
        <div className="product">
            <img src={productImage}/>
                <div className="description">
                    <p><b>{productName}</b></p>
                    <p>${price}</p>
                    <p>{id}</p>
                </div>
        </div>
    )
}
Product.propTypes = {
    id: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    productImage: PropTypes.string.isRequired,
}
