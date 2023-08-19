


export const RestrauntCard = ({ name, cusines, rating, image }) => {
    return (
      <div className="card">
        <img src={image} alt="restraunt image" />
        <h2>{name}</h2>
        <h3>{cusines.join(", ")}</h3>
        <h4>{rating}starts</h4>
      </div>
    );
  };