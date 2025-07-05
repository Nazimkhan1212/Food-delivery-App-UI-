import { RES_IMG } from "../utils/constants";

const RestaurantCard = ({ resData: { info } }) => {
    const {name, cuisines, costForTwo, avgRating, sla:{slaString}} = info;
    return (<div  className="flex flex-col p-2 w-[270px] h-[280px] bg-gray-100 hover:bg-gray-200 overflow-hidden rounded-lg">
    <img
      alt="logo"
      className="h-[135px] w-[260px] rounded-md"
      src={RES_IMG + info.cloudinaryImageId}
    />
    <p className="font-semibold pt-1.5">{name}</p>
    <p className="text-sm">{cuisines.join(", ")}</p>
    <p className="text-sm">{costForTwo}</p>
    <p className="text-sm">{avgRating} stars</p>
    <p className="text-sm">{slaString}</p>
  </div>
)};

export const withPromotedTag = (RestaurantCard) =>(
  (props)=>(
    <div>
      <label className="p-2 absolute text-white bg-black">Promoted</label>
      <RestaurantCard {...props} />
    </div>
  )
)

export default RestaurantCard;