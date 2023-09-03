import Link from "next/link";
import React from "react";
import { FONT } from "@/constant";
import { Experience } from "@/data";

export default function Experiences() {
  return (
    <section className={`max-width experiences ${FONT.Poppins}`}>
      <h1 className={` ${FONT.Heading}`}> Job Experience </h1>
      <div className="wrapper">
        {Experience.map((exp) => (
          <div key={exp.id} className="exp">
            <h5>{exp.title}</h5>
            <p className={FONT.montserratNorm}>{exp.titledes}</p>
            <p className={FONT.montserratNorm}>{exp.des1}</p>
            <Link className="link white-btn" href={`/${exp.id}`}>
              Learn More {">"}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
