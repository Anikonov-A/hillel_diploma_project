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

/*

    ==============================================================================
    useEffect(() => {
        const isValidCategory = data.categories && data.categories.some((cat) => cat.name.toLowerCase() === category.toLowerCase());

        if (!loading && !isValidCategory && data.categories) {
            navigate('/error');
        }
    }, [loading, data, category, navigate]);

    //Above is the way I have tried to write some code connected with showing ErrorPage when manually typing the unexisting category name. I also added
    //loading state to categoriesSlice, used useSelector, but I had not managed to do the same with ProductPage. So, I have chosen another way.
*/