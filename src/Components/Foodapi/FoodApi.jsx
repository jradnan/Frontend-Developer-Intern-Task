import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AllFood from "./AllFood";

const FoodApi = () => {
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    fetch(
      "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
    )
      .then((res) => res.json())
      .then((data) => setFoodData(data.Items));
  }, []);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="flex justify-between mr-2">
        
        <h1 className="text-2xl ml-2 mb-2">Popular</h1>
        <h1 className="text-2xl ml-2 mb-2 text-[#F69B35] flex ">AddMore</h1>
      </div>
      <Slider {...settings}>
        {foodData.map((foods) => (
          <AllFood key={foods.Id} foods={foods}></AllFood>
        ))}
      </Slider>
    </div>
  );
};

{
  /*  */
}

export default FoodApi;
