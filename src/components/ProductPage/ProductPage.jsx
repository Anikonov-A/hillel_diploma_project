import './ProductPage.scss';
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchDataAsync} from "../../store/slices/categoriesSlice";
import {useSelector} from "react-redux";

function ProductPage () {
    const { category, productName } = useParams();
    const navigate = useNavigate();
    const { data } = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchDataAsync());
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();

        // Переместите navigate внутрь useEffect
        const currentCategory = data.categories?.find((cat) => cat.name.toLowerCase() === category.toLowerCase());
        const currentProduct = currentCategory?.items?.find((product) => product.name.toLowerCase() === productName.toLowerCase());

        if (!currentProduct) {
            navigate('/error');
        }
    }, [dispatch, navigate, data, category, productName]);


    return (
        <div className="product__name">{productName}</div>
    )
}

export default ProductPage;