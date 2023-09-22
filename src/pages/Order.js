
import { Accordion, Button } from "react-bootstrap";

const DUMMY_CART = [
  {
    id: 1,
    name: "Moussaka",
    description:
      "Moussaka is a delicious and hearty traditional Greek dish with layers of thinly sliced eggplant, seasoned ground beef or lamb, and a creamy béchamel sauce. It's a beloved comfort food in Greece and is often enjoyed during special occasions and family gatherings. This savory dish is a culinary masterpiece that combines the richness of ground meat, the earthiness of eggplant, and the smoothness of béchamel sauce.",
    price: 15.99,
  },
  {
    id: 3,
    name: "Souvlaki",
    description:
      "Souvlaki is a popular Greek street food made of grilled skewers of marinated chicken or pork, served with warm pita bread and a generous dollop of tzatziki sauce. This dish is loved for its deliciously tender and flavorful meat, as well as its satisfying combination of textures and flavors.",
    price: 12.99,
  },

  {
    id: 5,
    name: "Tzatziki",
    description:
      "Tzatziki is a creamy and refreshing Greek dip made with yogurt, grated cucumber, garlic, and a blend of herbs. It's often served with pita bread or as a condiment for grilled meats. Tzatziki is beloved for its cool and tangy flavor, making it a perfect accompaniment to Mediterranean dishes.",
    price: 7.99,
  },
  {
    id: 7,
    name: "Mediterranean Pasta",
    description:
      "Mediterranean Pasta is a flavorful dish featuring pasta tossed with sun-dried tomatoes, Kalamata olives, artichoke hearts, and crumbled feta cheese. It's a Mediterranean twist on classic pasta that combines the richness of olives and tomatoes with the creaminess of feta cheese.",
    price: 14.99,
  },

  {
    id: 10,
    name: "Greek Lemon Chicken",
    description:
      "Greek Lemon Chicken is a flavorful dish featuring roasted chicken with a lemon and oregano marinade. It's typically served with roasted potatoes, creating a harmonious blend of citrusy and savory flavors.",
    price: 16.99,
  },
];

function Order() {




  return (
    <> 
      <div className="container mt-4 text-white">
       
        <h2>My Order:</h2>
        <Accordion>
          {DUMMY_CART.map((dummy) => (
            <Accordion.Item key={dummy.id}>
              <Accordion.Header>
                {dummy.name} -- {dummy.price} &
              </Accordion.Header>
              <Accordion.Body>{dummy.description}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

        <div className="me-4">
          <Button className="bg-warning me-3">
            Place your Order -- {" "}
            {DUMMY_CART.reduce(
              (accumulator, currentValue) => accumulator + currentValue.price,
              0
            )} $
            
          </Button>
        
          <Button href="/">Back to the menu</Button>
        </div>
      </div>
      
    </>
  );
}

export default Order;
