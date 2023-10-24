import { Outlet } from "react-router-dom";


const User = () => {

    return (
        <section className="relative">
            <div className="min-h-[675px] bg-gradient-to-b -my-12 from-orange-300 to-orange-200 -z-50 relative">
                <div className="text-transparent -z-40 absolute px-16 py-12 rounded-2xl bg-[#FFA04118] shadow-lg border-2 border-[#FFA04144] backdrop-blur rotate-45 top-12 left-12">1</div>
                <div className="text-transparent -z-40 absolute px-16 py-12 rounded-2xl bg-[#FFA04118] shadow-lg border-2 border-[#FFA04144] backdrop-blur rotate-45 top-12 right-1/3">2</div>
                <div className="text-transparent -z-40 absolute px-16 py-12 rounded-2xl bg-[#FFA04118] shadow-lg border-2 border-[#FFA04144] backdrop-blur -rotate-45 top-12 right-12">3</div>
                <div className="text-transparent -z-40 absolute px-16 py-12 rounded-2xl bg-[#FFA04118] shadow-lg border-2 border-[#FFA04144] backdrop-blur rotate-[135deg] top-[10%] left-[30%]">4</div>
                <div className="text-transparent -z-40 absolute px-16 py-12 rounded-2xl bg-[#FFA04118] shadow-lg border-2 border-[#FFA04144] backdrop-blur -rotate-45 top-1/3 right-[20%]">5</div>
                <div className="text-transparent -z-40 absolute px-16 py-12 rounded-2xl bg-[#FFA04118] shadow-lg border-2 border-[#FFA04144] backdrop-blur -rotate-45 bottom-[12.5%] left-1/3">6</div>
                <div className="text-transparent -z-40 absolute px-16 py-12 rounded-2xl bg-[#FFA04118] shadow-lg border-2 border-[#FFA04144] backdrop-blur -rotate-45 bottom-12 right-12">7</div>
                <div className="text-transparent -z-40 absolute px-16 py-12 rounded-2xl bg-[#FFA04118] shadow-lg border-2 border-[#FFA04144] backdrop-blur rotate-45 left-12 bottom-12">8</div>
                <div className="text-transparent -z-40 absolute px-16 py-12 rounded-2xl bg-[#FFA04118] shadow-lg border-2 border-[#FFA04144] backdrop-blur rotate-45 right-1/4 bottom-[13%]">9</div>
                <div className="text-transparent -z-40 absolute px-16 py-12 rounded-2xl bg-[#FFA04118] shadow-lg border-2 border-[#FFA04144] backdrop-blur -rotate-45 left-[41%] top-1/3">10</div>
                <div className="text-transparent -z-40 absolute px-16 py-12 rounded-2xl bg-[#FFA04118] shadow-lg border-2 border-[#FFA04144] backdrop-blur -rotate-45 top-[40%] left-[15%]">10</div>
            </div>
            <div className="flex justify-center items-center absolute top-0 bottom-0 left-0 right-0">
                <Outlet />
            </div>
        </section>
    );
};

export default User;