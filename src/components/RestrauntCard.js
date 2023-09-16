import { CDN_URL } from "../utils/Constant";


export const RestrauntCard = (props) => {
  
 const {data}=props;

const {cloudinaryImageId,name,avgRating}=data;

  console.log("useeffect called");
    return (
      <div className="m-4 p-4 w-[200px] bg-pink-300 rounded-lg sm:bg-pink-600 lg:bg-pink-800 hover:bg-red-500" >
        <img src={CDN_URL+cloudinaryImageId} alt="restraunt image" className="rounded-lg"/>
        <h2 className="font-bold py-4 text-lg">{name}</h2>
        {/* <h3>{cuisines.join(", ")}</h3> */}
        <h4>{avgRating}starts</h4>
      </div>
    );
  };

  export const withHighRatingLabel = (RestrauntCard)=>{
    return(props)=>{
      return(<div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">High rating</label>
        <RestrauntCard {...props}/>
      </div>)
    }
  }