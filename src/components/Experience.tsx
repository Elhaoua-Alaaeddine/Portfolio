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
                  <br />• 2nd Place Hack2Impact Hackathon Winner
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
                      Software Engineering Intern
                    </h3>
                    <p className="text-sm text-green-400">
                      June 2024 - August 2024
                    </p>
                  </div>
                </div>
                <p className="text-gray-400">
                  <b>Inwi</b>
                  <br />
                  • Led a team of three interns to convert a Word-based system
                  into a web application, addressing a business need at Inwi.
                  <br />
                  • Spearheaded the app development using Django for backend and
                  React.js for frontend, fostering communication between
                  employees and clients.
                  <br />
                  • Coordinated Agile processes with daily stand-ups and used
                  Trello for task tracking and prioritization.
                  <br />
                  • Managed the development lifecycle of the project,
                  maintaining a focus on timeline adherence and the delivery of
                  core features within the set deadlines.
                  <br />
                  • Facilitated collaboration and communication between
                  cross-functional teams to ensure smooth integration of backend
                  and frontend components.
                  <br />• Conducted code reviews and mentored other interns,
                  improving their technical skills and ensuring best practices
                  in software development.
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
                      Software Development Intern
                    </h3>
                    <p className="text-sm text-purple-400">
                      June 2023 - August 2023
                    </p>
                  </div>
                </div>
                <p className="text-gray-400">
                  <b>M-AMTM</b>
                  <br />
                  • Managed the full software development lifecycle, from
                  gathering requirements to defining project scope with
                  logistics managers and stakeholders.
                  <br />
                  • Designed system architecture and created diagrams (use case,
                  activity) to ensure clear project planning and execution.
                  <br />
                  • Implemented a dynamic, responsive web application using
                  React.js, Firebase, and Bootstrap to streamline logistical
                  operations and enhance user experience.
                  <br />• Led testing by organizing a trial phase where the new
                  app ran alongside legacy systems, refining the system based on
                  real-time feedback.
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
                  • Graded exams, assignments, and papers.
                  <br />
                  • Proofread academic documents for my assigned professors.
                  <br />• Wrote weekly reports.
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
                  • Troubleshot hardware and software issues for all team members—diagnosing and resolving PC, laptop, and peripheral malfunctions to minimize downtime.
                  <br />
                  • Researched technical requirements and sourced PC components (CPUs, GPUs, RAM, storage) tailored to each role’s needs, negotiating with vendors to optimize cost and performance.
                  <br />• Coordinated with the ISP to establish and maintain reliable internet service, handling router configuration and ensuring secure network access for on-site staff.
                  <br />• Installed, configured, and tested audio/video recording equipment (cameras, microphones, lighting rigs) to support the company’s content-creation workflows.
                  <br />• Collaborated on the development and customization of WordPress websites, improving functionality and enhancing user experience.
                  <br />• Integrated various plugins and themes to meet client-specific needs, ensuring optimal site performance and responsiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
