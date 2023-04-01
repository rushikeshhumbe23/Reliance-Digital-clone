import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../Sliders/ProductCard";
import style from "./SwiperEx.module.css";

export default ({ Data1, Data2, Img1, Img2, text1, text2 }) => {
  return (
    <>
      <div className={style.st}>
        <p>{text1}</p>
        <button className={style.View_all}>View all</button>
      </div>
      <div className={style.Swiper_cont}>
        <div>
          <img className="" width="100%" src={Img1} alt="tv_images" />
        </div>
        <div style={{ width: "80%" }}>
          <div style={{ width: "100%" }}>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={50}
              slidesPerView={4}
              navigation
              autoplay={{ delay: 2000 }}
            >
              {Data1.map((ele, i) => (
                <SwiperSlide key={i + 1}>
                  <ProductCard key={i + 1} {...ele} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className={style.st}>
        <p>{text2}</p>
        <button className={style.View_all}>View all</button>
      </div>

      <div className={style.Swiper_cont}>
        <div style={{ width: "80%" }}>
          <div style={{ width: "100%" }}>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
              spaceBetween={50}
              slidesPerView={4}
              navigation
              autoplay={{ delay: 2000 }}
            >
              {Data2.map((ele, i) => (
                <SwiperSlide key={i + 1}>
                  <ProductCard key={i + 1} {...ele} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div>
          <img className="" width="100%" src={Img2} alt="tv_images" />
        </div>
      </div>
    </>
  );
};
