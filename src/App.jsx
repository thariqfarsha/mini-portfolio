import React from "react";

function App() {
  const projects = [
    {
      title: "Fazzpay",
      desc: "E-wallet web app",
      img: "fazzpay",
      link: "https://github.com/thariqfarsha/fazzpay",
    },
    {
      title: "Tickitix",
      desc: "Online movie ticket booking web app",
      img: "tickitix",
      link: "https://github.com/thariqfarsha/tickitix-frontend",
    },
    {
      title: "itJobs",
      desc: "Hiring channel web app",
      img: "itjobs",
      link: "https://github.com/thariqfarsha/itjobs-frontend",
    },
    {
      title: "Tickitix Mobile",
      desc: "Online movie ticket booking mobile app",
      img: "tickitix-mobile",
      link: "https://github.com/thariqfarsha/tickitix-mobile",
    },
  ];
  return (
    <div className="bg-amber-100 py-10">
      {/* <p className="mb-5 text-center text-3xl font-extrabold text-sky-700">
        tf<span className="text-orange-400">.</span>
      </p> */}
      <div className="flex px-3 md:px-0 lg:container">
        <div className="mx-auto text-center md:w-2/5">
          <div className="mb-8">
            <div className="mb-4">
              <img
                src={require("./assets/img/ava.jpg")}
                alt="profile"
                className="mx-auto h-24 w-24 rounded-full object-cover object-center"
              />
            </div>
            <h1 className="mb-2 text-2xl font-bold text-gray-800">
              Thariq Farsha
            </h1>
            <a
              href="https://www.linkedin.com/in/thariqfarsha/"
              className="text-sm font-semibold text-sky-800 decoration-amber-500 decoration-2 hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 inline h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
              LinkedIn
            </a>
          </div>

          <div>
            {projects.map((project, idx) => (
              <a href={project.link} target="_blank" rel="noreferrer">
                <div className="mb-4 flex h-28 justify-between rounded-lg bg-white text-left shadow-md transition-all hover:scale-95 [&_img]:hover:scale-110">
                  <div className="flex w-2/3 flex-col justify-center p-4">
                    <h2 className="mb-1 text-xl font-semibold text-sky-800">
                      {project.title}
                    </h2>
                    <p className="text-slate-600">{project.desc}</p>
                  </div>
                  <div className="flex h-full w-1/3 self-center overflow-hidden rounded-r-lg bg-sky-800 object-cover">
                    <img
                      src={require(`./assets/img/${project.img}.png`)}
                      alt="fazzpay homepage"
                      className="my-auto ml-6 transition-all"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
