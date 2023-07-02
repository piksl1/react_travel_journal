import React from "react";
import "./Main.css";
import japan from "../images/japan.jfif";
import australia from "../images/Australia.jfif";
import norway from "../images/Norway.jfif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <main>
      <section>
        <img src={japan} />
        <div className="info">
          <div className="location">
            <FontAwesomeIcon icon={faLocationDot} />
            <p className="country">JAPAN</p>
            <a
              href="https://www.google.com/maps/place/Mount+Fuji/@35.3606247,138.7186086,15z/data=!4m5!3m4!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634?shorturl=1"
              className="map-link"
              target="_blank"
            >
              View on Google Maps
            </a>
          </div>
          <h2>Mount Fuji</h2>
          <small>12 Jan, 2021 - 24 Jan, 2021</small>
          <p>
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </section>
      <section>
        <img src={australia} />
        <div className="info">
          <div className="location">
            <FontAwesomeIcon icon={faLocationDot} />
            <p className="country">AUSTRALIA</p>
            <a
              href="https://www.google.com/maps/place/Sydneys+operahus/@-33.8567799,151.213108,17z/data=!3m2!4b1!5s0x6b12ae67d234a27f:0xd6d4e9380ca1e32f!4m5!3m4!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967?shorturl=1"
              className="map-link"
              target="_blank"
            >
              View on Google Maps
            </a>
          </div>
          <h2>Sydney Opera House</h2>
          <small>27 May, 2021 - 8 Jun, 2021</small>
          <p>
            The Sydney Opera House is a multi-venue performing arts centre in
            Sydney. Located on the banks of the Sydney Harbour, it is often
            regarded as one of the 20th century's most famous and distinctive
            buildings
          </p>
        </div>
      </section>
      <section>
        <img src={norway} />
        <div className="info">
          <div className="location">
            <FontAwesomeIcon icon={faLocationDot} />
            <p className="country">NORWAY</p>
            <a
              href="https://www.google.com/maps/place/Geirangerfjorden/@62.1049113,7.0051735,12z/data=!3m1!4b1!4m5!3m4!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817?shorturl=1"
              className="map-link"
              target="_blank"
            >
              View on Google Maps
            </a>
          </div>
          <h2>Geirangerfjord</h2>
          <small>01 Oct, 2021 - 18 Nov, 2021</small>
          <p>
            The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og
            Romsdal county, Norway. It is located entirely in the Stranda
            Municipality.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Main;
