import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const RecomendedFood = () => {
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
    <div className="py-20">
      <h1 className="text-2xl ml-2 mb-2">Recommended</h1>
      <Slider {...settings}>
        {foodData.map((item) => (
          <div key={item.Id}>
            <figure>
              <img
                className="object-cover object-center w-full h-72 rounded-md"
                src={item.ImageUrl}
                alt={item.Name}
                // Set a specific width for the image
              />
            </figure>
            <div>
              <h2 className="text-center">{item.Name}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecomendedFood;
