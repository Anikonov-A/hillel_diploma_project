import './CategoryPage.scss';
import { useParams } from 'react-router-dom';
import StyleGuide from "@/components/StyleGuide/StyleGuide";
import CategoryProducts from "./CategoryProducts/CategoryProducts";
function CategoryPage () {
    const { category } = useParams();

    return (
        <div className="wrapper bg-category">
            <StyleGuide titleText={category} backgroundClass="bg-about_us"/>
            <CategoryProducts />
        </div>
    );
}

export default CategoryPage;