import './CategoriesSection.scss';
import Span from '@/components/Span/Span';
import Title from '@/components/Title/Title';
import {NavButton} from '@/components/Buttons/Buttons';
import {useEffect} from "react";
import ProductCard from '@/components/ProductCard/ProductCard';
import {useDispatch, useSelector} from "react-redux";
import {fetchDataAsync, setRandomProducts} from "@/store/slices/categoriesSlice";

function CategoriesSection() {
    const dispatch = useDispatch();
    const { data, randomProducts } = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(fetchDataAsync());
    }, [dispatch]);

    useEffect(() => {
        const getRandomProducts = () => {
            if (data && data.categories) {
                let randomCategoryData = [];

                for (const category of data.categories) {
                    randomCategoryData = [...randomCategoryData, ...category.items];
                }

                randomCategoryData.sort(() => Math.random() - 0.5);

                return randomCategoryData;
            }
            return [];
        };

        dispatch(setRandomProducts(getRandomProducts()));
    }, [data, dispatch]);

    const getCategoryName = (itemId) => {
        for (const category of data.categories) {
            const foundItem = category.items.find((item) => item.id === itemId);
            if (foundItem) {
                return category.name;
            }
        }
        return '';
    };

    return (
        <section className="categories" >
            <div className="container">
                <div className="categories__content">
                    <Span addClasses="categories__span" anim="fade-up">Categories</Span>
                    <Title addClasses="categories__title" size={2} anim="fade-up">
                        Our Products
                    </Title>
                    <div className="categories__wrapper" data-aos="fade-up">
                        {randomProducts.slice(0, 8).map((item) => (
                            <ProductCard key={item.id} data={item} category={getCategoryName(item.id)}/>
                        ))}
                    </div>
                    <NavButton to="/products" text="Watch more" className="upload-btn button green" anim="fade-up"></NavButton>
                </div>
            </div>
        </section>
    );
}

export default CategoriesSection;