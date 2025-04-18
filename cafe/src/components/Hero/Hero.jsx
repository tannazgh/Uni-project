const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-bold">
     
      <section className="mb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 md:mb-0">
            Events
          </h1>
          <button className="btn btn-primary px-8">
            See More Events
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
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
         
          <div className="hero rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="hero-overlay bg-opacity-60" />
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h2 className="mb-5 text-4xl font-bold">Open House 2023</h2>
                <p className="mb-5">
                  Join us for our annual campus open house and discover your
                  future at ULethbridge
                </p>
                <button className="btn btn-secondary">Register Now</button>
              </div>
            </div>
          </div>

        
          <div className="hero rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="hero-overlay bg-opacity-60" />
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h2 className="mb-5 text-4xl font-bold">Research Symposium</h2>
                <p className="mb-5">
                  Explore groundbreaking research from our faculty and students
                </p>
                <button className="btn btn-secondary">View Schedule</button>
              </div>
            </div>
          </div>
        </div>
      </section>

   
      <section className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-800">
            About ULethbridge
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Founded in 1967 on traditional Blackfoot land, the University of
            Lethbridge is home to 8,000 undergraduate and graduate students from
            around the world. With campuses in Lethbridge and Calgary, we are
            one of Canada's leading research institutions. Our Blackfoot name,
            gifted by Elder Bruce Wolf Child, is <em>Iniskim</em>, meaning
            Sacred Buffalo Stone.
          </p>
          <button className="btn btn-primary px-8">
            More About Us
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
          </button>
        </div>

        <div className="card bg-base-100 shadow-lg p-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            <ul className="menu menu-lg bg-base-100 rounded-box text-blue">
              <li>
                <a className="hover:bg-gray-100 rounded-lg p-4">
                  Calgary Campus
                </a>
              </li>
              <li>
                <a className="hover:bg-gray-100 rounded-lg p-4">
                  International Students
                </a>
              </li>
              <li>
                <a className="hover:bg-gray-100 rounded-lg p-4">
                  Indigenous Initiatives
                </a>
              </li>
              <li>
                <a className="hover:bg-gray-100 rounded-lg p-4">
                  Faculties & Schools
                </a>
              </li>
              <li>
                <a className="hover:bg-gray-100 rounded-lg p-4">
                  Research Centers
                </a>
              </li>
              <li>
                <a className="hover:bg-gray-100 rounded-lg text-blue p-4">
                  Strategic Plan
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
