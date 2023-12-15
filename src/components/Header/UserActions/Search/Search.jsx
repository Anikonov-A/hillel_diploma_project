import './Search.scss';
import {useState , useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {scrollTop} from "../../../../common/scrollFunction";

const filterProducts = (searchText, listOfCategories,setListVisible) => {
    if (!searchText) {
        setListVisible(false);
        return []
    }
    setListVisible(true);
    return listOfCategories.reduce((acc, category) => {
        const filteredItems = category.items.filter(({ name }) =>
            name.toLowerCase().includes(searchText.toLowerCase())
        );
        return [...acc, ...filteredItems];
    }, []);
};

function Search() {
    const [searchData, setSearchData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [productList, setProductList] = useState([]);
    const [listVisible, setListVisible] = useState(true);



    function operationWithSearch(){
        scrollTop();
        setListVisible(false);
        setSearchTerm( "");
    }

    useEffect(() => {
        const fetchData = async () => {
                const response = await axios.get('/data/data.json');
                setSearchData(response.data.categories);

        };
        fetchData();
    }, []);

    useEffect(() => {
        const debounce = setTimeout(() => {
            const filteredProducts = filterProducts(searchTerm, searchData,setListVisible);
            setProductList(filteredProducts);
        }, 300);

        return () => clearTimeout(debounce);
    }, [searchTerm, searchData, setListVisible]);

    return (
        <div className="search">
            <form className="search__form">
                <div className="search__wrapper">
                    <label htmlFor="searchInput">
                        <img src="/images/search/search.svg" alt="search-icon" />
                    </label>
                    <input
                        type="text"
                        id="searchInput"
                        value={searchTerm}
                        className="search__input"
                        onChange={(e) => setSearchTerm(e.target.value)}
                        autoComplete="off"
                    />
                    <ul className={listVisible ? 'visible' : 'hidden'}  >
                        {productList.length > 0 ? (
                            productList.map((product, index) => (
                                <li key={index}>
                                    <Link to={`/products/${product.category}/${product.name.toLowerCase()}`} onClick={operationWithSearch}>
                                        {product.name}
                                    </Link>
                                </li>
                            ))
                        ) : (
                            <li>Nothing was found</li>
                        )}
                    </ul>
                </div>
            </form>
        </div>
    );
}

export default Search;