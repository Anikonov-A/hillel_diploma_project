import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.scss';
import '../ProductCard/ProductCard.scss';
import Paragraph from '../../components/Paragraph/Paragraph';
import Title from '@/components/Title/Title';
import StyleGuide from '../../components/StyleGuide/StyleGuide'

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [categoryName, setCategoryName] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        if (newQuantity < 1 || isNaN(newQuantity)) {
            setQuantity(1);
        } else {
            setQuantity(newQuantity);
        }
    };

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch('/data/data.json');
                if (!response.ok) {
                    throw new Error(`Ошибка сети: ${response.status}`);
                }
                const data = await response.json();
                for (const category of data.categories) {
                    const foundProduct = category.items.find(item => item.id === Number(id));
                    if (foundProduct) {
                        setProduct(foundProduct);
                        setCategoryName(category.name);
                        break;
                    }
                }
                setLoading(false);
            } catch (error) {
                setError('Произошла ошибка при загрузке данных');
                setLoading(false);
            }
        }

        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <div className="productPage__loader">
                <svg
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        strokeWidth="5"
                        stroke="#ccc"
                        strokeLinecap="round"
                    />
                </svg>
            </div>
        );
    }

    if (error) {
        return <div className="productPage-message__error">Ошибка: {error}</div>;
    }

    if (!product) {
        return <div className="productPage-message__notFound">Товар не найден</div>;
    }

    return (
        <div className='wrapper'>

            <StyleGuide titleText="Shop Single" backgroundClass="bg-shop-single"/>

            <section className='productPage-section__details container'>

                <div className="productPage-img__wrapper">
                    <span className='productPage-img__wrapper-span offer__product-category-link green'>{categoryName}</span>
                    <img className='productPage-img__wrapper-image' src={product.image} alt={product.name} />
                </div>

                <div className='productPage-content__wrapper'>

                    <div className="productPage__content">
                        <Title size={3}>{product.name}</Title>

                        <p className='productPage__content-prices'>
                            <span className='productPage__content-prices-old'>${(product.price + 7) * quantity}.00</span>
                            ${product.price * quantity}.00
                        </p>

                        <Paragraph>{product.info}</Paragraph>
                    </div>

                    <div className='productPage-controls__wrapper'>
                        <div>
                            <label className='productPage-controls__label' htmlFor='quantity'>Quantity :  </label>
                            <input className='productPage-controls__input'
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={handleQuantityChange}
                                name="quantity"
                                id="quantity"
                                autoComplete="off" />
                        </div>
                        <button type='button' className='productPage-controls__wrapper__btn green'>Add to cart</button>

                    </div>
                </div>

            </section>

            <article className='productPage-btns__wrapper container'>

                <div className='productPage-btns__block'>
                    <button className='productPage-btns green' onClick={() => setActiveTab('description')}>Product Description</button>
                    <button className='productPage-btns productPage-btns__transparent green' onClick={() => setActiveTab('additional_info')}>Additional Info</button>
                </div>

                <div className='productPage-btns__desc'>
                    <Paragraph>{activeTab === 'description' ? product.description : product.additional_info}</Paragraph>
                </div>

            </article>


        </div>
    );
}

export default ProductDetail;
