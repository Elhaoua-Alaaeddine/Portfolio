import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Experience</h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-700"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            <div className="relative pl-24">
              {/* Timeline dot */}
              <div className="absolute left-[29px] w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>
              {/* Content */}
              <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-blue-400" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-white">B.S. in Computer Science</h3>
                    <p className="text-sm text-blue-400">2019 - 2023</p>
                  </div>
                </div>
                <p className="text-gray-400">
                  University Name
                  <br />
                  GPA: 3.8/4.0
                  <br />
                  • Dean's List: All Semesters
                  <br />
                  • Computer Science Student Association Member
                </p>
              </div>
            </div>

            <div className="relative pl-24">
              <div className="absolute left-[29px] w-4 h-4 bg-green-500 rounded-full border-4 border-gray-900"></div>
              <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-green-400" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Software Engineering Intern</h3>
                    <p className="text-sm text-green-400">June 2023 - August 2023</p>
                  </div>
                </div>
                <p className="text-gray-400">
                  Company Name
                  <br />
                  • Developed and maintained web applications using React and Node.js
                  <br />
                  • Collaborated with cross-functional teams on feature implementation
                  <br />
                  • Improved application performance by 40%
                </p>
              </div>
            </div>

            <div className="relative pl-24">
              <div className="absolute left-[29px] w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900"></div>
              <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-purple-400" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Software Development Intern</h3>
                    <p className="text-sm text-purple-400">June 2022 - August 2022</p>
                  </div>
                </div>
                <p className="text-gray-400">
                  Company Name
                  <br />
                  • Built and deployed microservices using Spring Boot
                  <br />
                  • Implemented automated testing solutions
                  <br />
                  • Reduced API response time by 25%
                </p>
              </div>
            </div>

            <div className="relative pl-24">
              <div className="absolute left-[29px] w-4 h-4 bg-orange-500 rounded-full border-4 border-gray-900"></div>
              <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-orange-400" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Teaching Assistant</h3>
                    <p className="text-sm text-orange-400">2021 - 2023 (Part-time)</p>
                  </div>
                </div>
                <p className="text-gray-400">
                  University Name
                  <br />
                  • Assisted 50+ students with web development concepts
                  <br />
                  • Led weekly lab sessions and code reviews
                  <br />
                  • Created supplementary learning materials
                </p>
              </div>
            </div>

            <div className="relative pl-24">
              <div className="absolute left-[29px] w-4 h-4 bg-pink-500 rounded-full border-4 border-gray-900"></div>
              <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-pink-400" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Graphic Designer & Video Editor</h3>
                    <p className="text-sm text-pink-400">2020 - 2022 (Part-time)</p>
                  </div>
                </div>
                <p className="text-gray-400">
                  Company Name
                  <br />
                  • Created engaging visual content for social media
                  <br />
                  • Produced and edited promotional videos
                  <br />
                  • Managed brand identity across platforms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}