const FoodCard = ({ foods }) => {
  console.log(foods);

  const { ImageUrl, Name } = foods;

  return (
    <div>
      <div>
        <figure>
          <img
            className="object-cover object-center w-full h-60 rounded-md"
            src={ImageUrl}
            alt={Name}
            // Set a specific width for the image
          />
        </figure>
        <div>
          <h2 className="text-center">{Name}</h2>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
