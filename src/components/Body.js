import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromotedTag } from "./RestaurantCard";
import { RES_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import userContext from "../contexts/userContext";
import useFetch from "../hooks/useFetch";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const restaurants = useFetch(RES_API);
  let resInfo =
    restaurants?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;

  useEffect(() => {
    setFilteredList(resInfo);
    setResList(resInfo);
  }, [resList, resInfo]);
  const PromotedRestaurant = withPromotedTag(RestaurantCard);

  return !resList ? (
    <Shimmer />
  ) : (
    <div className="m-4">
      <div>
        <div className="flex  justify-center items-center">
          <input
            className="border border-red-500 h-10 w-80 px-4 m-2 rounded-md"
            onChange={(e) => {
              const searchedRes = resList.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(e.target.value.toLowerCase())
              );
              setFilteredList(searchedRes);
            }}
            type="text"
            placeholder="Search Restaurants"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-2 gap-10 w-[100%] h-[100%]">
        {filteredList?.map((res) => (
          <Link to={`restaurant/${res.info.id}`} key={res.info.id}>
            {res?.info?.avgRating > 4.5 ? (
              <PromotedRestaurant resData={res} />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
