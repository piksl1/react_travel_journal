import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEarthAmerica,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faEarthAmerica} />
      <FontAwesomeIcon icon={faLocationDot} />
    </div>
  );
};

export default Header;
