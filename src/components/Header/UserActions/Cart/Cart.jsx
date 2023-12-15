import './Cart.scss';
import {NavLink} from 'react-router-dom';
import {paths} from "../../../../common/url";
import {useSelector} from "react-redux";
import {scrollTop} from "../../../../common/scrollFunction";
function Cart () {
    const itemCount = useSelector(state => state.cart.items.length);
    return (
        <div className="cart">
            <NavLink to={paths.CART} onClick={scrollTop} >
                <img src="/images/cart/cart.svg" alt="to-cart"/>
            </NavLink>
            <div className="cart__qty">Cart ({itemCount})</div>
        </div>
    )
}

export default Cart;