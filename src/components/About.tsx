import React from 'react';
import { BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">About Me</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-white">Career Objectives</h3>
            <p className="text-gray-400 mb-6">
              As a recent graduate with diverse experience in software development, teaching,
              and creative design, I am passionate about creating innovative solutions that
              combine technical excellence with user-centered design. I am seeking
              opportunities to leverage my unique blend of skills in a challenging software
              development role.
            </p>
            <p className="text-gray-400">
              My areas of interest include:
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
              <li>Full-stack Web Development</li>
              <li>Cloud Computing</li>
              <li>DevOps and Automation</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-orange-400" size={24} />
              <h3 className="text-xl font-semibold text-white">Relevant Coursework</h3>
            </div>
            <ul className="grid grid-cols-2 gap-2 text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                Data Structures
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                Algorithms
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                Web Development
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                Database Systems
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                Software Engineering
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                Machine Learning
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}