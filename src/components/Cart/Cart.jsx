import './Cart.scss';
import {NavLink} from 'react-router-dom';
import imageCart from '../../images/Cart/Cart.svg'
import {paths} from "../../common/url";
function Cart ({ path} ) {
    return (
        <div className="cart">
            <NavLink to={paths.CART}>
                <img src={imageCart} alt="to-cart"/>
            </NavLink>
            <div className="cart__qty">Cart (0)</div>
        </div>
    )
}

export default Cart;