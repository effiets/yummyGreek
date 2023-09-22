import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Dish(props) {
  const updateCartHandler = () => {
    const newItem = [props.id, props.name, props.description, props.price];

    if (props.cart.length === 0) {
      props.updateHandler(newItem);
    } else {
      var temp = [...props.cart, [newItem]];
      props.updateHandler(temp);
    }
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
      <Card className="rounded-2 shadow-lg border-0">
        <img alt="" src={props.image} className="card-img-top image-size" />
        <div className="cart-body m-3">
          <h5 className="cart-title mt-2 fw-bold">{props.name}</h5>
          <h4>{props.price}$</h4>

          <a href={"/:" + props.id} className="link-info">
            Learn More...
          </a>
          <div className="d-grid">
          <Button className='btn btn-dark rounded-3 mt-5 mt-2' onClick={updateCartHandler}>Add to cart</Button>
        </div></div>
      </Card>
    </div>
  );
}

export default Dish;
