import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../css/Navbar.css"
import { Pagination } from "swiper/modules";
import Navbar from "./Navbar";
import rsv1 from "../img/rsv1.JPG";
import rsv2 from "../img/rsv2.JPG";
import rsv3 from "../img/rsv3.JPG";
import resume from "../img/resume.png";
import { useState } from "react";
function Aboutme() {
  const [isOpen, setIsOpen] = useState(false);

  // ฟังก์ชันเปิด modal
  const openModal = () => {
    setIsOpen(true);
  };

  // ฟังก์ชันปิด modal
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="m-[30px] fade-in" >
      <Navbar />

      <div className="text m-[30px] text-center">
        <div className="container mx-auto p-5">
          <span className="font-bold">
            My nickname is Ball. I am currently pursuing a Bachelor’s degree in
            Computer Science at Maejo University
          </span>
          <span>
            {" "}
            and seeking an internship or entry-level position in web application
            development. I am eager to learn and grow in a challenging work
            environment. I have foundational knowledge in programming languages
            such as C++, Java, Python, PHP, and JavaScript, along with
            experience in Vue.js, Laravel, and Tailwind CSS. Additionally, I
            possess basic knowledge of Amazon Cloud services, including Amazon
            S3, AWS Lambda, Amazon API Gateway, Amazon DynamoDB, and Amazon
            Transcribe, and I can write in MQL5.
          </span>
        </div>

        <div className="box1 flex gap-36 m-[30px] ">
          <div className=" w-full md:w-[700px]">
            {" "}
            {/* กำหนดความสูงและความกว้างเป็น 550px */}
            <Swiper
              spaceBetween={30} // ระยะห่างระหว่าง Slide
              pagination={{
                clickable: true, // ทำให้ Pagination คลิกได้
              }}
              modules={[Pagination]} 
              className="mySwiper" 
            >
              <SwiperSlide>
                <img
                  className="rounded-lg shadow-md"
                  src={rsv1}
                  alt="Slide 1"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="rounded-lg shadow-md"
                  src={rsv2}
                  alt="Slide 2"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="rounded-lg shadow-md"
                  src={rsv3}
                  alt="Slide 3"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="rounded-lg shadow-md"
                  src="https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/337383801_548909733779099_5271504567097779605_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEfHw2-xLXBX9-SQIaeb68gs9hMA8W_vvqz2EwDxb---kl4qo1_TlTTac0-R0zqmzsEqIbZaUwuFlUWQQ6czI0b&_nc_ohc=WpnghVGASLgQ7kNvgFtNy6N&_nc_ht=scontent.fbkk29-1.fna&_nc_gid=AZExtAIy1phmiaFY1rK37ak&oh=00_AYCAiYTWxYlP2477PtCZ9inv_fv4k822D_Nkx-lFmtmtuw&oe=66F9A996"
                  alt="Slide 4"
                />
              </SwiperSlide>

              <SwiperSlide>
                <img
                  className="rounded-lg shadow-md"
                  src="https://scontent.fbkk29-6.fna.fbcdn.net/v/t39.30808-6/432771971_2189362514743766_2321747341027324001_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGcILBsjC_NYXKeGvp9SgP-OkmlA3rPUM06SaUDes9Qzcva1OwjLv9ISXd0kz51mVN3drPV9x-duNEzs5m9oPVi&_nc_ohc=yUqJfz7TajgQ7kNvgFtThC2&_nc_ht=scontent.fbkk29-6.fna&_nc_gid=AHVF7otnroKRCtFlQjVzmSS&oh=00_AYA_Cd0ohCl88CRW2qfs-MEOx5QVo4giQXyXiWRLrBTfeA&oe=66F9B728"
                  alt="Slide 5"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="rounded-lg shadow-md"
                  src="https://scontent.fbkk29-8.fna.fbcdn.net/v/t39.30808-6/432769674_2189362444743773_1362134487164146191_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEUSwLH7Sd9jjdzjgpRI8SWMc9FrSg2y0sxz0WtKDbLS8vQUrKjj9eV2ezDE_zJJHr0wf4Or9LNsJkQDwA16XCr&_nc_ohc=V7Jve6D1zuwQ7kNvgFgG4hH&_nc_ht=scontent.fbkk29-8.fna&_nc_gid=AlkT2RCTkxjtVSWALOaoF1n&oh=00_AYA1ftzleuQhSCilB5TVm32DatVbh68gOM0s3esfm5m7kQ&oe=66F9BD00"
                  alt="Slide 6"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="rounded-lg shadow-md"
                  src="https://scontent.fbkk29-5.fna.fbcdn.net/v/t39.30808-6/432784081_2189362524743765_1217518121898354148_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGaee4g69p3IN9D0XsK9LDRomT60qQuVi2iZPrSpC5WLX1gNA9IUzJGT2MUv1NF3nVUZYseF9PAvvOcc8JkN1G-&_nc_ohc=G-61X5SNIokQ7kNvgErC5kF&_nc_ht=scontent.fbkk29-5.fna&oh=00_AYDakOv7bt0n4r05b464UnfPnS3BAGSFLHflz8RVxRx-VQ&oe=66F98EEC"
                  alt="Slide 7"
                />
              </SwiperSlide>

             
            </Swiper>
          </div>

          <div className="text-all ">
            <div className="border-container border-4 border-dashed  border-neutral-300  p-6 ">
              <div className="text1">
                <h3 className="font-bold text-[36px] leading-tight">
                  Education
                </h3>
                <p className="font-bold text-[22px]">Maejo University</p>
                <p className="text-[18px]">Bachelor of computer science</p>
                <p className="text-[18px]">2022-present</p>
              </div>
              <div className="text2 mt-5">
                <h3 className="font-bold text-[22px]">RangseeVittaya School</h3>
                <p className="text-[18px]">Computer science</p>
                <p className="text-[18px]">2013-2021</p>
              </div>
            </div>
            <button
              onClick={openModal}
              type="button"
              className="text-white mt-3 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Resume
            </button>

            {/* Modal */}
            {isOpen && (
              <div
                id="static-modal"
                className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
              >
                <div className="relative p-4 w-full max-w-2xl max-h-full bg-white rounded-lg shadow dark:bg-gray-700">
                  {/* Header ของ Modal */}
                  <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Resume
                    </h3>
                    {/* ปุ่ม Close */}
                    <button
                      onClick={closeModal}
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>

                  {/* Body ของ Modal */}
                  <div className="p-4 space-y-4 flex justify-center">
                    <a
                      href="https://drive.google.com/file/d/125gt-iR-9wmrqKmVOdKNPDCt-EMGM8HA/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={resume}
                        width={350}
                        height={450}
                        alt=""
                        srcset=""
                        className="transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" 
                      />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

     

      
      <div className="another m-8 p-6 bg-white rounded-lg shadow-md">
        <div className="Hobby mb-8">
          <h3 className="font-extrabold text-[36px] text-center text-gray-800 mb-4">
            Hobbies
          </h3>
          <p className="text-gray-600 text-[18px] leading-relaxed text-center">
          I enjoy reading books, watching movies, and participating in sports, especially swimming.
          </p>
        </div>

        <div className="contact bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-semibold text-[32px] leading-tight text-gray-800 mb-4 border-b-2 border-gray-300 pb-2 text-center">
            Contact
          </h3>
          <div className="flex justify-center items-center ">
            <a
              href="mailto:sarayut.aiamaurai@gmail.com"
              className="bg-lime-500 text-white py-2 px-6 rounded-md shadow transition duration-300 hover:bg-lime-400 m-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gmail
            </a>
            <a
              href="https://www.youtube.com/@gooddayb6397"
              className="bg-red-500 text-white py-2 px-6 rounded-md shadow transition duration-300 hover:bg-red-400 m-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
            <a
              href="https://www.youtube.com/@gooddayb6397"
              className="bg-cyan-500 text-white py-2 px-6 rounded-md shadow transition duration-300 hover:bg-cyan-400 m-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/SarayutBz"
              className="bg-neutral-800 text-white py-2 px-6 rounded-md shadow transition duration-300 hover:bg-neutral-500 m-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Aboutme;
