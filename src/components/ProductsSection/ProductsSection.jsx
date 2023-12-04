import './ProductsSection.scss';
import { useEffect, useState } from "react";
import axios from "axios";
import Title from '../Title/Title';
import SortForm from '../SortForm/SortForm';
import ProductCard from '../ProductCard/ProductCard';

function ProductsSection() {
    const [data, setData] = useState({});
    const [sortBy, setSortBy] = useState("random");
    const [sortedProducts, setSortedProducts] = useState([]);

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
    }, []);

    const getCategoryName = (itemId) => {
        for (const category of data.categories) {
            const foundItem = category.items.find(item => item.id === itemId);
            if (foundItem) {
                return category.name;
            }
        }
        return "";
    };

    useEffect(() => {
        if (data && data.categories) {
            let sortedCategoryData = [];

            if (sortBy === "lowToHigh") {

                for (const category of data.categories) {
                    sortedCategoryData = [...sortedCategoryData, ...category.items];
                }
                sortedCategoryData.sort((a, b) => a.price - b.price);
            } else if (sortBy === "highToLow") {

                for (const category of data.categories) {
                    sortedCategoryData = [...sortedCategoryData, ...category.items];
                }
                sortedCategoryData.sort((a, b) => b.price - a.price);
            } else {

                for (const category of data.categories) {
                    sortedCategoryData = [...sortedCategoryData, ...category.items];
                }
                sortedCategoryData.sort(() => Math.random() - 0.5);
            }

            setSortedProducts(sortedCategoryData);
        }
    }, [sortBy, data]);

    const handleSortChange = (value) => {
        setSortBy(value);
    };

    return (
        <section className="products">
            <div className="container">
                <Title size={2} addClasses="products__title">Our Products</Title>

                <SortForm sortBy={sortBy} onSortChange={handleSortChange} />

                <div className="products__wrapper">
                    {sortedProducts.map((item) => (
                        <ProductCard key={item.id} data={item} category={getCategoryName(item.id)} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductsSection;
