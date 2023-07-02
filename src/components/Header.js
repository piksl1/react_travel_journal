import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEarthAmerica,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faEarthAmerica} />
      <p>my travel journal.</p>
    </div>
  );
};

export default Header;
