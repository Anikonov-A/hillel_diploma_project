import './OfferSection.scss';
import Span from '../Span/Span';
import Title from '../Title/Title';
import { NavButton } from '../Buttons/Buttons';
import { useEffect } from "react";
import ProductCard from '../ProductCard/ProductCard';
import {useDispatch, useSelector} from "react-redux";
import {fetchOfferDataAsync, setCategoryData} from "../../store/slices/offerSlice";

function OfferSection() {
    const dispatch = useDispatch();
    const { selectedCategory, categoryData } = useSelector((state) => state.offer);

    useEffect(() => {
        dispatch(fetchOfferDataAsync());
    }, [dispatch]);

    useEffect(() => {
        if (selectedCategory && selectedCategory.items) {
            const shuffledCategoryData = [...selectedCategory.items].sort(() => Math.random() - 0.5);
            dispatch(setCategoryData(shuffledCategoryData.slice(0, 4)));
        }
    }, [selectedCategory, dispatch]);

    return (
        <section className="offer">
            <div className="container">
                <Span>Offer</Span>
                <div className="offer__wrapper">
                    <Title addClasses="offer__title" size={2}>
                        We Offer Organic For You
                    </Title>
                    <NavButton to={'/products'} className="offer__products-link button yellow-on-green" text="View All Products" />
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







