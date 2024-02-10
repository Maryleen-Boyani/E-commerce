import {PRODUCTS} from "../../products";//importing the products array

export const Shop =()=>{
    return (
        <div className="shop">
            <div className="shopTitle">
                <h1>Yani Shop</h1>       
            </div> 
            <div className="products">{PRODUCTS.map((Product) =>(
                <li key={Product}>{Product}</li>
            ))}</div>
    </div>
    )
    
}