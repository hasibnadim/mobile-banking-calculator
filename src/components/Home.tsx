import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import bkashImg from "../assets/img/bkash.png";
import nagadImg from "../assets/img/nagad.png";
import rocketImg from "../assets/img/rocket.png";
import upayImg from "../assets/img/upay.png";
import { useEffect } from "react";
const services = [
  {
    name: "Nagad",
    url: "nagad",
    img: nagadImg,
  },
  {
    name: "BKash",
    url: "bkash",
    img: bkashImg,
  },
  {
    name: "Rocket",
    url: "rocket",
    img: rocketImg,
  },
  {
    name: "Upay",
    url: "upay",
    img: upayImg,
  },
];
const Home = () => {
  useEffect(() => {
    document.title = "Mobile Banking Calculator";
  }, []);
  return (
    <div className="main_container">
      <h4 className="text-center">Service List</h4>
      <ListGroup>
        {services.map((service, index) => (
          <Link
            className="list-group-item service_row fs-5"
            to={service.url}
            key={index}
          >
            {service.name}
            {service.img && (
              <img src={service.img} height={30} alt={service.name} />
            )}
          </Link>
        ))}
      </ListGroup>
    </div>
  );
};

export default Home;
