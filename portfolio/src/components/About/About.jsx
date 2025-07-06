import React from "react";
import { TypeAnimation } from "react-type-animation";
const About = () => {
  return (
    <div id="About" className="scroll-smooth scroll-mt-40 flex justify-items-center p-20">
      <div className="flex justify-between items-center">
        <div className=" text-white">
          <h1 className="text-6xl font-extrabold mb-4">Hi, I am</h1>
          <h1 className="text-7xl font-extrabold mb-4 text-purple-700 text-shadow-md text-shadow-white">
            Sajid Saleem
          </h1>
          <h3 className="text-3xl font-extrabold mb-4">
            I am a{" "}
            <span className="text-purple-700 ">
              <TypeAnimation
                sequence={[
                  "Computer Engineer 💻", // types this
                  2000, // waits 2s
                  "Coder", // types this
                  2000, // waits 2s
                  "Frontend Developer 🌐",
                  2000,
                  "Tech Enthusiast 🚀",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
                cursor={true}
              />
            </span>
          </h3>

          <p className="w-2/3 mb-8 text-gray-300">
            I’m a 3rd-year Computer Engineering student at Jamia Millia Islamia, passionate about building real-world projects and exploring new technologies. This portfolio showcases my skills, project work, and academic journey in software development.
          </p>
          <a href="/files/Blank_Resume_Sajid.pdf"
          download>
            <button className="bg-purple-600 p-4 rounded-3xl shadow-purple-500/30 shadow-lg text-shadow-md text-shadow-black hover:bg-purple-500 hover:text-shadow-amber-100/20 hover:text-white cursor-pointer">
            Download CV
          </button>
          </a>
        </div>
        <div className="">
          <h1>Image</h1>
          <img
            src="https://media.istockphoto.com/id/1289411982/photo/cyber-security-web-development-and-work-in-it-concept.jpg?s=1024x1024&w=is&k=20&c=N1rb-2617cvdBJ6gWrwC-A7zzjQOYWK4xBg-A7JRD1s="
            alt="Image"
            className="rounded-4xl shadow-2xl shadow-purple-500/30"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
