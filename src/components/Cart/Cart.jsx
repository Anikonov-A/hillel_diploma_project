import './Cart.scss';
import {NavLink} from 'react-router-dom';
import {paths} from "../../common/url";
function Cart () {
    return (
        <div className="cart">
            <NavLink to={paths.CART}>
                <img src="./images/cart/cart.svg" alt="to-cart"/>
            </NavLink>
            <div className="cart__qty">Cart (0)</div>
        </div>
    )
}

export default Cart;