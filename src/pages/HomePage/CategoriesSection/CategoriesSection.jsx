import './CategoriesSection.scss';
import Span from '../../../components/Span/Span';
import Title from '../../../components/Title/Title';
import {NavButton} from '../../../components/Buttons/Buttons';
import {useEffect, useState, useCallback} from "react";
import axios from "axios";
import ProductCard from '../../../components/ProductCard/ProductCard';

function CategoriesSection () {
    const [data, setData] = useState({});
    const [randomProducts, setRandomProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/data/data.json");
                setData(response.data);
            } catch (error) {
                console.log("Error fetching data", error);
            }
        };
        fetchData();
    },[])

    const getRandomProducts = useCallback(() => {
        if (data && data.categories) {
            let randomCategoryData = [];

            for (const category of data.categories) {
                randomCategoryData = [...randomCategoryData, ...category.items];
            }

            randomCategoryData.sort(() => Math.random() - 0.5);

            return randomCategoryData;
        }
        return [];
    }, [data]);

    useEffect(() => {
        setRandomProducts(getRandomProducts());
    }, [getRandomProducts])

    const getCategoryName = (itemId) => {
        for (const category of data.categories) {
            const foundItem = category.items.find(item => item.id === itemId);
            if (foundItem) {
                return category.name;
            }
        }
        return "";
    };

    return (
        <section className="categories">
            <div className="container">
                <div className="categories__content">
                    <Span addClasses="categories__span">Categories</Span>
                    <Title addClasses="categories__title" size={2}>Our Products</Title>
                    <div className="categories__wrapper">
                        {randomProducts.slice(0, 8).map((item) => (
                            <ProductCard key={item.id} data={item} category={getCategoryName(item.id)} />
                        ))}
                    </div>
                    <NavButton to="/products" text="Load more" className="upload-btn button green"></NavButton>
                </div>
            </div>
        </section>
    )
}

export default CategoriesSection;