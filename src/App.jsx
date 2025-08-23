import "./App.css";
import ProductCard from "./components/ProductCard/ProductCard.jsx";
import {useState} from "react";

const App = (props) => {

    let [products, setProducts] = useState(props.products);

    let updatePrice = (productId, change) => {
        setProducts((prevProducts) => {
            return prevProducts.map(product => {
                if (product.id === productId && product.price + change >= 0) {
                    return {
                        ...product,
                        price: product.price + change
                    };
                }
                return product;
            });
        });
    }


    return (
        <div className='product-container'>
            {products.map((product) => (
                <ProductCard product={product} key={product.id} onDecrease={updatePrice} onIncrease={updatePrice}/>
            ))}
        </div>
    )
}

export default App



