import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";

const ProjectCard = ({ title, description, Img, link, github, tag, tools }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setIsVisible(true);
    }, 10); // Delay to ensure the initial state is applied
  };

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300); // Match the duration of the close animation
  };

  const getTagColor = (tag) => {
    switch (tag) {
      case "React.js":
        return "bg-green-500";
      case "Mern-stack":
        return "bg-yellow-500";
      case "Html-css-Javascript":
        return "bg-green-500";
      default:
        return "bg-pink-500";
    }
  };

  return (
    <div className="relative group w-full h-25 sm:w-1/2 md:w-1/3 p-1 md:p-4">
      <div
        className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer py-4 hover:border-2 flex flex-col h-full"
        onClick={openModal}
      >
        <div className="flex-1">
          <img
            src={Img}
            alt={title}
            className="rounded-3xl w-full h-48 object-cover"
          />
        </div>

        <div className="px-4 mb-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>

          <div className="flex gap-0">
            <button className="px-4 text-3xl">
              <a href={github} target="_blank" rel="noopener noreferrer">
                <FaGithub color={"black"} />
              </a>
            </button>
            <button className="ml-0 mr-2 text-3xl">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <FaLocationArrow color={"red"} />
              </a>
            </button>
          </div>
        </div>
        <div className="py-1 ml-4 w-fit rounded-lg">
          <ul className="flex flex-wrap gap-2">
            {tools.map((point, index) => (
              <li
                className="bg-gray-100 text-sm px-3 py-1 rounded-md"
                key={index}
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="px-4 my-4">
          <p className="text-black-700 mb-4 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
