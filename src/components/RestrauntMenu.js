
// import { MENU_URL } from "../utils/Constant";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestrauntMenu = () => {
  
  const {restaurantId} = useParams();

const resInfo = useRestrauntMenu(restaurantId)

const [showIndex, setShowIndex] = useState()
  

  if(resInfo===null)return <Shimmer/>

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
    c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  return (
    <div className="text-center">
    <h1 className="font-bold my-6 text-2xl"> {name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")}-{costForTwoMessage}
      </p>
      <ul>
        {/* <li>{itemCards[0]?.card?.info?.name}</li> */}

        {/* {itemCards.map((item) => (
          <li>
            {item.card?.info?.name}-{item.card?.info?.price / 100}
          </li>
        ))} */}

        {categories.map((category,index)=><RestaurantCategory 
        data={category?.card?.card}
        showItems={showIndex===index?true:false}
        setShowIndex={()=>setShowIndex(index)}
        />)}
      </ul>
    </div>
  );
};
export default RestrauntMenu;
