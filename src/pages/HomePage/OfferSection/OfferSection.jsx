import './OfferSection.scss';
import Span from '../../../components/Span/Span';
import Title from '../../../components/Title/Title';
import { NavButton } from '../../../components/Buttons/Buttons';
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from '../../../components/ProductCard/ProductCard';

function OfferSection({ title }) {
    const [data, setData] = useState({});
    const [selectedCategory, setSelectedCategory] = useState({});
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/data.json");
                setData(response.data);


                const randomCategory = response.data.categories[Math.floor(Math.random() * response.data.categories.length)];

                setSelectedCategory(randomCategory);

                if (randomCategory) {
                    const shuffledCategoryData = randomCategory.items.sort(() => Math.random() - 0.5);
                    setCategoryData(shuffledCategoryData.slice(0, 4));
                }
            } catch (error) {
                console.log("Error fetching data", error);
            }
        };

        fetchData();
    }, []);

    if (!data || !selectedCategory || !categoryData.length) {
        return <p>Loading...</p>;
    }

    return (
        <section className="offer">
            <div className="container">
                <Span>Offer</Span>
                <div className="offer__wrapper">
                    <Title addClasses="offer__title" size={2}>
                        {title}
                    </Title>
                    <NavButton
                        to={`/products/${selectedCategory.name.toLowerCase()}`}
                        className="offer__products-link button yellow-on-green"
                        text="View All Products"
                    />
                </div>
                <div className="offer__products-wrapper">
                    {categoryData.map((item) => (
                        <ProductCard key={item.id} data={item} category={selectedCategory.name} />
                    ))}
                </div>
            </div>
        </section>
    );
}
export default OfferSection;







