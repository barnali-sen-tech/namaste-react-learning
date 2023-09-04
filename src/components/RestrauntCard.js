import { CDN_URL } from "../utils/Constant";


export const RestrauntCard = (props) => {
  
 const {data}=props;

const {cloudinaryImageId,name,avgRating}=data;

  console.log("useeffect called");
    return (
      <div className="card">
        <img src={CDN_URL+cloudinaryImageId} alt="restraunt image" />
        <h2>{name}</h2>
        {/* <h3>{cuisines.join(", ")}</h3> */}
        <h4>{avgRating}starts</h4>
      </div>
    );
  };