import { CDN_URL } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action  
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-grey-200 border-b-2"
          key={item.card.info.id}
        >
          <div className="w-9/12">
            <div className="py-2 text-left">
              <span>{item.card.info.name}</span>
              <span>-₹ {item.card.info.price / 100}</span>
            </div>
            <p className="test-xs">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-16 rounded-lg bg-white shadow-lg"
                onClick={()=>handleAddItem(item)}
              >
                Add+
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
