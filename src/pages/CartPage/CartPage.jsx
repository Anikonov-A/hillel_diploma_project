import './CartPage.scss'
import {NavButton} from "../../components/Buttons/Buttons";

function CartPage () {
    return (
        <div className='container feedback'>
            <NavButton className='button green' to='/contacts' text='Leave a Review'/>
        </div>
    )

}

export default CartPage;