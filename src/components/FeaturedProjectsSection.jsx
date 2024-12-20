import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import xboxAppImg from "../../public/laptop and mobile xbox (1).png";
import adminAppImg from "../../public/laptop and mobile Admin.png";
import foodieAppImg from "../../public/laptop and Resto foodie.png";
const data = [
  {
    imagePath: foodieAppImg,
    title: "Foodie - Online Food Delivery App",
    description:
      "Developed a full-stack online food ordering platform with a responsive frontend using React.js and Tailwind CSS. Built robust backend architecture with Node.js, Express, and MySql for secure and efficient data management. Implemented features like a cart system with a single-restaurant order restriction, enhancing user experience.",
    tech: ["Javascript", "React", "Tailwind", "Node.js", "Express.js", "MySql"],
  },
  {
    imagePath: adminAppImg,
    title: "Admin Dashboard for Ecommerce Store",
    description:
      "Created a feature-rich admin panel for managing eCommerce operations with a responsive frontend built in React.js and ShadCN UI. Developed backend functionality using Node.js, Express, Prisma ORM, and MySQL, ensuring seamless API integrations and efficient order and inventory management. Focused on scalability and performance optimization to support smooth store operations.",
    tech: ["Javascript", "React", "Tailwind", "Firebase", "Razorpay"],
  },
  {
    imagePath: xboxAppImg,
    title: "Ecommerce Website for Gaming Consoles (X-BOX Clone)",
    description:
      "Built a React.js and Node.js-based Ecommerce platform for gaming consoles. Integrated secure JWT authentication and Razorpay for seamless payments. Achieved a user-centric design, efficient MongoDB database management. Demonstrates strong full-stack development skills",
    tech: [
      "Javascript",
      "React",
      "SCSS",
      "Node - Express.js",
      "JWT",
      "Razorpay",
    ],
  },
];

const FeaturedProjectsSection = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-16">
      <div className="md:hidden text-lg text-slate-200  backdrop-blur font-bold px-8 py-4 w-screen -mx-8 sticky top-0">
        Fetured Projects
      </div>
      <h2 className="hidden md:block text-2xl font-bold mb-8">
        Fetured Projects
      </h2>
      {data.map((element, index) => (
        <div key={index} className="md:px-4 py-6 w-100 rounded-lg">
          <img
            className=" rounded-t-lg mx-auto"
            src={element.imagePath}
            alt={element.title}
          />
          <div className="mt-4">
            <p className="font-semibold text-xl">{element.title}</p>
            <p className="mt-2 text-gray-400">{element.description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {element.tech.map((item, index) => (
              <span
                key={index}
                className="bg-cyan-950 text-cyan-300 text-sm px-4 p-1 rounded-full font-semibold"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
      <div className=" mt-4">
        <a
          className="text-cyan-400 text-lg flex items-center hover:text-cyan-600 cursor-pointer"
          onClick={() => navigate("/all-projects")}
        >
          View All Project
          <FaArrowRight size={14} className="ms-2 font-bold" />
        </a>
      </div>
    </div>
  );
};

export default FeaturedProjectsSection;
