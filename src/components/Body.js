import { RestrauntList } from "../utils/Constant";
import { RestrauntCard } from "./RestrauntCard";
import Shimmer from "./Shimmer";

import { useEffect, useState } from "react";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [searchClicked, setSearchClicked] = useState("false");
  const [resturants, setResturants] = useState(RestrauntList);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);

  useEffect(() => {
    console.log("useeffect called");
    fetchdata();
  }, []);

  // const filterData = (searchText, resturants) => {
  //   const data = resturants.filter((item) => item.name.includes(searchText));
  //   return data;
  // };
  console.log("hi");
  console.log("useeffect called");
  const fetchdata = async () => {
    const data1 = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data1.json();

    const data2 =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    // console.log(data2);
    // const res = [data2].card.card;
    setResturants(data2);
    setFilteredRestraunts(data2);
  };
  // if(resturants.length===0){
  //   // <h1>Loading...</h1>
  //   <Shimmer/>
  // }

  return resturants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="filter">
        {/* <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resturants.card.card.filter((item) => {
              // return item.rating > 3;
            });
            setResturants(filteredList);
          }}
        >
          Top Rated Restraunts1
        </button> */}

        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          {/* <h1>{searchText}</h1>
        <h1>{searchClicked}</h1> */}
          <button
            className="search-btn"
            onClick={(e) => {
              // if (searchClicked === "true") {
              //   setSearchClicked("false");
              // } else {
              //   setSearchClicked("true");
              // }
              const filteredRestaurant = resturants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestraunts(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>   
      </div>
      <div className="restraunt-list">
        {filteredRestraunts.map((item) => {
          return <RestrauntCard {...item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
