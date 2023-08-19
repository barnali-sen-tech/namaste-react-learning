import { RestrauntList } from "./Constant";
import { RestrauntCard } from "./RestrauntCard";

import { useState } from "react";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [searchClicked, setSearchClicked] = useState("false");
  const [resturants, setResturants] = useState(RestrauntList);

  const filterData =(searchText, resturants)=>{
    const data = resturants.filter((item)=>
      item.name.includes(searchText))
    return data;
  }


  return (
    <>
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
            const data = filterData(searchText,resturants)
            setResturants(data)
          }
        }
        >
          search
        </button>
      </div>

      <div className="restraunt-list">
        {resturants.map((item) => {
          return <RestrauntCard {...item} key={item.id} />;
        })}

        {/* <RestrauntCard {...RestrauntList[0]}/>
        <RestrauntCard {...RestrauntList[1]}/>
        <RestrauntCard {...RestrauntList[2]}/>
        <RestrauntCard {...RestrauntList[3]}/> */}
        {/* <RestrauntCard resturant={RestrauntList[0]}/>
        <RestrauntCard resturant={RestrauntList[1]}/>
        <RestrauntCard resturant={RestrauntList[2]}/>
        <RestrauntCard resturant={RestrauntList[3]}/> */}
      </div>
    </>
  );
};

export default Body;
