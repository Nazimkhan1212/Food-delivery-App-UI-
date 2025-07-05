import { useDispatch } from "react-redux";
import { RES_IMG } from "../utils/constants";
import { addItem } from "../slices/cartSlice";

const ListItem = ({ items }) => {
  const dispatch = useDispatch();
  const handleClick = (item) =>{
    dispatch(addItem(item));
  }
  return (
    <div>
      {items.map((item,i) => (
        <div
          className="flex justify-between p-2 m-2 border-gray-200 border-b text-left"
          key={i}
        >
          <div className="w-9/12">
            <div className="py-2 ">
              <span className="font-semibold">{item?.card?.info?.name}</span>
              <span> - ₹{item?.card?.info?.price / 100}</span>
            </div>
            <div>
              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button onClick={()=>handleClick(item)} className="bg-black text-white rounded-md p-1 cursor-pointer mx-10 shadow-lg">
                Add
              </button>
            </div>
            <img
              className="w-full"
              src={RES_IMG + item?.card?.info?.imageId}
              alt={item?.card?.info?.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ListItem;
