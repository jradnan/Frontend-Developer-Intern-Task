const FoodCard = ({ foods }) => {


  const { ImageUrl, Name } = foods;

  return (
    <div>
      <div>
        <figure>
          <img
            className="object-cover object-center w-full h-72 rounded-md"
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
