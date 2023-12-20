import './ProductsSection.scss';
import React, { useEffect} from "react";
import SortForm from '@/components/SortForm/SortForm';
import ProductCard from '@/components/ProductCard/ProductCard';
import {useDispatch, useSelector} from "react-redux";
import {setSortBy, setSortedProducts} from "@/store/slices/productsSlice";
import {fetchDataAsync} from "../../../store/slices/categoriesSlice";
import {ToastContainer} from "react-toastify";

function ProductsSection() {
    const dispatch = useDispatch();
    const { data, sortBy, sortedProducts } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchDataAsync());
    }, [dispatch]);

    useEffect(() => {
        if (data && data.categories) {
            let sortedCategoryData = [];

            if (sortBy === 'lowToHigh') {
                for (const category of data.categories) {
                    sortedCategoryData = [...sortedCategoryData, ...category.items];
                }
                sortedCategoryData.sort((a, b) => a.price - b.price);
            } else if (sortBy === 'highToLow') {
                for (const category of data.categories) {
                    sortedCategoryData = [...sortedCategoryData, ...category.items];
                }
                sortedCategoryData.sort((a, b) => b.price - a.price);
            } else if (sortBy === 'ascending') {
                for (const category of data.categories) {
                    sortedCategoryData = [...sortedCategoryData, ...category.items];
                }
                sortedCategoryData.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
            } else if (sortBy === 'descending') {
                for (const category of data.categories) {
                    sortedCategoryData = [...sortedCategoryData, ...category.items];
                }
                sortedCategoryData.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1);
            } else {
                for (const category of data.categories) {
                    sortedCategoryData = [...sortedCategoryData, ...category.items];
                }
                sortedCategoryData.sort(() => Math.random() - 0.5);
            }

            dispatch(setSortedProducts(sortedCategoryData));
        }
    }, [sortBy, data, dispatch]);
    const getCategoryName = (itemId) => {
        for (const category of data.categories) {
            const foundItem = category.items.find((item) => item.id === itemId);
            if (foundItem) {
                return category.name;
            }
        }
        return "";
    };

    const handleSortChange = (value) => {
        dispatch(setSortBy(value));
    };

    return (
        <section className="products">
            <ToastContainer
                enableMultiContainer={true}
                containerId={"id4"}
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={true}
                pauseOnHover={false}
                theme="light"
                limit={3}
            />
            <div className="container">
                <SortForm sortBy={sortBy} onSortChange={handleSortChange} />
                <div className="products__wrapper" data-aos="fade-up">
                    {sortedProducts.map((item) => (
                        <ProductCard key={item.id} data={item} category={getCategoryName(item.id)}/>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductsSection;