import React from "react";
import { FONT } from "@/constant";
export default function Achievement() {
  return (
    <section className="achiev ">
      <div className="max-width-indi">
        {" "}
        <h1 className={FONT.Heading}>ACHIEVEMENTS & CERTIFICATE </h1>{" "}
      </div>
      <div className="ov-bg">
        <div className={`wrapper max-width ${FONT.montserratNorm}`}>
          <div className="col1">
            <p>2012-2014 Best Web design 2014 Certificate </p>
            <p>2013 -2014 -Real Estate Broker for Solana Land inc, </p>
            <p>E-commerce FBA Expert Certificate And Logistics</p>
            <p>Top Notch Digital Marketing Manager 2015</p>
            <p>Operations Manager - 2016 Certificates</p>
          </div>
          <div className="col2">
            <p>Tier 1 Pol ads August 2017 </p>
            <p>Tier 1 Commerce September 2017</p>
            <p>
              2014-2015: Excellent sales return Closing a Deal Net worth of 4
              Million
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
