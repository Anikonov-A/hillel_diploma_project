import './Search.scss';
import {useState , useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


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
    // const [searchData, setSearchData] = useState([]);
    // const [searchTerm, setSearchTerm] = useState("");
    // const [productList, setProductList] = useState([]);
    const [listVisible, setListVisible] = useState(false);
    const [state,setState] = useState({
        searchData:[],
        searchTerm:'',
        productList:[],

    })



    function operationWithSearch(){
        window.scrollTo(0,0);
        setListVisible(false);
        setState(prevState => (
            {...prevState,
            searchTerm:""}
        ))
    }

    useEffect(() => {
        const fetchData = async () => {
                const response = await axios.get('/data/data.json');
                setState(prevState => ({
                    ...prevState,
                    searchData: response.data.categories
                }))
        };
        fetchData();
    }, []);

    useEffect(() => {
        const debounce = setTimeout(() => {
            const filteredProducts = filterProducts(state.searchTerm, state.searchData,setListVisible);
            setState(prevState => ({
                ...prevState,
                productList:filteredProducts
            }));
        }, 0);

        return () => clearTimeout(debounce);
    }, [state.searchTerm, state.searchData, setListVisible]);

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
                        value={state.searchTerm}
                        className="search__input"
                        onChange={(e) => setState(prevState => ({
                            ...prevState,
                            searchTerm: e.target.value
                        }))}
                        autoComplete="off"
                    />
                    <ul className={listVisible ? 'visible' : 'hidden'}  >
                        {state.productList.length > 0 ? (
                            state.productList.map((product, index) => (
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