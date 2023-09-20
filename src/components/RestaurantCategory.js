import { useState } from "react";
import ItemList from "./itemList";

const RestaurantCategory = ({ data,showItems, setShowIndex }) => {

// const [showItems, setShowItems] = useState(false)

  //this func will show /hide itemlist
// const handleClick =()=>{
//   setShowItems(!showItems)
// }
const handleClick =()=>{
  setShowIndex()
}

  return (
    <div>
    <div className="w-6/12 mx-auto my-4 bg-green-50 shadow-lg p-4 ">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>

        <span>🔽</span>
       
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
    </div>
  );
};
export default RestaurantCategory;
