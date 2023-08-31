import { RestrauntList } from "../utils/Constant";
import { RestrauntCard } from "./RestrauntCard";

import { useEffect, useState } from "react";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [searchClicked, setSearchClicked] = useState("false");
  const [resturants, setResturants] = useState(RestrauntList);

  useEffect(() => {
    console.log("useeffect called");
    fetchdata();
  }, []);

  const filterData = (searchText, resturants) => {
    const data = resturants.filter((item) => item.name.includes(searchText));
    return data;
  };
  console.log("hi");
  console.log("useeffect called");
  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&collection=83645&isNewCollectionFlow=true&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    console.log(json);
  };

  return (
    <>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resturants.filter((item) => {
              return item.rating > 3;
            });
            setResturants(filteredList);
          }}
        >
          Top Rated Restraunts1
        </button>
      </div>

      <div className="search-container">
        <input
          type="text"
          className="search-input"
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
            const data = filterData(searchText, resturants);
            setResturants(data);
          }}
        >
          search
        </button>
      </div>

      <div className="restraunt-list">
        {resturants.map((item) => {
          return <RestrauntCard {...item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
