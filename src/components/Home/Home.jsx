import React from "react";
import { motion } from "framer-motion";
import "./home.css"
import { Navbar } from "../exports";
import homepageImage from "../../assets/homepageimage.jpg";
import Footer from '../Footer/Footer'
const Card = ({ children, className }) => (
  <div className={`p-4 bg-white rounded-2xl shadow-md ${className}`}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-2 ${className}`}>{children}</div>
);

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <section className="relative w-full h-[600px]">
          <img className="w-full h-full object-cover" src="https://img.freepik.com/free-photo/top-view-businesswoman-analyzing-financial-graphs-statistics-drinking-coffee_482257-12332.jpg?t=st=1738339106~exp=1738342706~hmac=c6ca0bf4acf4b00d49d24b303ec01d3d9a4e2e7aa3fe6dd685ed0ebea5cc833e&w=1380" alt="Hero background" />
          <div className="absolute inset-0  bg-opacity-30 z-10 flex items-center justify-center trans">
            <div className="text-center text-white z-20">
              <h1 className="text-5xl font-bold">Welcome</h1>
              <p className="mt-4 text-lg">Discover our amazing features and services!</p>
            </div>
          </div>
        </section>


        <section className="py-12 px-4 featureSection">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Features</h2>
          <div className="grid grid-cols-4 gap-4 test">
            <div className="relative w-full h-64 transform-style-preserve-3d hover:transition-transform duration-500 cursos">
              <div className="card w-full h-full rounded-2xl overflow-hidden">
                <div
                  className="card-front w-full h-full backface-hidden bg-cover rounded-2xl"
                  style={{
                    backgroundImage: `url('https://img.freepik.com/free-photo/stylish-male-youngster-fashionable-outfit-stands-back-camera-turns-blue-wall-sticks-small-colorful-notes-putting-down-main-ideas_273609-34123.jpg?t=st=1738339536~exp=1738343136~hmac=8bd383fc08cd251e7d395a97f296f906f2be679c083bbc3333ffb9e67e67e201&w=1380')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                ></div>


                <div className="card-back w-full h-full  text-white backface-hidden flex items-center justify-center rounded-2xl transform rotate-y-180 cardbgc">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold">Task Management</h3>
                    <p className="text-gray-200">Easily create, organize, and prioritize your tasks with simple drag-and-drop functionality. Stay on top of everything with clear task labels and deadlines.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative w-full h-64 transform-style-preserve-3d hover:transition-transform duration-500 cursos">
              <div className="card w-full h-full rounded-2xl overflow-hidden">
                {/* Front Side with Image (No Text) */}
                <div
                  className="card-front w-full h-full backface-hidden bg-cover rounded-2xl"
                  style={{
                    backgroundImage: `url('https://img.freepik.com/free-vector/automatic-backup-abstract-concept-illustration_335657-3733.jpg?t=st=1738356564~exp=1738360164~hmac=4fe9394db71e5bc11cc228cf44f5b7cc470bf99db49e5bd5bf3a13c44cd8b876&w=740')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                ></div>

                {/* Back Side with Text */}
                <div className="card-back w-full h-full bg-blue-600 text-white backface-hidden flex items-center justify-center rounded-2xl transform rotate-y-180 cardbgc">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold">Real-Time Sync</h3>
                    <p className="text-gray-200">Never miss an update! Your tasks sync across all your devices in real time, so you can access your to-do list from anywhere, at any time.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative w-full h-64 transform-style-preserve-3d hover:transition-transform duration-500 cursos">
              <div className="card w-full h-full rounded-2xl overflow-hidden">
                {/* Front Side with Image (No Text) */}
                <div
                  className="card-front w-full h-full backface-hidden bg-cover rounded-2xl"
                  style={{
                    backgroundImage: `url('https://img.freepik.com/free-vector/hand-drawn-flat-new-year-s-resolutions-illustration_23-2149197403.jpg?t=st=1738356806~exp=1738360406~hmac=8dad6712697bfa5054c53597de0450ebc41d40aa2d16bdf08e8820aa360773b4&w=740')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                ></div>

                {/* Back Side with Text */}
                <div className="card-back w-full h-full bg-blue-600 text-white backface-hidden flex items-center justify-center rounded-2xl transform rotate-y-180 cardbgc">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold">Task Reminders</h3>
                    <p className="text-gray-200">Stay on schedule with automated reminders for upcoming tasks. Set due dates and get notified when it's time to get things done.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative w-full h-64 transform-style-preserve-3d hover:transition-transform duration-500 cursos">
              <div className="card w-full h-full rounded-2xl overflow-hidden">
                {/* Front Side with Image (No Text) */}
                <div
                  className="card-front w-full h-full backface-hidden bg-cover rounded-2xl"
                  style={{
                    backgroundImage: `url('https://img.freepik.com/free-photo/product-design-drawing-website-graphic_53876-120423.jpg?t=st=1738357130~exp=1738360730~hmac=c193438f273382e157562239447ecbf6079363407d45dc051d9c7cf8c8e77570&w=740')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                ></div>

                {/* Back Side with Text */}
                <div className="card-back w-full h-full bg-blue-600 text-white backface-hidden flex items-center justify-center rounded-2xl transform rotate-y-180 cardbgc">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold">Customizable Categories</h3>
                    <p className="text-gray-200">Categorize your tasks into customizable lists (e.g., Work, Personal, Shopping) for a more organized and focused approach to managing your day.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>


        <section className="py-12 px-4 padd">
          <h2 className="text-3xl font-semibold text-center mb-8">Task Management</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['To Do', 'In Progress', 'Done'].map((status, index) => (
              <div key={index} className="bg-white shadow-lg p-4 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">{status}</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((task) => (
                    <div key={task} className="p-4 bg-gray-100 rounded-lg border-l-4 border-blue-500">
                      <h4 className="text-lg font-semibold">Task {task}</h4>
                      <p className="text-sm text-gray-600">This is a task description.</p>
                      <p className="text-xs text-gray-500">Due Date: 2023-01-31</p>
                      <span className={`inline-block mt-2 text-xs font-semibold px-2 py-1 rounded ${task === 1 ? 'bg-red-500 text-white' : 'bg-yellow-300 text-black'}`}>
                        {task === 1 ? 'Urgent' : 'Pending'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
