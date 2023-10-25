

const Banner = () => {
    return (
        <section>
            <div className="hero h-[200px] xl:h-[467px] 2xl:h-[560px]" style={{ backgroundImage: 'url("https://i.ibb.co/NrvG1pp/image.png")' }}>
                <div className="hero-overlay bg-white bg-opacity-10"></div>
                <div className="hero-content text-center">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-3xl md:text-5xl font-bold">Hello Well Wisher</h1>
                        <h3 className="text-base md:text-xl uppercase my-3 font-semibold">Browse | Add to cart | Buy</h3>
                        <p className="mb-5 text-sm md:text-base">Welcome to root, an online brand shopping store. All branded items at one place.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;