import './CartPage.scss'
import Title from "../../components/Title/Title";
import {useEffect, useState} from "react";
import axios from "axios";
import CrossIcon from "../../components/CrossIcon";


// import {NavButton} from "../../components/Buttons/Buttons";

function CartPage() {
    let finalPrice = 0;
    const [data, setData] = useState([]);
    const [counters, setCounters] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("./data/data.json");
            const vegetablesCategory = response.data.categories.find(category => category.name === "Vegetables");
            const initialCounters = vegetablesCategory.items.map(() => 1);
            setCounters(initialCounters);
            setData(vegetablesCategory.items);
        };
        fetchData();
    }, []);


    function ProductCard({product,index}) {
        return (
            <div className="product-card">
                <div className="product-card__body">
                    <button onClick={() => console.log("click")} className="product-card__cross">
                        <CrossIcon/>
                    </button>
                    <div className="product-card__image">
                        <img src={product.image} alt={product.name}/>
                    </div>
                    <div className="product-card__info">
                        <Title size={6} addClasses="product-card__name">{product.name}</Title>
                        <p className="product-card__price">{product.price}$</p>
                        <div className="product-card__counter">
                            <button onClick={() => setCounters(prevCounters => {
                                const updatedCounters = [...prevCounters];
                                updatedCounters[index] = Math.max(1, updatedCounters[index] - 1);
                                return updatedCounters;
                            })}>-
                            </button>
                            <div>{counters[index]}</div>
                            <button onClick={() => setCounters(prevCounters => {
                                const updatedCounters = [...prevCounters];
                                updatedCounters[index] = updatedCounters[index] + 1;
                                return updatedCounters;
                            })}>+
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }


    return (
        <div className='wrapper container'>
            {/*<NavButton className='button green' to='/contacts' text='Leave a Review'/>*/}
            <div className="shopping-cart">
                <Title size={3} addClasses="shopping-cart__title">Shopping cart</Title>
                <div className="shopping-cart__body-block block-body">
                    <div className="block-body__order-content content-order">
                        <ul className="content-order__list">
                            {
                                data.length > 0 && data.map((product, index) => (
                                    <ProductCard key={product.id} className="content-order__list-item" product={product} index={index}></ProductCard>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="block-body__order-info info-order">
                        <Title size={4} addClasses="info-order__subtitle">Cart Totals</Title>
                        <div className="info-order__final-price">
                            <Title size={5}>Final Price</Title>
                            {finalPrice}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )

}

export default CartPage;