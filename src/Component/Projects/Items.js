import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Rating from "./Rating";
import { useTranslation } from "react-i18next";

const Items = ({ projectItems }) => {
  const { t } = useTranslation();
  return (
    // This code snippet shows the configuration for the Swiper component. It includes pagination settings and breakpoints for different screen sizes.
    <Swiper
      pagination={{
        clickable: true,
      }}
      // The breakpoints object defines different configurations for different screen sizes.
      breakpoints={{
        540: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {projectItems.map((projectItem) => {
        const { id, img, link, sourceLink } = projectItem;
        return (
          <SwiperSlide className="project-items card card-two" key={id}>
            <div className="project-img-wrapper ">
              <a href={link}>
                <img src={img} alt="" className="project-img" />
              </a>
            </div>
            <h3 className="project-title">
              {t(`projects.${projectItem.title}`)}
            </h3>
            <Rating projectId={id} className="star" key={id} />
            <p className="project-description">
              {t("pro-des")}
              {t(`projects.${projectItem.description}`)}
            </p>
            <a href={sourceLink} className="button link">
              {t("Source Code")}
            </a>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Items;
