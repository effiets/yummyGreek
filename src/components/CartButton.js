import { Button } from "react-bootstrap";
import "./CartButton.css";


function CartButton(props) {



  return (
    <Button className="btn_cart text-dark" href="/order">
      <span className="me-2">
        <img alt="basket" src="/basket2.svg"></img>
      </span>
      Cart {props.cart?.length}
    </Button>
  );
}

export default CartButton;
