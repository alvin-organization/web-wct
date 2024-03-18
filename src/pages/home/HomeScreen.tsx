import AppLayout from "../../layout/AppLayout";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight, FaTv } from "react-icons/fa";
import { SliderGroup } from "../../components/slider/Slider";
import { LabelCategory } from "../../components/label/LabelInput";
import "./HomeScreen.scss";

const HomeScreen: React.FC = () => {
  // Slider settings
  const settings = {
    dots: true,
    arrows: false,
    arrowsClass: "",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "custom-dots",
  };

  const sliderRef = useRef<Slider>(null);

  const handlePrevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNextSlide = () => {
    sliderRef.current?.slickNext();
  };
  return (
    <AppLayout>
      <div className="container-home">
        <div className="container-slider">
          <div className="btn-arrow">
            <button onClick={handlePrevSlide}>
              <FaAngleLeft className="arrow-slide" />
            </button>
          </div>
          <Slider ref={sliderRef} {...settings} className="silder">
            <div className="silder-group">
              <a href="moviewatch">
                <img
                  className="silder-image"
                  src="https://i0.wp.com/thebftonline.com/wp-content/uploads/2022/09/mnet-movies-spiderman-kv-scaled.jpg?fit=2560%2C1392&ssl=1"
                  alt="Slide 1"
                />
              </a>
              <div className="silder-over-image">
                <span className="silder-over-title">Titanic</span>
                <span className="silder-over-text">
                  In Japan in the year 1600, at the dawn of a century-defining
                  civil war, Lord Yoshii Toranaga is fighting for his life as
                  his enemies on the Council of Regents unite against him, when
                  a mysterious European ship is found marooned in a nearby
                  fishing village.
                </span>
                <div className="silder-over-box">
                  <span className="box-title">
                    Genre : <a href="#">Comandy</a>
                  </span>
                  <span className="box-title">
                    Duration: <span>120min</span>
                  </span>
                  <span className="box-title">
                    Relese: <span>2023</span>
                  </span>
                  <span className="box-title">
                    IMBs: <span className="sub-imbs">6.2</span>
                  </span>
                </div>
                <a href="moviewatch" className="btn-watch">
                  <FaTv style={{ marginRight: "8px" }} /> Watching Now
                </a>
              </div>
            </div>
            <SliderGroup
              imageUrl="https://media.themoviedb.org/t/p/w780/cyecB7godJ6kNHGONFjUyVN9OX5.jpg"
              title="Titanic"
              description="In Japan in the year 1600, at the dawn of a century-defining civil war, Lord Yoshii Toranaga is fighting for his life as his enemies on the Council of Regents unite against him, when a mysterious European ship is found marooned in a nearby fishing village."
              genre="Comandy"
              duration="120min"
              releaseYear="2023"
              imdb="6.2"
            />
          </Slider>
          <div className="btn-arrow">
            <button onClick={handleNextSlide}>
              <FaAngleRight className="arrow-slide" />
            </button>
          </div>
        </div>
        <div className="conatiner-movie">
          <LabelCategory htmlFor="popluar" textLabel="Popluar" />
        </div>
      </div>
    </AppLayout>
  );
};

export default HomeScreen;
