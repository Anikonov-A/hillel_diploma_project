import './CategoryPage.scss';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StyleGuide from "@/components/StyleGuide/StyleGuide";
import CategoryProducts from "./CategoryProducts/CategoryProducts";
import axios from "axios";

function CategoryPage() {
    const { category } = useParams();
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
            } catch (error) {
                navigate('/error');
            }
        };

        fetchData();
    }, [category, navigate]);

    return (
        <div className="wrapper bg-category">
            <StyleGuide titleText={category} backgroundClass="bg-about_us" />
            <CategoryProducts />
        </div>
    );
}

export default CategoryPage;
