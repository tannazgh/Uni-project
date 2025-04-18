import image from "../../dist/images/cover1.png";
const Cover = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center ">
        <div className="">
          <img
            src={image}
            alt="Uleth Uni"
            className="w-full h-auto max-w-6xl mx-auto object-cover"
          />
        </div>
      </div>
      <div className=" inset-0 flex items-center justify-center">
        <div className="text-center max-w-2xl transform transition-all duration-500 hover:scale-105">
          <p className="font-bold text-[24px] z-20">
            Our new strategic plan is here
          </p>
          <button className="mt-6 bg-yellow-300 text-black hover:bg-yellow-600 font-bold text-[18px] px-8 py-3 rounded-lg transition-all duration-300 hover:-translate-y-1">
            Discover What's ahead
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cover;
