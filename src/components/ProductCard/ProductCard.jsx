import './ProductCard.scss';
import {Link} from 'react-router-dom';
import {AddBtn} from '../Buttons/Buttons';
function ProductCard ({data, category}) {

    return (
        <div className="offer__product">
            <Link className="offer__product-category-link green" to={`/products/${category.toLowerCase()}`}>{category}</Link>
            <Link className="offer__product-link" to={`/products/${category.toLowerCase()}/${data.name.toLowerCase()}`}>
                <img className="offer__product-image" src={data.image} alt={data.name}/>
            </Link>
            <div className="offer__product-name">
                <Link className="offer__product-name-link" to={`/products/${category.toLowerCase()}/${data.name.toLowerCase()}`}>
                    {data.name}
                </Link>
            </div>
            <div className="offer__product-price">{`$${data.price}.00`}</div>
            <AddBtn></AddBtn>
        </div>
    )
}

export default ProductCard;








