import { useState, useEffect } from "react";

const useRestrauntMenu = (restaurantId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId=" +
        restaurantId
    );

    const json = await data.json();
    setResInfo(json?.data);
  };
  return resInfo;
};
export default useRestrauntMenu;
