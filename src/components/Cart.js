import { useDispatch, useSelector } from "react-redux";
import ListItem from "./ListItem";
import { cleartCart } from "../slices/cartSlice";

const Cart = ()=>{
    const dispath = useDispatch();
    const items = useSelector((store)=>store.cart.items)
    const handleClear = () =>{
        dispath(cleartCart())
    }
    return(
        <div className="p-4 text-center my-2">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button onClick={handleClear} className="p-2 m-2 bg-black text-white rounded-lg cursor-pointer">Clear Cart</button>
            {items?.length==0 && <h1 className="text-lg">Cart is empty add items in the cart!</h1>}
            <div className="w-6/12 mx-auto p-2">
                <ListItem items={items} />
            </div>

        </div>
    )
}

export default Cart;