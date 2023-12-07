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
            <div className="loader">
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
        return <div className="error-message">Ошибка: {error}</div>;
    }

    if (!product) {
        return <div className="not-found-message">Товар не найден</div>;
    }

    return (
        <div className='wrapper'>
            <StyleGuide titleText="Shop Single" backgroundClass="bg-shop-single"/>

            <section className='product-details_section container'>

                <div className="pp-img_wrapper">
                    <span className='offer__product-category-link green test11'>{categoryName}</span>
                    <img className='pp-img' src={product.image} alt={product.name} />
                </div>

                <div className='pp-content_wrapper'>

                    <div className="pp-content">
                        <Title size={3}>{product.name}</Title>

                        <p className='pp-content_price'>
                            <span className="old-price">${(product.price + 7) * quantity}.00</span>
                            ${product.price * quantity}.00
                        </p>

                        <Paragraph>{product.info}</Paragraph>
                    </div>

                    <div className='pp_btns-wrapper'>
                        <div>
                            <label className='label-test' htmlFor='quantity'>Quantity :  </label>
                            <input className='input-test'
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={handleQuantityChange}
                                name="quantity"
                                id="quantity"
                                autoComplete="off" />
                        </div>
                        <button type='button' className='pp-btn_add green'>Add to cart</button>

                    </div>
                </div>

            </section>

            <article className='container test7'>
                <div className='test5'>
                    <button className='pp-btns_des green' onClick={() => setActiveTab('description')}>Product Description</button>
                    <button className='pp-btns_des tests green' onClick={() => setActiveTab('additional_info')}>Additional Info</button>
                </div>
                <div className='test6'>
                    <Paragraph>{activeTab === 'description' ? product.description : product.additional_info}</Paragraph>
                </div>
            </article>


        </div>
    );
}

export default ProductDetail;
