import React, { useState } from "react";
import Portfolio from "./components/portfolio";

// Component for the About Me section (Placeholder)
const AboutMe = () => (
  <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl w-full max-w-lg md:max-w-xl text-center">
    <h2 className="text-3xl font-extrabold text-cyan-950 mb-4">About Me</h2>
    <p className="text-gray-700 leading-relaxed">
      I pride myself on being detail-oriented, hardworking, and adaptable,
      qualities that allow me to excel both independently and within a
      collaborative team environment. As a BCom Information Systems student, my
      core focus is on leveraging technology to create meaningful, practical
      solutions that improve efficiency and add real value. I am committed to
      continuous learning, developing my technical abilities, and applying them
      to impactful projects and work opportunities.
    </p>
    <div className="mt-6">
      <p className="text-md text-gray-500">Contact: <a href="mailto:osricgjacobs@gmail.com">osricgjacobs@gmail.com</a></p>
      <p className="text-md text-gray-500">
        Bilingual in English and Afrikaans.
      </p>
    </div>
  </div>
);

// Component for the Home/Profile Card
const ProfileCard = () => (
  <div className="bg-white text-gray-800 p-8 sm:p-10 rounded-xl shadow-2xl w-full max-w-lg md:max-w-xl text-center">
    {/* Header/Name Section */}
    <div className="mb-6">
      <h1 className="text-4xl font-extrabold text-gray-900">Osric Jacobs</h1>
    </div>

    {/* Profile Image & Details Section */}
    <div className="flex flex-col items-center">
      {/* Profile Image: Slightly increased size */}
      <img
        src="./profile/Osric_Smile.jpg"
        alt="Picture of Osric Jacobs"
        className="w-40 h-40 object-cover rounded-full border-4 border-cyan-600 mb-6 shadow-lg"
      />

      {/* Role/Title */}
      <p className="text-xl font-medium text-cyan-600 mb-8">
        BCom Information Systems Student
      </p>

      {/* Social Icons Container */}
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/osricjacobs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./colour_icons/linkedin.png"
            alt="LinkedIn"
            className="w-10 h-10 opacity-80 hover:opacity-100 transition duration-300 cursor-pointer"
          />
        </a>
        <a
          href="https://github.com/osricgjacobs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./colour_icons/github.png"
            alt="GitHub"
            className="w-10 h-10 opacity-80 hover:opacity-100 transition duration-300 cursor-pointer"
          />
        </a>
        <a href="mailto:osricgjacobs@gmail.com">
          <img
            src="./colour_icons/gmail.png"
            alt="GMail"
            className="w-10 h-10 opacity-80 hover:opacity-100 transition duration-300 cursor-pointer"
          />
        </a>
        <a
          href="https://www.instagram.com/ozzie_j122/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./colour_icons/instagram.png"
            alt="Instagram"
            className="w-10 h-10 opacity-80 hover:opacity-100 transition duration-300 cursor-pointer"
          />
        </a>
      </div>
    </div>
  </div>
);

function App() {
  // State to manage the current visible section
  const [currentView, setCurrentView] = useState("profile"); // Default view is 'profile'

  // Helper function to dynamically apply active button styling
  const getButtonClass = (view) =>
    `text-white font-semibold transition duration-300 py-2 px-4 rounded-lg ${
      currentView === view
        ? "bg-cyan-600 hover:bg-cyan-500" // Active style
        : "bg-cyan-700 hover:bg-cyan-600" // Inactive style
    }`;

  // Function to render the correct component based on state
  const renderContent = () => {
    switch (currentView) {
      case "portfolio":
        return <Portfolio />;
      case "about":
        return <AboutMe />;
      case "profile":
      default:
        return <ProfileCard />;
    }
  };

  return (
    // Outer Container: min-h-screen, dark background, uses flex-col for header and main content
    <div className="min-h-screen bg-cyan-950 flex flex-col">
      {/* Header/Navigation Bar: Uses justify-between to space out Name (Left) and Buttons (Right) */}
      <header className="w-full p-4 bg-cyan-800 shadow-md flex justify-between items-center">
        {/* Name on Top Left: Clickable to return to profile */}
        <div
          className="text-xl font-bold text-white tracking-wider cursor-pointer hover:text-cyan-200 transition"
          onClick={() => setCurrentView("profile")}
        >
          <img
            className="w-20 h-20"
            src="./logo/ResumeLogo-w.png"
            alt="OJ logo"
          />
        </div>

        {/* Navigation Buttons Container */}
        <div className="space-x-4">
          {/* Portfolio Button: Sets state to 'portfolio' */}
          <button
            className={getButtonClass("portfolio")}
            onClick={() => setCurrentView("portfolio")}
          >
            Portfolio
          </button>

          {/* About Me Button: Sets state to 'about' */}
          <button
            className={getButtonClass("about")}
            onClick={() => setCurrentView("about")}
          >
            About Me
          </button>
        </div>
      </header>

      {/* Main Content Area: Takes remaining space and centers the card/component */}
      <main className="flex-1 flex justify-center items-center p-4">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
