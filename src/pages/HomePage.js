import { useEffect, useState, useCallback } from "react";

import FoodFilter from "../components/FoodFilter";
import Dish from "../components/Dish";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage(props) {
  const [menu, setMenu] = useState([]);
  const [filterMenu, setFilterMenu] = useState(menu);

  const getData = useCallback(async () => {
    try {
      const response = await fetch("./data.json");
      const json = await response.json();
      setMenu(json.dishes);
      setFilterMenu(json.dishes);
    } catch (error) {
      console.log("There was an error", error);
    }
  }, []);

  const handlePriceFilter = (pr) => {
    setFilterMenu(menu);

    if (pr === "10") {
      setFilterMenu(menu.filter((p) => p.price < 10));
    }
    if (pr === "20") {
      setFilterMenu(menu.filter((p) => p.price > 10 && p.price < 20));
    }

    if (pr === "30") {
      setFilterMenu(menu.filter((p) => p.price > 20 && p.price < 30));
    }
    if (pr === "40") {
      setFilterMenu(menu.filter((p) => p.price > 30 && p.price < 40));
    }
    if (pr === "50") {
      setFilterMenu(menu.filter((p) => p.price > 40));
    }
  };

  const handleAllergyFilter = (allergy) => {
    setFilterMenu(menu);

    if (allergy === "contains-nuts") {
      setFilterMenu(
        menu.filter((al) => al.tags.allergens?.includes("contains-nuts"))
      );
    }

    if (allergy === "contains-gluten") {
      setFilterMenu(
        menu.filter((al) => al.tags.allergens?.includes("contains-gluten"))
      );
    }

    if (allergy === "contains-gluten") {
      setFilterMenu(
        menu.filter((al) => al.tags.allergens?.includes("contains-gluten"))
      );
    }

    if (allergy === "contains-lactose") {
      setFilterMenu(
        menu.filter((al) => al.tags.allergens?.includes("contains-lactose"))
      );
    }

    if (allergy === "allergen-free") {
      setFilterMenu(menu.filter((al) => al.tags.allergens?.length === 0));
    }
  };

  const handleDieteryFilter = (dietery) => {
    setFilterMenu(menu);

    if (dietery === "vegan") {
      setFilterMenu(
        menu.filter((al) => al.tags.dietaryPreferences?.includes("vegan"))
      );
    }

    if (dietery === "gluten-free") {
      setFilterMenu(
        menu.filter((al) => al.tags.dietaryPreferences?.includes("gluten-free"))
      );
    }

    if (dietery === "lactose-free") {
      setFilterMenu(
        menu.filter((al) =>
          al.tags.dietaryPreferences?.includes("lactose-free")
        )
      );
    }

    if (dietery === "nut-free") {
      setFilterMenu(
        menu.filter((al) => al.tags.dietaryPreferences?.includes("nut-free"))
      );
    }
  };
  const handleClearFilter = () => {
    setFilterMenu(menu);
  };

  useEffect(() => {
    getData();
  }, [getData]);


  return (
    <>
  
      <div className="header py-4 text-dark">
        <div className="row mb-5 text-center">
          <div className="col-12">
            <h1 className="display-2 text-white mt-3">
              Welcome to YummyGreek Restaurant
            </h1>
            <h3 className="display-6 text-white w-75 m-auto mb-4 mt-4">
              Menu:
            </h3>
          </div>
        </div>
      </div>
      <div className="container text-white display-7 mb-5">
        <FoodFilter
          priceFilter={handlePriceFilter}
          allergyFilter={handleAllergyFilter}
          dieteryFilter={handleDieteryFilter}
          clearFilters={handleClearFilter}
        />
      </div>
      <div className="container row  m-auto">
        <div className="row">
          {filterMenu.length === 0 ? (
            <p className="text-white">No Dishes with that cretertia</p>
          ) : (
            filterMenu.map((dish) => (
              <Dish
                key={dish.id}
                id={dish.id}
                name={dish.name}
                description={dish.description}
                price={dish.price}
                image={dish.image}
                tags={dish.tags}
                ingredients={dish.ingredients}
                cart = {props.newCart}
                updateHandler = {props.updateCart}
           
              />
            ))
          )}
        </div></div>
      
    </>
  );
}

export default HomePage;
