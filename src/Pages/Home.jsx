import React from "react";
import SimpleSlider from "../components/SimpleSlider";

import { CaroselData1 } from "../Data/CaroselData";

function Home() {
  return (
    <>
      <div>
        <div
          style={{ backgroundColor: "white", width: "100%", height: "140px" }}
        ></div>

        <div>
          <img
            width="100%"
            src="https://www.reliancedigital.in/medias/IPL-Carousel-Banner-27-03-2023-02.jpg?context=bWFzdGVyfGltYWdlc3wxMDA2MzN8aW1hZ2UvanBlZ3xpbWFnZXMvaDkzL2g2NC85OTc1MTg0NDU3NzU4LmpwZ3w4NWE3YzU0Y2Q5ZGNhNzE2ZjA2MzZlZDIzYjA4NTljZWIyMzYwOWYwOThmZTQyMjE2NjdmNDEyODQ0MjIwYWMy"
            alt=""
          />
        </div>

        <SimpleSlider CaroselData1={CaroselData1} />
      </div>
    </>
  );
}

export default Home;
