import './ProductPage.scss';
import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";


function ProductPage() {
    const {productName,category} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/data/data.json');
                const result = response.data;

                if (!result || !result.categories) {
                    navigate('/error');
                }

                const isValidCategory = result.categories.some((cat) => cat.name.toLowerCase() === category.toLowerCase());

                if (!isValidCategory) {
                    navigate('/error');
                }

                const categoryData = result.categories.find((cat) => cat.name.toLowerCase() === category.toLowerCase());
                const isValidProduct = categoryData && categoryData.items && categoryData.items.some((item) => item.name.toLowerCase() === productName.toLowerCase());

                if (!isValidProduct) {
                    //console.error('Product not found', productName);
                    navigate('/error');
                }
            } catch (error) {
                navigate('/error');
            }
        };

        fetchData();
    }, [category, productName, navigate]);



    return (
        <div className="product__name">{productName}</div>
    );
}

export default ProductPage;



