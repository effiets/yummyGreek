import { Button, Card } from "react-bootstrap";

function DishDetails(props) {
  return (
    <div className="container m-auto  mt-5 mb-5">
      <Card className="bg-light border-0 shadow-lg rounded-4 mt-5 p-4">
        <div className="card-body">
          <div className="row p-5">
            <div className="m-auto">
              <h2 className="text-center fw-bold display-4 ">{props.dish.name}</h2>
            </div>
            <img alt="chicken" src={props.dish.image} />{" "}
          </div>
        </div>
        <div className="container">
          <p>{props.dish.description}</p>


        <p className="display-6">Ingredients: </p>
          <ul> 
            {props.dish.ingredients?.map((ingr) => (
              <li key={ingr}>{ingr}</li>
            ))}
          </ul>

          <p className="display-6">Dietary Preferences: </p>

          <ul>
            {Array.isArray(props.dish.tags) &&
              props.dish.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>

          <ul>
            {props.diet.allergen?.map((al) => (
              <li key={al}>{al}</li>
            ))}
          </ul>

          <ul>
            {props.diet.dietaryPreferences?.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>{" "}
        <div className="d-flex m-auto">
          <Button className='btn btn-dark rounded-3 mt-5 mt-2' href="/">Back to the menu</Button>
        </div>
      </Card>
    </div>
  );
}

export default DishDetails;
