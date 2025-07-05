import { useState } from "react";
import ListItem from "./ListItem";

const RestaurantCategory = ({category, isOpen, setShow}) =>{
    const handleClick = ()=>{
        setShow();
    }

    return(
        <div className="w-6/12 bg-gray-50 mx-auto my-2 shadow-lg p-4 ">
        <div onClick={handleClick}  className="flex justify-between cursor-pointer ">
            <span className="font-bold text-md ">{category?.title} ({category?.itemCards?.length || category.categories.length})</span>
            {isOpen ? <span>🔻</span> :<span>🔺</span>}
        </div>
        {isOpen && <ListItem items = {category.itemCards || category.categories} />}
        </div>
    )
}
export default RestaurantCategory;