import './CategoryPage.scss';
import { useParams } from 'react-router-dom';

function CategoryPage () {
    const { category } = useParams();

    return (
        <div className="category__name">{category}</div>
    );
}

export default CategoryPage;