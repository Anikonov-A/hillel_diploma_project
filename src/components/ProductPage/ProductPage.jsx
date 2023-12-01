import './ProductPage.scss';
import {useParams} from "react-router-dom";

function ProductPage () {
    const { productName } = useParams();

    // const { category, productName } = useParams();
    // const product = data.categories
    //   .find((cat) => cat.name.toLowerCase() === category.toLowerCase())
    //   .items.find((item) => item.name.toLowerCase() === productName.toLowerCase());

    // return (
    //     <div>
    //         <h2>{product.name}</h2>
    //         <p>Price: ${product.price}.00</p>
    //         <img src={product.image} alt={product.name} />
    //         {/*..... */}
    //     </div>
    // );

    return (
        <div className="product__name">{productName}</div>
    )
}

export default ProductPage;