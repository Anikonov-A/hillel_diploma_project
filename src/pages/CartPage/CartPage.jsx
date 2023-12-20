import './CartPage.scss'
import Title from "@/components/Title/Title";
import CrossIcon from "@/components/CrossIcon";
import {useDispatch, useSelector} from "react-redux";
import {decreaseQuantity, increaseQuantity, removeItem} from "@/store/slices/cartSlice";
import OrderForm from "../../components/OrderForm/OrderForm";
import {useEffect} from "react";
import {loadCartFromStorage} from "../../store/slices/cartSlice";
import {Link} from "react-router-dom";
import {scrollTop} from "../../common/scrollFunction";
import Span from "../../components/Span/Span";
import {NavButton} from "../../components/Buttons/Buttons";

function ProductCard({product, handleRemove, handleIncrease, handleDecrease}) {
    const handleActionOnClick = (action) => () => action(product.id);

    return (
        <div className="product-card">
            <div className="product-card__body">
                <button onClick={() => handleRemove(product.id)} className="product-card__cross">
                    <CrossIcon/>
                </button>
                <div className="product-card__image">
                    <img src={product.image} alt={product.name}/>
                </div>
                <div className="product-card__info">
                    <Link to={`/products/${product.category}/${product.name.toLowerCase()}`} onClick={scrollTop} className="product-card__name">{product.name}</Link>
                    <div className="product-card__counter">
                        <button onClick={handleActionOnClick(handleDecrease)}>-</button>
                        <div>{product.quantity}</div>
                        <button onClick={handleActionOnClick(handleIncrease)}>+</button>
                    </div>
                    <div>
                        <p className="product-card__price">{product.price}$</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


function CartPage() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const isCartEmpty = cartItems.length === 0;

    useEffect(() => {
        dispatch(loadCartFromStorage());
    }, [dispatch]);
    const handleRemoveItem = (itemId) => {
        dispatch(removeItem(itemId));
    };
    const handleIncreaseQuantity = (itemId) => {
        dispatch(increaseQuantity(itemId));
    };
    const handleDecreaseQuantity = (itemId) => {
        dispatch(decreaseQuantity(itemId));
    };
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };
    return (
        <div className='container feedback'>
            <div className='wrapper container'>
                <div className="shopping-cart">
                    <Title size={3} addClasses="shopping-cart__title">Shopping cart</Title>
                    <div className="shopping-cart__empty">
                        {isCartEmpty ? (
                            <>
                                <Span anim="fade-up" addClasses="shopping-cart__span" children="Not a single product in your cart yet!" />
                                <NavButton className="button green shop__link" to="/products" text="Continue Shopping" anim="fade-up" />
                            </>
                        ) : null}
                    </div>
                    <div className="shopping-cart__body-block block-body">
                        <div className="block-body__order-content content-order">
                            <ul className="content-order__list">
                                {
                                    cartItems.length > 0 && cartItems.map((product, index) => (
                                        <ProductCard key={product.id} className="content-order__list-item" product={product}
                                                     index={index} handleRemove={handleRemoveItem}
                                                     handleDecrease={handleDecreaseQuantity}
                                                     handleIncrease={handleIncreaseQuantity}>
                                        </ProductCard>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="block-body__order-info info-order">
                            <Title size={6}>Cart totals</Title>
                            <div className="info-order__final-price">
                                <OrderForm price={calculateTotalPrice()} isEmpty={isCartEmpty}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartPage;