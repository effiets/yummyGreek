import { Button, Form, FormGroup } from "react-bootstrap";
import "./FoodFilter.css"

function FoodFilter(props) {
  const handlePrice = (e) => {
    const check = e.target.value;
    props.priceFilter(check);
  };

  const handleDietery = (e) => {
    const check = e.target.value;

    props.dieteryFilter(check);
  };

  const handleAllergies = (e) => {
    const check = e.target.value;

    props.allergyFilter(check);
  };

  return (
    <Form>
      <div className="d-inline-flex me-4">
        <FormGroup className="d-flex flex-column bd-highlight mb-3">
          <Form.Label className="me-4 ">Price:</Form.Label>
          <Form.Check
            inline
            label="Under 10$"
            name="price"
            type="radio"
            value="10"
            selected
            onChange={handlePrice}
          />
          <Form.Check
            inline
            label="10$-20$"
            name="price"
            type="radio"
            value="20"
            onChange={handlePrice}
          />
          <Form.Check
            inline
            label="20$-30$"
            name="price"
            type="radio"
            value="30"
            onChange={handlePrice}
          />
          <Form.Check
            inline
            label="30$-40$"
            name="price"
            type="radio"
            value="40"
            onChange={handlePrice}
          />
          <Form.Check
            inline
            label="Over 40$"
            name="price"
            type="radio"
            value="50"
            onChange={handlePrice}
          />
        </FormGroup>
      </div>
      <div className="d-inline-flex me-4">
        <FormGroup className="d-flex flex-column bd-highlight mb-3">
          <Form.Label className="me-4 col">Dietery Preferencies:</Form.Label>
          <Form.Check
            inline
            label="Vegan"
            name="diet"
            type="radio"
            value="vegan"
            onChange={handleDietery}
          />
          <Form.Check
            inline
            label="Gluten-free"
            name="diet"
            type="radio"
            value="gluten-free"
            onChange={handleDietery}
          />
          <Form.Check
            inline
            label="Lactose-free"
            name="diet"
            type="radio"
            value="lactose-free"
            onChange={handleDietery}
          />
          <Form.Check
            inline
            label="Nut-free"
            name="diet"
            type="radio"
            value="nut-free"
            onChange={handleDietery}
          />
        </FormGroup>
      </div>
      <div className="d-inline-flex me-4">
        <FormGroup className="d-flex flex-column bd-highlight mb-3">
          <Form.Label className="me-4 font-weight-bold">Allergies:</Form.Label>
          <Form.Check
            inline
            label="Contains Nuts"
            name="allergies"
            type="radio"
            value="contains-nuts"
            onChange={handleAllergies}
          />
          <Form.Check
            inline
            label="Contains Gluten"
            name="allergies"
            type="radio"
            value="contains-gluten"
            onChange={handleAllergies}
          />
          <Form.Check
            inline
            label="Contains lactose"
            name="allergies"
            type="radio"
            value="contains-lactose"
            onChange={handleAllergies}
          />
          <Form.Check
            inline
            label="Other Allergens"
            name="allergies"
            type="radio"
            value="other"
            onChange={handleAllergies}
          />

          <Form.Check
            inline
            label="Allergen-free"
            name="allergies"
            type="radio"
            value="allergen-free"
            onChange={handleAllergies}
          />
        </FormGroup>
      </div>
      <div className="btn-style">
      <Button className="btn btn-warning w-100" onClick={props.clearFilters}>
        Clear Filters
      </Button></div>
    </Form>
  );
}

export default FoodFilter;
