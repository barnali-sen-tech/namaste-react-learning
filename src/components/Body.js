import { RestrauntList } from "../utils/Constant";
import { RestrauntCard, withHighRatingLabel } from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import { useEffect, useState, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [searchClicked, setSearchClicked] = useState("false");
  const [resturants, setResturants] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);

  useEffect(() => {
    console.log("useeffect called");
    fetchdata();
  }, []);

  // const filterData = (searchText, resturants) => {
  //   const data = resturants.filter((item) => item.name.includes(searchText));
  //   return data;
  // };
  const RestaurantCardHighRating = withHighRatingLabel(RestrauntCard);
  console.log("hi");
  console.log("useeffect called");
  const fetchdata = async () => {
    const data1 = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data1.json();

    const data2 =
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(data2);
    // const res = [data2].card.card;
    setResturants(data2);
    setFilteredRestraunts(data2);
  };
  // if(resturants.length===0){
  //   // <h1>Loading...</h1>
  //   <Shimmer/>
  // }
  const { setUserName, loggedInUser } = useContext(UserContext);
  const status = useOnlineStatus();
  if (status === false) {
    return (
      <>
        <h1>Please check your internet connection!!</h1>
      </>
    );
  }
  return resturants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex">
        <div className="m-4 p-4 items-center">
          <button
            className="px-4 py-2 bg-green-200 rounded-lg"
            onClick={() => {
              const filteredList = resturants.filter((item) => {
                return item.info.avgRating > 4.3;
              });
              setFilteredRestraunts(filteredList);
            }}
          >
            Top Rated Restraunts1
          </button>
        </div>
        <div className="m-4 p-4 items-center">
            <label>Logged In Name :</label>
          <input
            type="text"
            className="border border-solid border-black"
            placeholder="login name"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          </div>

        <div className="m-4 p-4 items-center">
          <input
            type="text"
            className="border border-solid border-black"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          {/* <h1>{searchText}</h1>
        <h1>{searchClicked}</h1> */}
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={(e) => {
              // if (searchClicked === "true") {
              //   setSearchClicked("false");
              // } else {
              //   setSearchClicked("true");
              // }
              const filteredRestaurant = resturants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestraunts(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestraunts.map((item) => {
          return (
            <Link to={"/restraunts/" + item?.info?.id} key={item.info.id}>
              {item?.info?.avgRating > 4.3 ? (
                <RestaurantCardHighRating data={item?.info} />
              ) : (
                <RestrauntCard data={item?.info} />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
