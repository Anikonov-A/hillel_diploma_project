import './SortForm.scss';

function SortForm ({ sortBy, onSortChange }) {
    const handleSortChange = (event) => {
        onSortChange(event.target.value);
    };
    return (
        <form className="sort__form">
            <label className="sort__form-label" htmlFor="sort-selected">Sort by: </label>
            <select className="sort__form-select" name="" id="sort-selected" onChange={handleSortChange} value={sortBy}>
                <option value="random">Choose sort type:</option>
                <option value="lowToHigh">Price: (Low to High)</option>
                <option value="highToLow">Price: (High to Low)</option>
            </select>
        </form>
    )
}

export default SortForm;