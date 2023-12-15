import React, { useState, useEffect } from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import './ProductPage.scss';
import '../ProductCard/ProductCard.scss';
import Title from '@/components/Title/Title';
import Paragraph from '../../components/Paragraph/Paragraph';
import StyleGuide from '../../components/StyleGuide/StyleGuide'
import {useDispatch, useSelector} from "react-redux";
import {
    selectProductData,
    selectProductError,
    selectProductLoading,
    setError,
    setLoading, setProductData
} from "../../store/slices/productSlice";
import {addItem} from "../../store/slices/cartSlice";


export function ProductPage() {
    const [activeTab, setActiveTab] = useState('description');
    const [quantity, setQuantity] = useState(1);
    const { productName, category } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const productData = useSelector(selectProductData);
    const loading = useSelector(selectProductLoading);
    const error = useSelector(selectProductError);

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        if (newQuantity < 1 || isNaN(newQuantity)) {
            setQuantity(1);
        } else {
            setQuantity(newQuantity);
        }
    };
    const handleAddToCart = () => {
        dispatch(addItem({ ...productData, quantity }));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                dispatch(setLoading());

                const response = await axios.get('/data/data.json');
                const result = response.data;

                if (!result || !result.categories) {
                    dispatch(setError('Invalid data format'));
                    navigate('/*');
                    return;
                }

                const isValidCategory = result.categories.some((cat) => cat.name.toLowerCase() === category.toLowerCase());

                if (!isValidCategory) {
                    dispatch(setError('Invalid category'));
                    navigate('/*');
                    return;
                }

                const categoryData = result.categories.find((cat) => cat.name.toLowerCase() === category.toLowerCase());
                const isValidProduct = categoryData && categoryData.items && categoryData.items.some((item) => item.name.toLowerCase() === productName.toLowerCase());

                if (!isValidProduct) {
                    dispatch(setError('Invalid product'));
                    navigate('/*');
                    return;
                }

                dispatch(setProductData(categoryData.items.find((item) => item.name.toLowerCase() === productName.toLowerCase())));
            } catch (error) {
                dispatch(setError('Error fetching data'));
                navigate('/*');
            }
        };

        fetchData();
    }, [category, productName, navigate, dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }


    return (
        <div className='wrapper'>

            <StyleGuide titleText="Shop Single" backgroundClass="bg-shop-single"/>

            <section className='productPage-section__details container'>

                <div className="productPage-img__wrapper">
                    <span className='productPage-img__wrapper-span offer__product-category-link green'>{category}</span>
                    <img className='productPage-img__wrapper-image' src={productData.image} alt={productData.name} />
                </div>

                <div className='productPage-content__wrapper'>

                    <div className="productPage__content">
                        <Title size={3}>{productData.name}</Title>

                        <p className='productPage__content-prices'>
                            {
                                new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD'
                                }).format(productData.price*quantity)
                            }
                        </p>

                        <Paragraph>{productData.info}</Paragraph>
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
                        <button type='button' className='button form-button' onClick={handleAddToCart}>Add to cart</button>

                    </div>
                </div>

            </section>

            <article className='productPage-btns__wrapper container'>
                <div className='productPage-btns__block'>
                    <button className='productPage-btns green' onClick={() => setActiveTab('description')}>Product Description</button>
                    <button className='productPage-btns productPage-btns__transparent green' onClick={() => setActiveTab('additional_info')}>Additional Info</button>
                </div>

                <div className='productPage-btns__desc'>
                    <Paragraph>{activeTab === 'description' ? productData.description : productData.additional_info}</Paragraph>
                </div>

            </article>


        </div>
    );

}


