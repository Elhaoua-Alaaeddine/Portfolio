import { Briefcase, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Experience
        </h2>
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
                    <h3 className="text-xl font-semibold text-white">
                      B.S. in Computer Science - Business Administration Minor
                    </h3>
                    <p className="text-sm text-blue-400">
                      2020 - December 2024
                    </p>
                  </div>
                </div>
                <p className="text-gray-400">
                  <b>Al Akhawayn University in Ifrane</b>
                  <br />
                  GPA: 3.78/4.0
                  <br />
                  • President's List: 2 Semesters
                  <br />
                  • Dean's List: All Other Semesters
                  <br />
                  • Mechatronics Club Member
                  <br />• 2nd Place Hack2Impact Hackathon Winner - By Huawei
                </p>
              </div>
            </div>

            <div className="relative pl-24">
              <div className="absolute left-[29px] w-4 h-4 bg-green-500 rounded-full border-4 border-gray-900"></div>
              <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-green-400" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Agile Software Engineer
                    </h3>
                    <p className="text-sm text-green-400">
                      June 2024 - August 2024 (Internship)
                    </p>
                  </div>
                </div>
                <p className="text-gray-400">
                  <b>Inwi</b>
                  <br />
                  • Led a 4-person team to replace a manual Word-based order-tracking process with a web app using Django REST, React, and MySQL.
                  <br />
                  • Mapped requirements, ensured data integrity, tracked daily progress, and managed conflicts to meet sprint deadlines.
                </p>
              </div>
            </div>

            <div className="relative pl-24">
              <div className="absolute left-[29px] w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900"></div>
              <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-purple-400" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Web Developer
                    </h3>
                    <p className="text-sm text-purple-400">
                      June 2023 - August 2023 (Internship)
                    </p>
                  </div>
                </div>
                <p className="text-gray-400">
                  <b>M-AMTM</b>
                  <br />
                  • Built a React/Firebase application replacing a paper based logistics system.
                  <br />
                  • Performed parallel control tests, documented discrepancies and remediated validation gaps.
                </p>
              </div>
            </div>

            <div className="relative pl-24">
              <div className="absolute left-[29px] w-4 h-4 bg-orange-500 rounded-full border-4 border-gray-900"></div>
              <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-orange-400" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Teaching Assistant
                    </h3>
                    <p className="text-sm text-orange-400">
                      January 2022 - June 2022 (Part-time)
                    </p>
                  </div>
                </div>
                <p className="text-gray-400">
                  <b>Al Akhawayn University in Ifrane</b>
                  <br />
                  •Assisted in Discrete Mathematics and Engineering Economics: graded assignments, held weekly office hours, and explained complex concepts to diverse student groups.
                </p>
              </div>
            </div>

            <div className="relative pl-24">
              <div className="absolute left-[29px] w-4 h-4 bg-pink-500 rounded-full border-4 border-gray-900"></div>
              <div className="p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="text-pink-400" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                    IT Specialist and WordPress Developer
                    </h3>
                    <p className="text-sm text-pink-400">
                      2020 - 2022 (Part-time)
                    </p>
                  </div>
                </div>
                <p className="text-gray-400">
                  <b>Bestmedia Digital Marketing</b>
                  <br />
                  • Installed, configured, and tested audio/video recording equipment (cameras, microphones, lighting rigs) to support the company’s content-creation workflows.
                  <br />
                  • Troubleshot hardware and software issues for all team members; diagnosing and resolving PC, laptop, and peripheral malfunctions to minimize downtime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
