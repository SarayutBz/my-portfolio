import "../index.css";
import "../css/home.css";

import profile from "../img/ball.jpg";

import { Link } from "react-router-dom";
import "../css/Navbar.css"
import Navbar from "./Navbar";
import pj1 from "../img/pj1.png";
import pj2 from "../img/pj2.png";
function Home() {
  return (
    <div className="fade-in m-[30px]">
      {/* พวก menubar */}
      <Navbar />

      {/* พวก profile aboutme */}
      <div className="me m-[30px]">
        
        <div className="boxme flex justify-center">
          <img
            className="h-full w-[350px] rounded-[25%] ml-2.5"
            src={profile}
            alt=""
          />
          <div className="text text-balance text ml-[100px] mt-[100px]">
            <h3 className="font-bold text-[24px]">
              Hello, I am Sarayut Aiamaurai.
            </h3>
            <p className="text-[24px]">
              I am a third-year student in the Computer Science program at Maejo
              University, I am interested in a full-stack development position,
              as well as creating web applications.
            </p>
            <div className="button-aboutme mt-5 ">
              <Link to="/about">
                <button
                  type="button"
                  className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                >
                  <p className="border-b-2 border-black">About Me 🙂</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className="project m-[50px]">
        <div className="box-text flex justify-between items-center mb-[40px]">
          <h3 className="font-bold text-[36px] leading-tight">Projects</h3>
          <Link to="/projects">
            <p className="text-[16px] border-b-2 border-black cursor-pointer hover:text-gray-600">
              See More
            </p>
          </Link>
        </div>

        {/* First project */}
        <div className="box-project1 m-[20px] flex flex-col md:flex-row gap-[200px] mb-[60px]">
          <a
            href="https://github.com/SarayutBz/FWHUB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={pj1}
              className="transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              width={500}
              height={350}
              alt="Project Thumbnail"
            />
          </a>

          <div className="text-project1 break-words max-w-[500px] min-h-[350px]">
            <h3 className="font-bold text-[28px] mb-[15px] text-gray-800">
              FWHUB
            </h3>
            <div className="text-[20px] mb-[25px]">
              <span className="font-semibold">Role: </span>
              <span>Project Lead and Developer</span>
            </div>
            <p className="text-[18px] leading-relaxed text-gray-700">
              This project involves creating a web platform dedicated to
              aggregating and recommending free financial knowledge resources.
              The platform compiles various channels and sources of financial
              education, including MOOCs (Massive Open Online Courses), YouTube,
              TikTok, and Facebook.
            </p>
          </div>
        </div>

        {/* Second project */}
        <div className="box-project2 m-[20px] flex flex-col md:flex-row gap-[200px]">
          <div className="text-project2 break-words max-w-[500px] min-h-[350px]">
            <h3 className="font-bold text-[28px] mb-[15px] text-gray-800">
              eCommerceMarket
            </h3>
            <div className="text-[20px] mb-[25px]">
              <span className="font-semibold">Role: </span>
              <span>Project Lead and Developer</span>
            </div>
            <p className="text-[18px] leading-relaxed text-gray-700">
              This project is a small-scale online store simulation built using
              the Laravel framework. It includes basic functionalities of an
              online shop, such as user registration, login, product browsing,
              and user profile management.
            </p>
          </div>
          <a
            href="https://github.com/SarayutBz/eCommerceMarket?tab=readme-ov-file"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={pj2}
              className="transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              width={500}
              height={350}
              alt="Project Thumbnail"
            />
          </a>
        </div>
      </div>
      {/* Skills */}
      <div className="skills mt-5 m-[30px]">
        <h3 className="font-bold text-[28px] mb-[15px] text-gray-800">
          Skill / Framework / Database
        </h3>

        <div className="grid grid-cols-3 gap-6 m-[60px] text-center justify-center">
          <div className="bg-blue-400 text-[20px] text-white font-bold flex items-center justify-center h-[150px] rounded-lg">
            Python
          </div>
          <div className="bg-yellow-400 text-[20px] font-bold text-white flex items-center justify-center h-[150px] rounded-lg">
            Java
          </div>
          <div className="bg-purple-400 text-[20px] font-bold text-white flex items-center justify-center h-[150px] rounded-lg">
            PHP
          </div>

          <div className="bg-yellow-300 text-[20px] font-bold text-white flex items-center justify-center h-[150px] rounded-lg">
            C++
          </div>
          <div className="bg-teal-400 text-[20px] font-bold text-white flex items-center justify-center h-[150px] rounded-lg">
            SQL
          </div>
          <div className="bg-pink-400 text-[20px] font-bold text-white flex items-center justify-center h-[150px] rounded-lg">
            MQL5
          </div>

          <div className="bg-red-400 text-[20px] font-bold text-white flex items-center justify-center h-[150px] rounded-lg">
            Laravel
          </div>
          <div className="bg-blue-700 text-[20px] font-bold text-white flex items-center justify-center h-[150px] rounded-lg">
            React
          </div>
          <div className="bg-green-400 text-[20px] font-bold text-white flex items-center justify-center h-[150px] rounded-lg">
            Django
          </div>

          <div className="bg-lime-600 text-[20px] font-bold text-white flex items-center justify-center h-[150px] rounded-lg">
            Vue
          </div>
          <div className="bg-amber-200 text-[20px] font-bold text-white flex items-center justify-center h-[150px] rounded-lg">
            MySQL
          </div>
          <div className="bg-green-300 text-[20px] font-bold text-white flex items-center justify-center h-[150px] rounded-lg">
            MongoDB
          </div>
        </div>
      </div>
    </div>
  );
}

<script src="https://kit.fontawesome.com/a076d05399.js"></script>;
export default Home;
