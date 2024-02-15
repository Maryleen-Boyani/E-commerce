import {PRODUCTS} from "../../products";//importing the products array
import {Product} from "./product";//importing the Product component
import "./shop.css";


 export const Shop =()=>{
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Yani Shop</h1>       
            </div> 
            <div className="products">
               {PRODUCTS.map((product) => (
                 <Product key={product.id} data={product}/>
               ))}
            </div>
    </div>
    )
    
}