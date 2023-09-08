import { useState, useEffect } from "react";
// import { MENU_URL } from "../utils/Constant";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestrauntMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {restaurantId} = useParams();


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId="+restaurantId);
    const json = await data.json();
    setResInfo(json?.data);
  };
  if(resInfo===null)return <Shimmer/>

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")}-{costForTwoMessage}
      </p>
      <ul>
        {/* <li>{itemCards[0]?.card?.info?.name}</li> */}
        {itemCards.map((item) => (
          <li>
            {item.card?.info?.name}-{item.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestrauntMenu;
