import React from "react";

function Portfolio() {
  return (
    // Main Container: Full screen height, light background
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10 rounded-xl">
      {/* Header Section: Name and Title */}
      <header className="mb-10 text-center border-b pb-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-cyan-950 tracking-tight">
          Osric Jacobs
        </h1>
        <p className="text-xl text-gray-600 mt-2">
          BCom Information Systems Student
        </p>
      </header>
      {/* Main Content Layout: Two-column grid on medium screens and up */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column (Span 2): Summary and Experience */}
        <div className="md:col-span-2 space-y-10">
          {/* Summary Section */}
          <section className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-cyan-700 mb-4 border-b pb-2">
              Profile
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              I am a dedicated and organised BCom Information Systems student at
              Stellenbosch University, passionate about leveraging my skills to
              make a meaningful impact. With a strong foundation in Microsoft
              Office, Google Workspace, data entry, and Delphi programming, I
              bring solid technical proficiency to my work.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              I have intermediate expertise in Adobe Photoshop and Illustrator,
              supported by hands-on experience as a digital photographer. I am
              currently expanding my web development capabilities by building
              responsive websites using HTML, CSS, and JavaScript, while
              developing experience in React and Tailwind CSS to create modern,
              dynamic user interfaces.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Bilingual in English and Afrikaans, I communicate effectively in
              diverse settings. I pride myself on being detail-oriented,
              hardworking, and adaptable, thriving both independently and within
              a team environment.
            </p>
          </section>
          {/* Experience Section */}
          <section className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-cyan-700 mb-6 border-b pb-2">
              Experience
            </h2>

            <div className="mb-6 border-l-4 border-cyan-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900">
                House Committee Member
              </h3>
              <p className="text-sm text-gray-500">
                Helshoogte Residence | Stellenbosch, South Africa | September
                2025 - August 2026
              </p>
              <p className="text-gray-700 mt-2">
                Portfolio Management: Connect, Gym and Sport.
              </p>
            </div>
            <div className="mb-6 border-l-4 border-cyan-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Audio Data Collection
              </h3>
              <p className="text-sm text-gray-500">
                TELUS Digital AI Data Solutions | South Africa (remote) |
                November 2024 (1 month)
              </p>
              <p className="text-gray-700 mt-2">
                Recorded utterances for voice recognition software used in
                Google Gemini.
              </p>
            </div>
          </section>
          {/* Certifications Section */}
          <section className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-cyan-700 mb-4 border-b pb-2">
              Certifications
            </h2>
            <div className="mb-6 border-l-4 border-cyan-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Career essentials in Business Analysis
              </h3>
              <p className="text-sm text-gray-500">
                Issued by Microsoft and LinkedIn | December 2024
              </p>

              <p className="text-gray-700 mt-2">
                Skills: Business Analysis, Requirements gathering, Project
                Management.
              </p>
            </div>
          </section>
        </div>
        {/* Right Column (Span 1): Skills, Education, Certifications, and Achievements */}
        <div className="md:col-span-1 space-y-10">
          {/* Top Skills Section */}
          <section className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-cyan-700 mb-4 border-b pb-2">
              Top Skills
            </h2>
            <div className="flex flex-wrap gap-1">
              <span className="skill-tag">HTML,</span>
              <span className="skill-tag">Cascading Style Sheets (CSS),</span>
              <span className="skill-tag">JavaScript,</span>
              <span className="skill-tag">Figma (Software),</span>
              <span className="skill-tag">React,</span>
              <span className="skill-tag">Tailwind CSS,</span>
              <span className="skill-tag">Delphi programming,</span>
              <span className="skill-tag">Adobe Photoshop,</span>
              <span className="skill-tag">Microsoft Office</span>
            </div>
          </section>
          {/* Education Section */}

          <section className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-cyan-700 mb-4 border-b pb-2">
              Education
            </h2>
            {/* Education Item 1: Stellenbosch University */}
            <div className="mb-6 border-l-4 border-cyan-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Stellenbosch University
              </h3>
              <p className="text-gray-700">
                Bachelor of Commerce - BCom, Information Systems Management
              </p>
              <p className="text-sm text-gray-500">
                January 2024 - November 2026{" "}
              </p>
            </div>
            {/* Education Item 2: Worcester Gymnasium */}
            <div className="mb-6 border-l-4 border-cyan-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Worcester Gymnasium
              </h3>
              <p className="text-gray-700">National Senior Certificate</p>
              <p className="text-sm text-gray-500">
                January 2019 - November 2023
              </p>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-cyan-700 mb-4 border-b pb-2">
              Achievements & Leadership
            </h2>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li>House Committee Member (2026)</li>
              <li>Honorary Colours for Academics (2022, 2023)</li>
              <li>Best Achiever in Information Technology (2021, 2023)</li>
              <li>Merit Achievement in Math Olympiad (2021)</li>
              <li>Representative Council of Learners (2023)</li>
            </ul>
          </section>
        </div>
      </div>
      {/* Hidden Utility for Skill Tags (Define a custom component style) */}
      <style jsx>{`
        .skill-tag {
          @apply text-xs font-medium bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full;
        }
      `}</style>
    </div>
  );
}

export default Portfolio;
