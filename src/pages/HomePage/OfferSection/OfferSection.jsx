import './OfferSection.scss';
import Span from '../../../components/Span/Span';
import Title from '../../../components/Title/Title';
import {NavButton} from '../../../components/Buttons/Buttons';
import {useEffect, useState} from "react";
import axios from "axios";
import ProductCard from './ProductCard/ProductCard';

function OfferSection({ category }) {
    const [data, setData] = useState({});
    const [categoryData, setCategoryData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/data.json");
                setData(response.data);
                const selectedCategory = response.data.categories.find(
                    (cat) => cat.name === category
                );

                if (selectedCategory) {
                    setCategoryData(selectedCategory.items);
                }
            } catch (error) {
                console.log("Error fetching data", error);
            }
        };

        fetchData();
    }, [category]);

    if (!data || !categoryData.length) {
        return <p>Loading...</p>;
    }

    const shuffledCategoryData = categoryData.sort(() => Math.random() - 0.5);

    return (
        <section className="offer">
            <div className="container">
                <Span>Offer</Span>
                <div className="offer__wrapper">
                    <Title addClasses="offer__title" size={2}>
                        We Offer Organic {category}
                    </Title>
                    <NavButton
                        to={`/products/${category.toLowerCase()}`}
                        className="offer__products-link button yellow-on-green"
                        text={`View All ${category}`}
                    />
                </div>
                <div className="offer__products-wrapper">
                    {shuffledCategoryData.slice(0, 4).map((item) => (
                        <ProductCard key={item.id} data={item} category={category} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OfferSection;







