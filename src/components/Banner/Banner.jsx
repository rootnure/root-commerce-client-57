const Banner = () => {
  return (
    <section>
      <div
        className="hero h-[200px] xl:h-[467px] 2xl:h-[560px]"
        style={{
          backgroundImage: 'url("https://i.ibb.co/2P4XqgP/image.png")',
        }}>
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="hero-content text-center">
          <div className="max-w-3xl text-orange-100 space-y-8">
            <h1 className="mb-5 text-3xl md:text-7xl font-bold">
              Hello Well Wisher
            </h1>
            <h3 className="text-base md:text-2xl uppercase my-3 font-bold">
              Browse | Add to cart | Buy
            </h3>
            <p className="mb-5 text-sm md:text-base lg:text-lg">
              Welcome to root commerce, an online brand shopping store.
              <br />
              All branded items at one place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
