

const Reviews = () => {
    return (
        <>
            {/* <section data-aos="zoom-in" data-aos-duration="750" */}
            <section
                className="my-12 mx-5 xl:mx-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl p-6 md:p-12 flex flex-col lg:flex-row gap-x-24">
                <div className="flex-1 flex items-center">
                    <div className="space-y-4">
                        <h2 className="text-4xl mx-auto text-white text-center font-pacifico leading-normal">
                            Super Clients Review
                        </h2>
                        <p className="text-white text-center">
                            What our customer have to say about their shopping experience with <span className="text-xl font-pacifico">root</span>.
                            <br />
                            Shop from <span className="text-xl font-pacifico">root</span> and share your experience because your voice matters.
                        </p>
                    </div>
                </div>
                {/* reviews */}
                <div className="group relative flex-1 mt-20 px-0 md:px-8 lg:px-0 lg:mt-0">
                    <div data-aos="zoom-in" className="relative mb-16 md:left-16 z-5 hover:z-20">
                        <div className="opacity-20 hover:opacity-100 p-10 rounded-lg bg-white w-11/12 md:w-9/12 mx-auto duration-150 border">
                            <img className="absolute -top-6 left-8 border-4 border-white rounded-full bg-white"
                                src="https://i.ibb.co/pJmH4Nv/client.png" alt="" />
                            <p>First time shopping form root. Very fast delivery and with proper care, I received my product without any problem at all.</p>
                            <h4 className="font-bold mt-2">Sofia Sinha</h4>
                            <div className="flex justify-end">
                                <img src="https://i.ibb.co/3R1kQNV/circles.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="absolute top-32 group-hover:z-5 z-10 ">
                        <div className="hover:!opacity-100 p-10 group-hover:opacity-20 rounded-lg bg-white w-11/12 md:w-9/12 mx-auto duration-150 border">
                            <img className="absolute -top-6 left-8 border-4 border-white rounded-full bg-white"
                                src="https://i.ibb.co/pJmH4Nv/client.png" alt="" />
                            <p>Root deserves a very good appreciation for their service and time to time fast communication system. Fully satisfied with the services they provide. Recommended to all.</p>
                            <h4 className="font-bold mt-2">Mrs. Talha Jha</h4>
                            <div className="flex justify-end">
                                <img src="https://i.ibb.co/3R1kQNV/circles.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="relative md:left-16 z-5 hover:z-20">
                        <div className="opacity-20 hover:opacity-100 p-10 rounded-lg bg-white w-11/12 md:w-9/12 mx-auto duration-150 border">
                            <img className="absolute -top-6 left-8 border-4 border-white rounded-full bg-white"
                                src="https://i.ibb.co/pJmH4Nv/client.png" alt="" />
                            <p>I have never had such good service anywhere else like root. Fully satisfactory and recommended.</p>
                            <h4 className="font-bold">Mrs. Sugandha Mishrah</h4>
                            <div className="flex justify-end">
                                <img src="https://i.ibb.co/3R1kQNV/circles.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Reviews;