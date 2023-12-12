import './ProductsSection.scss';
import { useEffect} from "react";
// import Title from '@/components/Title/Title';
import SortForm from '@/components/SortForm/SortForm';
import ProductCard from '@/components/ProductCard/ProductCard';
import {useDispatch, useSelector} from "react-redux";
import {fetchProductsAsync, setSortBy, setSortedProducts} from "@/store/slices/productsSlice";

function ProductsSection() {
    const dispatch = useDispatch();
    const { data, sortBy, sortedProducts } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProductsAsync());
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
            <div className="container">
                {/*<Title size={2} addClasses="products__title">*/}
                {/*    All Products*/}
                {/*</Title>*/}

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