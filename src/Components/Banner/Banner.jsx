const Banner = () => {
  return (
    <div className="lg:py-32 py-12">
      <div className="hero  lg:bg-[#F69B35] rounded-3xl ">
        <div className="hero-content flex-col-reverse lg:flex-row-reverse lg:w-[1030px]">
          <div className="bg-[#F69B35] rounded-3xl">
            <img src="https://i.ibb.co/yScCnYF/Image1.png" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black lg:text-white">
              Deliver Food To Your Door Step|
            </h1>
            <p className="py-6 lg:text-slate-200">
              Authentic Food,Quick Service,Fast Delivery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
