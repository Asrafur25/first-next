import Image from "next/image";
import React from "react";
import image from "../../images/img_drink_food.png";

const home = () => {
  return (
    <div>
      <Image src={image} alt="nothing to show"></Image>
    </div>
  );
};

export default home;
