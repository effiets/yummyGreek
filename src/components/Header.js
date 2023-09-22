import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Container, Navbar } from "react-bootstrap";
import CartButton from "./CartButton";

function Header(props) {
  return (
    <Navbar className=" justify-content-between header-color">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="shop.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <span className="title-logo"> YummyGreek</span>
        </Navbar.Brand>
        <CartButton  cart={props.cartOrder}/>
      </Container>
    </Navbar>
  );
}

export default Header;
