import React from "react";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <div id="About" className="scroll-smooth scroll-mt-40 flex justify-items-center px-4 py-14 sm:px-8 sm:py-20 lg:px-20">
      <div className="flex w-full flex-col-reverse items-center justify-between gap-10 lg:flex-row">
        <div className="w-full text-center text-white lg:w-3/5 lg:text-left">
          <h1 className="text-4xl font-extrabold mb-4 sm:text-5xl lg:text-6xl">Hi, I am</h1>
          <h1 className="text-5xl font-extrabold mb-4 text-purple-500 text-shadow-sm text-shadow-white sm:text-6xl lg:text-7xl">
            Sajid Saleem
          </h1>
          <h3 className="text-2xl font-extrabold mb-4 min-h-10 sm:text-3xl">
            I am a{" "}
            <span className="text-purple-500 text-shadow-2xs text-shadow-cyan-500">
              <TypeAnimation
                sequence={[
                  "Computer Engineer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "ML/AI Enthusiast",
                  2000,
                  "RAG Application Builder",
                  2000,
                  "Machine Learning Learner",
                  2000,
                  "Agentic AI Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
                cursor={true}
              />
            </span>
          </h3>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg lg:mx-0">
            I am a 4th-year Computer Engineering student at Jamia Millia Islamia,
            passionate about building real-world projects, exploring new
            technologies, and growing in AI/machine learning. This portfolio
            showcases my skills, project work, and academic journey in software
            development.
          </p>
          <a href="/files/Resume_Sajid.pdf" download>
            <button className="rounded-3xl border border-cyan-300/40 bg-linear-to-r from-slate-950 via-blue-900 to-purple-800 p-4 font-bold text-white shadow-lg shadow-cyan-500/20 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-none hover:bg-black hover:text-white hover:shadow-2xl hover:shadow-white/20">
              Download CV
            </button>
          </a>
        </div>
        <div className="w-full lg:w-2/5">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
            alt="Developer coding on a laptop with software and AI analytics on screen"
            className="mx-auto h-72 w-full max-w-md rounded-4xl object-cover object-center shadow-2xl shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-400/30 sm:h-96 lg:h-[30rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
