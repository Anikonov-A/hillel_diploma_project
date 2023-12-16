import './Search.scss';
import {useState , useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {scrollTop} from "../../../../common/scrollFunction";


function Search() {
    const [state,setState] = useState({
        searchData:[],
        searchTerm:'',
        productList:[],
        listVisible:false
    })
    function operationWithSearch(){
        scrollTop();
        setState(prevState => ({
            ...prevState,
            listVisible: false
        }));
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
            const filteredProducts = filterProducts(state.searchTerm, state.searchData,state.listVisible);
            setState(prevState => ({
                ...prevState,
                productList:filteredProducts
            }));
        }, 300);

        return () => clearTimeout(debounce);
    }, [state.searchTerm, state.searchData, state.listVisible]);

    const filterProducts = (searchText, listOfCategories) => {
        if (!searchText) {
            setState(prevState => ({
                ...prevState,
                listVisible: false
            }));
            return []
        }
        setState(prevState => ({
            ...prevState,
            listVisible: true
        }));
        return listOfCategories.reduce((acc, category) => {
            const filteredItems = category.items.filter(({ name }) =>
                name.toLowerCase().includes(searchText.toLowerCase())
            );
            return [...acc, ...filteredItems];
        }, []);
    };

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
                    <ul className={state.listVisible ? 'visible' : 'hidden'}  >
                        {state.productList.length > 0 ? (
                            state.productList.map((product, index) => (
                                <li key={index}>
                                    <Link to={`/products/${product.category}/${product.name.toLowerCase()}`} onClick={operationWithSearch}>
                                        <div className="product__wrapper">
                                            <img className="product__image" src={product.image} alt={product.name}/>
                                            <div className="product__name">{product.name}</div>
                                            <div className="product__price">{`$${product.price}`}</div>
                                        </div>
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