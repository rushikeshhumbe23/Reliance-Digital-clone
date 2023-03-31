import React from "react";
import SimpleSlider from "../components/Carousels/SimpleSlider";
import "../styles/Home.css";
import Slider1 from "../components/Sliders/Slider1";
import Slider2 from "../components/Sliders/Slider2";
import Slider3 from "../components/Sliders/Slider3";
import SwiperEx from "../components/Swiper/SwiperEx";
import Carosel2 from "../components/Carousels/Carosel2";
import GridCopm from "../components/GridCopm";
import { GridData2 } from "../components/Carousels/CaroselData";
import { GridData1 } from "../components/Carousels/CaroselData";
import BrandPromise from "../components/BrandPromise";
import { SwiperData1 } from "../components/Swiper/Swipersdata";
import { SwiperData2 } from "../components/Swiper/Swipersdata";
import { SwiperData3 } from "../components/Swiper/Swipersdata";
import { SwiperData4 } from "../components/Swiper/Swipersdata";
import CaroselAll from "../components/Carousels/CaroselAll";

{
  /* <SwiperEx Data1={SwiperData1} Data1={SwiperData2} Img1="" Img2="" />; */
}

function Home() {
  return (
    <>
      <div style={{ width: "100%", margin: "auto" }}>
        <div
          className="empty_div"
          // style={{ backgroundColor: "white", width: "100%", height: "140px" }}
        ></div>

        <div>
          <img
            width="100%"
            src="https://www.reliancedigital.in/medias/IPL-Carousel-Banner-27-03-2023-02.jpg?context=bWFzdGVyfGltYWdlc3wxMDA2MzN8aW1hZ2UvanBlZ3xpbWFnZXMvaDkzL2g2NC85OTc1MTg0NDU3NzU4LmpwZ3w4NWE3YzU0Y2Q5ZGNhNzE2ZjA2MzZlZDIzYjA4NTljZWIyMzYwOWYwOThmZTQyMjE2NjdmNDEyODQ0MjIwYWMy"
            alt=""
          />
        </div>
        <SimpleSlider />
        <GridCopm Data={GridData1} text="EASY EMI AND CASHBACK OFFERS" />
        <Slider1 />
        <Carosel2 />
        <GridCopm Data={GridData2} text="GREAT DEALS ON ELECTRONICS" />
        <div style={{ width: "100%" }}>
          <img
            width="100%"
            src="https://www.reliancedigital.in/medias/Pre-Summer-Sale-Carousel-Banner-Desktop.jpg?context=bWFzdGVyfGltYWdlc3w5MzYyMXxpbWFnZS9qcGVnfGltYWdlcy9oNjMvaDAxLzk5NjM4NTI2NjA3NjYuanBnfGQzNmMzZjYyNGYwNWFhOWYyNjAzNjMzYjgyYzA4YmE3ZTFlNzBhZTgwMzFkNWY0MDYyZTIwYzEzZjhjNDJjZmU"
            alt=""
          />
        </div>
        <Slider2 />
        <BrandPromise />
        <Slider3 />
        <SwiperEx
          Data1={SwiperData3}
          Data2={SwiperData4}
          Img1="https://www.reliancedigital.in/medias/AC-Pine-Offer-Small-Banner-01-03-2023.jpg?context=bWFzdGVyfGltYWdlc3wzMTA3N3xpbWFnZS9qcGVnfGltYWdlcy9oY2QvaGQ0Lzk5Njc3MTUyNTQzMDIuanBnfGY0M2RmMjhkMzZhNGM3NjEyZDNhZTNhNmM1MTllYTAzZDMxYWI0NmNlZjBhZjVjNDA0MDIzZmQ5NWY3YWRlMTQ"
          Img2="https://www.reliancedigital.in/medias/Philips-MG7715-65-Trimmer-492864867-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNTE0OXxpbWFnZS9qcGVnfGltYWdlcy9oZWIvaDdiLzk4MzE3NzM5Mjk1MDIuanBnfGRiNGVlMmNlMjdhYzdlNjQ2Mzg1MjY2ZTBkODU5OGZiZWVjZDRiZDkwMDk1MzdlMTRiOTNlMjk1OTFiYjA1NWQ"
          text1="SUMMER MEIN SUKOON SE RISHTA JODO"
          text2="PERSONAL GROOMING CARE TAKER"
        />
        <SwiperEx
          Data1={SwiperData1}
          Data2={SwiperData2}
          Img1="https://www.reliancedigital.in/medias/Best-Selling-Audio-Accessories-Producst-Carousel-02-01-2022.jpg?context=bWFzdGVyfGltYWdlc3w4MTEzMXxpbWFnZS9qcGVnfGltYWdlcy9oNDgvaGVmLzk5MzkyMDUyOTIwNjIuanBnfGY3YTBjMzVhNjMyYjAyMTZiODY4ZmRjYjU5OGU1YmJmMTgzNDYzNzY3MDFiYzkwY2NlMGIxOTI0MGRlOGEzZDI"
          Img2="https://www.reliancedigital.in/medias/Best-Selling-Laptops-Producst-Carousel-01-02-2023.jpg?context=bWFzdGVyfGltYWdlc3w0NjY5NXxpbWFnZS9qcGVnfGltYWdlcy9oNmEvaGZkLzk5NTk0OTQyNTQ2MjIuanBnfDc5NWMyNjczMTE3NzA3NjI4ODQ3MzY2OTIxMWZiNzYwZTk5NTc2NDliZWVjNzdmZWNjYzhmYzk2ZTIyMzAwMjc"
          text1="BEST DEALS ON HEADPHONES"
          text2="LAPTOPS IN OFFER"
        />
        <CaroselAll />
        <div>
          <button className="all_productBTN">Veiw All</button>
        </div>
      </div>
    </>
  );
}

export default Home;
