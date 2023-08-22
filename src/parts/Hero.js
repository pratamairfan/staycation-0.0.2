import React from "react";

import ImageHero from "assets/images/hero/img-hero.jpg";
import ImageHeroFr from "assets/images/hero/img-hero-frame.jpg";
import IconsCam from "assets/images/icons/camera.png";
import IconsLandscape from "assets/images/icons/landscape.png";
import IconsTravel from "assets/images/icons/travel-luggage.png";
import Button from "elements/Button";

import formatNumber from "formatNumber";

export default function Hero(props) {
  // eslint-disable-next-line
  function showMostPicked(ref) {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <section className="container mx-auto">
      <div className="flex px-4">
        <div className="flex-auto" style={{ width: 250 }}>
          <h1 className="font-bold mb-3 text-[42px]">
            Forget Busy Work, <br />
            Start Next Vacation.
          </h1>
          <p className="mb-9 font-light file:text-gray-500 w-[44%]">
            We provide what you need to enjoy your holiday
            with family. Time to make another memorable
            moments.
          </p>
          <Button
            className="btn shadow px-5 transition duration-300 ease-out hover:ease-in"
            hasShadow
            isPrimary>
            Show Me Now
          </Button>
          <div className="flex w-3/4 mt-20">
            <div className="travelers">
              <img
                className="w-[20%]"
                src={IconsTravel}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className="mt-3 text-[12px]">
                {formatNumber(props.data.travelers)}{" "}
                <span className="text-gray-500 font-light">
                  Travelers
                </span>
              </h6>
            </div>
            <div className="treasures">
              <img
                className="w-[20%]"
                src={IconsCam}
                alt={`${props.data.treasures} Treasures`}
              />
              <h6 className="mt-3 text-[12px]">
                {formatNumber(props.data.treasures)}{" "}
                <span className="text-gray-500 font-light">
                  Treasures
                </span>
              </h6>
            </div>
            <div className="cities">
              <img
                className="w-[20%]"
                src={IconsLandscape}
                alt={`${props.data.cities} Cities`}
              />
              <h6 className="mt-3 text-[12px]">
                {formatNumber(props.data.cities)}{" "}
                <span className="text-gray-500 font-light">
                  Cities
                </span>
              </h6>
            </div>
          </div>
        </div>

        <div className="flex-auto">
          <div className="image-hero mt-[2rem]">
            <img
              src={ImageHero}
              alt="Room with couches"
              className="absolute max-[100%] w-[34%] z-[1]"
              style={{ margin: "-30px 0 0 -30px" }}
            />
            <img
              src={ImageHeroFr}
              alt="Room with couches frame"
              className="absolute max-[100%] w-[34%]"
              style={{ margin: "0 -15px -15px 0" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
