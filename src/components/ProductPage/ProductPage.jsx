import React, {useState, useEffect} from 'react';
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
    setLoading,
    setProductData
} from "../../store/slices/productSlice";
import {addItem} from "../../store/slices/cartSlice";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ProductCard from "../ProductCard/ProductCard";

export function ProductPage() {
    const [activeTab, setActiveTab] = useState('description');
    const [quantity, setQuantity] = useState(1);
    const [relatedProducts, setRelatedProducts] = useState([]);


    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const {productName, category} = useParams();
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

    const handleAddProduct = () => {
        dispatch(addItem({...productData, quantity}));
        toast.success('Product added to cart', {
            className: "toast-modify",
            position: "top-center",
            containerId: "id3"

        });
    };
    const shuffleArray = (array) => {
        const shuffledArray = array.slice();
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
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
                const relatedProducts = result.categories
                    .filter((cat) => cat.name.toLowerCase() !== category.toLowerCase())
                    .flatMap((cat) => cat.items);

                const shuffledRelatedProducts = shuffleArray(relatedProducts);

                setRelatedProducts(shuffledRelatedProducts);


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
            <ToastContainer
                enableMultiContainer={true}
                containerId={"id3"}
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={true}
                pauseOnHover={false}
                theme="light"
                limit={3}
            />  <ToastContainer
                enableMultiContainer={true}
                containerId={"id4"}
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={true}
                pauseOnHover={false}
                theme="light"
                limit={3}
            />
            <StyleGuide titleText="Shop Single" backgroundClass="bg-shop-single"/>
            <section className='productPage-section__details container'>

                <div className="productPage-img__wrapper">
                    <span className='productPage-img__wrapper-span offer__product-category-link green'>{category}</span>
                    <img className='productPage-img__wrapper-image' src={productData.image} alt={productData.name}/>
                </div>

                <div className='productPage-content__wrapper'>
                    <div className="productPage__content">
                        <Title size={3}>{productData.name}</Title>
                        <p className='productPage__content-prices'>
                            {
                                new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD'
                                }).format(productData.price * quantity)
                            }
                        </p>
                        <Paragraph>{productData.info}</Paragraph>
                    </div>

                    <div className='productPage-controls__wrapper'>
                        <div>
                            <label className='productPage-controls__label' htmlFor='quantity'>Quantity : </label>
                            <input className='productPage-controls__input'
                                   type="number"
                                   min="1"
                                   value={quantity}
                                   onChange={handleQuantityChange}
                                   name="quantity"
                                   id="quantity"
                                   autoComplete="off"/>
                        </div>
                        <button type='button' className='button form-button' onClick={handleAddProduct}>Add to cart
                        </button>
                    </div>
                </div>

            </section>
            <article className='productPage-btns__wrapper container'>
                <div className='productPage-btns__block'>
                    <button
                        className={`pag-btn ${activeTab === 'description' ? 'btn-active' : 'btn-nonactive'}`}
                        onClick={() => handleTabClick('description')}
                    >
                        Product Description
                    </button>
                    <button
                        className={`pag-btn ${activeTab === 'additional_info' ? 'btn-active' : 'btn-nonactive'}`}
                        onClick={() => handleTabClick('additional_info')}
                    >
                        Additional Info
                    </button>
                </div>

                <div className='productPage-btns__desc'>
                    <Paragraph>{activeTab === 'description' ? productData.description : productData.additional_info}</Paragraph>
                </div>
            </article>
            <div className="related-products container">
                <Title size={3}>Related Products</Title>
                <div className="related-products__cards ">
                    {relatedProducts.slice(0,4).map((relatedProduct) => (
                        <ProductCard key={relatedProduct.id} data={relatedProduct} category={relatedProduct.category}/>
                    ))}
                </div>
            </div>

        </div>
    );

}


