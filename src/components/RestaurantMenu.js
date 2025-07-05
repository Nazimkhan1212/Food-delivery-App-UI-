import { useParams } from "react-router"
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants.js";
import useFetch from "../hooks/useFetch.js";
import RestaurantCategory from "./RestaurantCategory.js";
import { useState } from "react";

const RestaurantMenu = ()=>{
    const [show, setShow] = useState(false);
    const {id} = useParams();

    const resInfo = useFetch(MENU_API, id);

    if(resInfo===null) return <Shimmer/>;
    
    const {name,cuisines,costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;
    // const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card.card["@type"].includes('ItemCategory'))

    return( resInfo &&
        <div className="text-center" >
            <h1 className="font-bold my-6 text-3xl ">{name}</h1>
            <h4 className="font-bold text-2lg" >{cuisines.join(',')}-{costForTwoMessage}</h4>
            {categories.map((category,index)=>(
                <div key={index}>
                <RestaurantCategory isOpen={index===show?true:false} setShow={()=>setShow(index===show?null:index)} category={category?.card?.card}/>
                </div>
            ))}
        </div>
    )
}
export default RestaurantMenu;