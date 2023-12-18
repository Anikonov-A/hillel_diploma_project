import './UserActions.scss';
import Search from './Search/Search';
import Cart from './Cart/Cart';
function UserActions () {
    return (
        <div className="user__actions">
            <Search />
            <Cart />
        </div>
    )
}

export default UserActions;
