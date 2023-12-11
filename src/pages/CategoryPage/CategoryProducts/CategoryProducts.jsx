import './CategoryProducts.scss';
import { useEffect, useState } from "react";
import axios from "axios";
import Title from "../../../components/Title/Title";
import SortForm from "../../../components/SortForm/SortForm";
import ProductCard from "../../../components/ProductCard/ProductCard";
import {useParams} from "react-router-dom";

function CategoryProducts() {
    const { category } = useParams();
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

    function getCategoryName(itemId) {
        if (!data || !data.categories) {
            return "";
        }

        for (const category of data.categories) {
            const foundItem = category.items.find(item => item.id === itemId);
            if (foundItem) {
                return category.name;
            }
        }

        return "";
    }

    useEffect(() => {
        if (data && data.categories) {
            const categoryData = data.categories.find(cat => cat.name.toLowerCase() === category.toLowerCase());

            if (categoryData) {
                let sortedCategoryData = [...categoryData.items];

                if (sortBy === "lowToHigh") {
                    sortedCategoryData.sort((a, b) => a.price - b.price);
                } else if (sortBy === "highToLow") {
                    sortedCategoryData.sort((a, b) => b.price - a.price);
                } else {
                    sortedCategoryData.sort(() => Math.random() - 0.5);
                }

                setSortedProducts(sortedCategoryData);
            }
        }
    }, [sortBy, data, category]);

    const handleSortChange = (value) => {
        setSortBy(value);
    };

    if (!data || !data.categories) {
        return null;
    }

    return (
        <section className="category__products">
            <div className="container">
                <Title size={2} addClasses="category__products-title">{category}</Title>
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

export default CategoryProducts;