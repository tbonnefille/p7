import React from "react";
import "../style.css";

import background from "../images/kalen_emsley_Bkci_8qcdvQ_unsplash_2.jpg";

function BannerAP() {
  return (
    <section className="section_1">
      <div
        className="banner"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(240deg, rgba(255,255,255,0.0) 0%, rgba(0,0,0,0.3) 100%), url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      ></div>
    </section>
  );
}

export default BannerAP;
