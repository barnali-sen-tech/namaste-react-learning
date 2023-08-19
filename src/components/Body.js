import { RestrauntList } from "./Constant";
import { RestrauntCard } from "./RestrauntCard";


const Body = () => {
    return (
      <div className="restraunt-list">
        {RestrauntList.map((item) => {
          return <RestrauntCard {...item} key={item.id}/>;
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
    );
  };
  
export default Body;  