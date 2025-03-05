import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">Get in Touch</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
        </p>
        
        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-gray-700/50 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a 
                    href="mailto:your.email@example.com" 
                    className="text-gray-300 hover:text-white transition-colors text-lg"
                  >
                    alaa.haoua@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Phone className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone</p>
                  <a 
                    href="tel:+1234567890" 
                    className="text-gray-300 hover:text-white transition-colors text-lg"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <MapPin className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Location</p>
                  <span className="text-gray-300 text-lg">
                    City, Country
                  </span>
                </div>
              </div>
              
              <div className="pt-4">
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg text-lg font-medium w-full justify-center"
                >
                  <Linkedin size={24} />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}