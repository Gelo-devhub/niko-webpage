import Link from "next/link";
import React from "react";
import { Poppins } from "next/font/google";
import { FONT } from "@/constant";
import Image from "next/image";
import Dp from "../../assets/images/dp.png";
import "../sass/styles.css";

const poppins = Poppins({
  weight: "900",
  subsets: ["latin"],
  display: "swap",
});

const poppinsthin = Poppins({
  weight: "200",
  subsets: ["latin"],
  display: "swap",
});

export default function Hero() {
  return (
    <div className="hero">
      <div id="hero" className=" wrapper">
        <div className="des ">
          <h5 className={poppinsthin}>Hi I am Niko</h5>
          <h1 className={poppins}>Director in marketing</h1>
          <span className="career">
            <h6>Career objective</h6>
            <p className={FONT.montserrat}>
              Work as a team effectively and more efficiently even in the
              individual tasks, Determination and hard work, also to gain more
              experience and apply them to daily work.
            </p>
          </span>
          <Link className="contact-link hover-btn" href="/Contact">
            Contact Me
          </Link>
        </div>
        <div className="img-wrap ">
          <Image className="dp" src={Dp} alt="Profile Niko Santiago" />
        </div>
      </div>
    </div>
  );
}
