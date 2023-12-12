import './CategoryProducts.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCategoryDataAsync, setSortBy, setSortedProducts } from '@/store/slices/categorySlice';
import SortForm from '../../../components/SortForm/SortForm';
import ProductCard from '../../../components/ProductCard/ProductCard';

function CategoryProducts() {
    const { category } = useParams();
    const dispatch = useDispatch();
    const { data, sortBy, sortedProducts } = useSelector((state) => state.category);

    useEffect(() => {
        dispatch(fetchCategoryDataAsync());
    }, [dispatch]);

    useEffect(() => {
        if (data && data.categories) {
            const categoryData = data.categories.find((cat) => cat.name.toLowerCase() === category.toLowerCase());

            if (categoryData) {
                let sortedCategoryData = [...categoryData.items];

                if (sortBy === 'lowToHigh') {
                    sortedCategoryData.sort((a, b) => a.price - b.price);
                } else if (sortBy === 'highToLow') {
                    sortedCategoryData.sort((a, b) => b.price - a.price);
                } else {
                    sortedCategoryData.sort(() => Math.random() - 0.5);
                }

                dispatch(setSortedProducts(sortedCategoryData));
            }
        }
    }, [sortBy, data, category, dispatch]);

    const handleSortChange = (value) => {
        dispatch(setSortBy(value));
    };

    const getCategoryName = (itemId) => {
        if (!data || !data.categories) {
            return '';
        }

        for (const category of data.categories) {
            const foundItem = category.items.find((item) => item.id === itemId);
            if (foundItem) {
                return category.name;
            }
        }

        return '';
    };

    if (!data || !data.categories) {
        return null;
    }

    return (
        <section className="category__products">
            <div className="container">
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