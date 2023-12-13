import './CategoryPage.scss'
import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import StyleGuide from "@/components/StyleGuide/StyleGuide";
import CategoryProducts from "./CategoryProducts/CategoryProducts";
import {useSelector, useDispatch} from "react-redux";
import {fetchDataAsync} from "../../store/slices/categoriesSlice";


function CategoryPage() {
    const { category } = useParams();
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.categories);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchDataAsync());
            } catch (error) {
                console.error('Failed to fetch data:', error);
            }
        };

        fetchData();
    }, [dispatch]);

    useEffect(() => {
        const isValidCategory = data.categories && data.categories.some((cat) => cat.name.toLowerCase() === category.toLowerCase());

        if (!isValidCategory) {
            navigate('/error');
        }
    }, [data, category, navigate]);

    return (
        <div className="wrapper bg-category">
            <StyleGuide titleText={category} backgroundClass="bg-about_us" />
            <CategoryProducts />
        </div>
    );
}

export default CategoryPage;


