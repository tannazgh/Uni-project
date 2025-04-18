import img from "../../dist/images/studyhere/img1.png";

const Studyhere = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <hr />
      <br />
      <br />
      <div className="flex flex-col lg:flex-row gap-8 mb-16">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">Study Here</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Find extraordinary campuses, a variety of student support and
            innovative programs, opportunities and experiences at Ulethbridge.
          </p>
          <a
            href="https://www.ulethbridge.ca/admissions"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            Admissions
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>

        {/* کارت‌های سمت راست */}
        <div className="flex-1 grid md:grid-cols-2 gap-6">
          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body">
              <h2 className="card-title text-xl mb-4">Undergraduate Studies</h2>
              <h3 className="text-gray-600 mb-6">
                Choose from more than 150 degree, certificate and diploma
                programs.
              </h3>
              <div className="card-actions">
                <button className="btn btn-primary w-full">
                  Explore Programs
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body">
              <h2 className="card-title text-xl mb-4">Graduate Studies</h2>
              <p className="text-gray-600 mb-6">
                Choose from more than 70 master’s, certificate, diploma and
                doctoral programs.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary w-full">
                  Explore Programs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* بخش تصویر */}
      <div>
        <img src={img} alt="Ulethbridge campuses" />
      </div>
      <br />
      <br />

      {/* بخش کارت‌های پایینی */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Lethbridge Campus</h2>
            <h3 className="text-gray-600 mb-6">
              Located in the city of Lethbridge, the main ULethbridge Campus
              combines breathtaking natural beauty with cutting edge learning
              and research facilities.
            </h3>
            <div className="card-actions flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary flex-1">Campus Life</button>
              <button className="btn btn-outline btn-primary flex-1">
                Virtual Tour
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">ULethbridge in Calgary</h2>
            <p className="text-gray-600 text-bold mb-6">
              Flexible undergraduate and graduate programs with evening,
              weekend, online and blended delivery options for all types of
              students.
            </p>
            <div className="card-actions flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary flex-1">Calgary Campus</button>
              <button className="btn btn-outline btn-primary flex-1">
                Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />
    </div>
  );
};

export default Studyhere;
