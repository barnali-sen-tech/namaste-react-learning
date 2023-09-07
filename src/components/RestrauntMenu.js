import { useState, useEffect } from "react";

const RestrauntMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId=278225&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json?.data);
  };

  const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info

  const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}-{costForTwoMessage}</p>
      <ul>
        {/* <li>{itemCards[0]?.card?.info?.name}</li> */}
        {itemCards.map((item)=><li>{item.card?.info?.name}-{item.card?.info?.price/100}</li>)}
      </ul> 
    </div>
  );
};
export default RestrauntMenu;
