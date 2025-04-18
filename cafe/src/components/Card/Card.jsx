import image1 from "../../dist/images/Card/story1.jpeg";
import image2 from "../../dist/images/Card/story2.jpeg";
import image3 from "../../dist/images/Card/story3.jpeg";

const Card = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <h1 className="text-3xl font-bold text-blue-900 mb-8">
          ULethbridge stories
        </h1>
      </div>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
        <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <figure className="relative h-48 overflow-hidden">
            <img
              src={image1}
              alt="first story"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg font-semibold mb-2">
              Career outcomes the focus of new Experiential and Career Education
              plan
            </h2>
            <div className="card-actions justify-end w-full">
              <a
                href="#"
                className="link link-primary flex items-center gap-2s"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8-8 8-1.425-1.4 5.6-5.6z" />
                </svg>
                Plan launched
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <figure className="relative h-48 overflow-hidden">
            <img
              src={image2}
              alt="Honey bee research"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg font-semibold mb-2">
              Alberta researchers to study honey bee viruses
            </h2>
            <div className="card-actions justify-end">
              <a href="#" className="link link-primary flex items-center gap-2">
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8-8 8-1.425-1.4 5.6-5.6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <figure className="relative h-48 overflow-hidden">
            <img
              src={image3}
              alt="Dean Gallimore memorial"
              className="w-full h-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg font-semibold mb-2">
              Remembering Dean Gallimore (BMgt'84)
            </h2>
            <div className="card-actions justify-end">
              <a href="#" className="link link-primary flex items-center gap-2">
                Read More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8-8 8-1.425-1.4 5.6-5.6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <br />
      </div>
      <br />
      <div className="flex justify-center gap-6 mt-12">
        <button className="btn btn-primary px-8">More News</button>
        <button className="btn btn-outline btn-primary px-8">
          More Stories
        </button>
      </div>
      <br />
    </div>
  );
};

export default Card;
