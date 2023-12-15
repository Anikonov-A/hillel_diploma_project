import './ProductCard.scss';
import {Link} from 'react-router-dom';
import {AddBtn} from '../Buttons/Buttons';
import {useDispatch} from "react-redux";
import {addItem} from "../../store/slices/cartSlice";
import {scrollTop} from "../../common/scrollFunction";

function ProductCard ({data, category}) {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addItem(data));
    };

    return (
        <div className="offer__product">
            <Link className="offer__product-category-link green" to={`/products/${category.toLowerCase()}`}
                  onClick={scrollTop}>{category}</Link>
            <Link className="offer__product-link" to={`/products/${category.toLowerCase()}/${data.name.toLowerCase()}`}
                  onClick={scrollTop}>
                <img className="offer__product-image" src={data.image} alt={data.name}/>
            </Link>
            <div className="offer__product-name">
                <Link className="offer__product-name-link"
                      to={`/products/${category.toLowerCase()}/${data.name.toLowerCase()}`} onClick={scrollTop}>
                    {data.name}
                </Link>
            </div>
            <div className="offer__product-price">{new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(data.price)}</div>
            <AddBtn handler={handleAddToCart}/>
        </div>
    )
}

export default ProductCard;




