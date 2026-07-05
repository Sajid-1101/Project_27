import React from "react";
import employee from "../../assets/work_logo/emp-manager-management.png";
import tictactoe from "../../assets/work_logo/tictactoe.png";
import gategpt from "../../assets/work_logo/gategpt.png";

const projects = [
  {
    title: "Employee Shift Management App",
    linkLabel: "GitHub",
    link: "https://github.com/Sajid-1101/Full-Stack-Project",
    image: "https://raw.githubusercontent.com/Sajid-1101/Full-Stack-Project/main/images/DashboardViewMode.png",
    imageAlt: "Employee Shift Management dashboard preview",
    description:
      "A full-stack employee shift management application for creating, updating, and tracking employee schedules. It includes admin and user dashboards, drag-and-drop calendar scheduling, timezone-aware shift handling, authentication, and visual statistics.",
    techStack:
      "React 19, React Router, Tailwind CSS, ScheduleX, Recharts, Axios, Vite, Express.js, MongoDB, Mongoose, JWT, bcryptjs, moment-timezone",
    learningOutcomes: [
      "Built a full-stack scheduling workflow with separate frontend and backend responsibilities.",
      "Implemented JWT-based authentication and authorization for secure user access.",
      "Worked with calendar-based shift creation, editing, and visualization using ScheduleX.",
      "Managed shift and user data through REST APIs with Express, MongoDB, and Mongoose.",
      "Added statistics and chart views to make shift data easier to understand.",
    ],
  },
  {
    title: "GateGPT – Multi-Agent AI Teaching Assistant",
    linkLabel: "See Github",
    link: "https://github.com/Sajid-1101/MultiAgent-GateGPT",
    image: gategpt,
    imageAlt: "GateGPT project preview",
    description:
    "An AI-powered GATE Computer Science teaching assistant built using a Multi-Agent RAG architecture. GateGPT retrieves answers from a curated knowledge base, routes queries through specialized agents, verifies responses to reduce hallucinations, and generates accurate explanations using Gemini AI.",
    techStack:
    "Python, Flask, LangChain, FAISS, Google Gemini API, React, Vite",
    learningOutcomes: [
      "Designed and implemented a Multi-Agent Retrieval-Augmented Generation (RAG) architecture.",
      "Built specialized agents for concept retrieval, previous-year questions, query routing, and response verification.",
      "Integrated FAISS vector search with LangChain for efficient semantic retrieval.",
      "Implemented a verification pipeline to minimize hallucinations using retrieved context.",
      "Developed a React + Flask full-stack application and deployed the project on GitHub.",
    ],
  },
  {
    title: "Employee_Manager_Management",
    linkLabel: "See Live",
    link: "https://emp-manager-management.netlify.app/",
    image: employee,
    imageAlt: "Employee management project preview",
    description:
    "A web-based platform for managing company employees. It includes features like user authentication, role-based dashboards, and employee data management.\n\nAdmin Login: admin@company.com / 123\nEmployee (Sam) Login: e@c.com / 123",
    techStack: "ReactJS, TailwindCSS",
    learningOutcomes: [
      "Built a role-based Employee Management System using React.js.",
      "Implemented Admin and Employee login with conditional rendering.",
      "Used React hooks for state and lifecycle management.",
      "Handled forms and basic validation in React.",
      "Designed UI responsive for sm, md, and lg screens using CSS.",
      "Deployed the app on Netlify for live access.",
    ],
  },
  {
    title: "RAG-Based AI Teaching Assistant",
    linkLabel: "GitHub",
    link: "https://github.com/Sajid-1101/RAG-Based---AI-Teaching-Assistant",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    imageAlt: "RAG based AI teaching assistant",
    description:
      "An AI-powered teaching assistant built around Retrieval-Augmented Generation. It helps students ask subject-related questions and receive context-aware answers by retrieving relevant knowledge before generating the response.",
    techStack: "Python, Machine Learning, RAG, NLP, Embeddings, Vector Database, ReactJS",
    learningOutcomes: [
      "Learned how retrieval improves AI answer accuracy by grounding responses in relevant context.",
      "Worked with document/question retrieval flow, embeddings, and vector-based semantic search.",
      "Understood how to connect AI response generation with a student-friendly teaching interface.",
      "Improved understanding of practical RAG pipelines for educational use cases.",
    ],
  },
  
];

const Work = () => {
  const openProject = (link) => {
    window.location.assign(link);
  };

  return (
    <section
      id="Work"
      className="scroll-smooth scroll-mt-20 mb-16 px-4 sm:px-8 lg:px-20"
    >
      <h1 className="text-center text-white font-bold text-3xl">Projects</h1>
      <div className="w-28 h-1 bg-purple-700 mx-auto"></div>
      <p className="text-gray-300/50 font-semibold text-center p-4 mb-4">
        A showcase of my projects I have worked on, highlighting my skills and
        experience in various technology
      </p>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex h-[42rem] w-full flex-col rounded-2xl border-2 border-purple-700 bg-gradient-to-t from-gray-900 to-black p-4 text-white shadow-2xl shadow-purple-500/30 transition-colors hover:bg-transparent sm:h-[43rem]"
          >
            <button
              type="button"
              onClick={() => openProject(project.link)}
              className="relative z-10 block w-full cursor-pointer"
              aria-label={`Open ${project.title}`}
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                className="h-52 w-full rounded-lg border border-white object-cover shadow-2xl transition-all duration-300 hover:border-cyan-300 hover:shadow-cyan-400/30 sm:h-60"
              />
            </button>

            <h3 className="px-2 pt-4 pb-2 font-semibold break-words">
              <button
                type="button"
                onClick={() => openProject(project.link)}
                className="relative z-10 mt-2 inline-flex cursor-pointer items-center rounded-full border border-purple-400/70 bg-purple-700/20 px-4 py-2 text-sm font-bold text-purple-200 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-500/20 hover:text-cyan-200 hover:shadow-cyan-400/30"
              >
                {project.linkLabel}
              </button>
            </h3>

            <div className="min-h-0 flex-1 overflow-y-auto pr-2 text-sm leading-relaxed sm:text-base">
              <p className="p-2 text-gray-300 whitespace-pre-line">
                <span className="text-white font-medium">Description :</span>
                <br />
                {project.description}
              </p>
              <p className="p-2 text-gray-300">
                <span className="text-white font-medium">Tech Stack :</span>
                <br />
                {project.techStack}
              </p>
              <div className="p-2 text-gray-300">
                <span className="font-medium text-white">
                  Learning Outcomes :
                </span>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {project.learningOutcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Work;
