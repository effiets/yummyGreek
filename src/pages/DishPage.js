import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import DishDetails from "../components/DishDetails";

function DishPage() {
  const { dishid } = useParams();

  const [dishes, setDishes] = useState([]);
  const [diet, setDiet] = useState({});

  const getData = async () => {
    try {
      const response = await fetch("./data.json");
      const json = await response.json();
      const dishFound = json.dishes.find((dish) => `:${dish.id}` === dishid);
      setDishes(dishFound);
      setDiet(dishFound.tags);
    } catch (error) {
      console.log("There was an error", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <DishDetails dish={dishes} diet={diet} />
    </>
  );
}

export default DishPage;
