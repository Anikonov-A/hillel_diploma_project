import './ShopPage.scss'
import StyleGuide from "../../components/StyleGuide/StyleGuide";
import ProductsSection from './ProductsSection/ProductsSection';
function ShopPage() {
    return (
        <div className="wrapper">
            <StyleGuide titleText="Shop" backgroundClass="bg-shop"/>
            <ProductsSection></ProductsSection>
        </div>
    )
}

export default ShopPage;