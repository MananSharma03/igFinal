import React from 'react';
import Chatbot from '@/components/Chatbot';

const Home: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-[5%] py-4 bg-primary text-white sticky top-0 z-10 shadow-md">
        <div className="text-2xl font-bold">Manan Sharma</div>
        <ul className="flex list-none">
          <li className="ml-5"><a href="#home" className="text-white hover:text-accent transition-colors font-medium">Home</a></li>
          <li className="ml-5"><a href="#skills" className="text-white hover:text-accent transition-colors font-medium">Skills</a></li>
          <li className="ml-5"><a href="#projects" className="text-white hover:text-accent transition-colors font-medium">Projects</a></li>
          <li className="ml-5"><a href="#contact" className="text-white hover:text-accent transition-colors font-medium">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-16">
        <div className="hero-content">
          <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto p-8 gap-8">
            <div className="flex-none w-[300px]">
              <div className="w-[300px] h-[300px] rounded-full border-[3px] border-neutral-300 bg-white object-cover shadow-md flex items-center justify-center">
                <span className="text-neutral-500 font-medium">Profile Image</span>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-4xl mb-2 text-primary font-bold">Hi, I'm Manan Sharma</h1>
              <p className="text-xl text-neutral-600 mb-4 font-medium">Data Analysis & DevOps Professional</p>
              <p className="mb-6 leading-relaxed text-neutral-700">
                I'm a passionate data analyst and DevOps professional with expertise in transforming complex
                data into actionable insights. With a strong background in statistical analysis, cloud
                infrastructure, and software development, I help organizations make data-driven decisions and optimize their
                technological processes.
              </p>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/yourprofile" target="_blank" className="text-2xl text-primary hover:text-neutral-600 transition-colors hover:scale-110">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/yourprofile" target="_blank" className="text-2xl text-primary hover:text-neutral-600 transition-colors hover:scale-110">
                  <i className="fab fa-github"></i>
                </a>
                <a href="mailto:youremail@example.com" className="text-2xl text-primary hover:text-neutral-600 transition-colors hover:scale-110">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-8 text-center bg-white">
        <h2 className="text-3xl mb-8 font-bold text-primary">Professional Skills</h2>
        <div className="flex flex-col md:flex-row justify-center gap-5 mt-8">
          <div className="bg-white p-5 rounded-lg shadow-md transition-transform hover:-translate-y-2 border border-neutral-200">
            <i className="fas fa-chart-line text-3xl text-primary mb-4"></i>
            <h3 className="text-xl mb-2 font-semibold text-primary">Data Analysis</h3>
            <p className="text-foreground">Advanced analytics, statistical modeling, data visualization</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md transition-transform hover:-translate-y-2 border border-neutral-200">
            <i className="fas fa-cloud text-3xl text-primary mb-4"></i>
            <h3 className="text-xl mb-2 font-semibold text-primary">DevOps</h3>
            <p className="text-foreground">CI/CD, Cloud Infrastructure, Containerization</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md transition-transform hover:-translate-y-2 border border-neutral-200">
            <i className="fas fa-code text-3xl text-primary mb-4"></i>
            <h3 className="text-xl mb-2 font-semibold text-primary">Programming</h3>
            <p className="text-foreground">Python, C++, JavaScript, SQL</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-8 text-center">
        <h2 className="text-3xl mb-8 font-bold text-primary">Featured Projects</h2>
        <div className="flex flex-col md:flex-row justify-center gap-5 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform hover:-translate-y-2 hover:shadow-xl border border-neutral-200">
            <h3 className="text-xl mb-2 font-semibold text-primary">Data Visualization Dashboard</h3>
            <p className="mb-4 text-foreground">Interactive web app for real-time data analysis</p>
            <a href="#" className="inline-block px-5 py-2 bg-primary text-white rounded-lg transition-all hover:shadow-md hover:opacity-80">View Project</a>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform hover:-translate-y-2 hover:shadow-xl border border-neutral-200">
            <h3 className="text-xl mb-2 font-semibold text-primary">DevOps Automation Tool</h3>
            <p className="mb-4 text-foreground">Streamlined deployment and infrastructure management</p>
            <a href="#" className="inline-block px-5 py-2 bg-primary text-white rounded-lg transition-all hover:shadow-md hover:opacity-80">View Project</a>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-16 px-8 text-center bg-white">
        <h2 className="text-3xl mb-8 font-bold text-primary">Professional Resume</h2>
        <a href="/resume.pdf" download className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:shadow-lg transition-all font-medium hover:opacity-80">
          <i className="fas fa-download mr-2"></i> Download Resume
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8 text-center">
        <h2 className="text-3xl mb-8 font-bold text-primary">Get In Touch</h2>
        <form className="max-w-lg mx-auto flex flex-col gap-4">
          <input type="text" placeholder="Your Name" required className="p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
          <input type="email" placeholder="Your Email" required className="p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
          <textarea placeholder="Your Message" required className="p-3 border border-neutral-300 rounded-lg h-32 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"></textarea>
          <button type="submit" className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:shadow-lg transition-all font-medium hover:opacity-80">Send Message</button>
        </form>
      </section>

      {/* Chatbot Component */}
      <Chatbot />

      {/* Footer */}
      <footer className="bg-primary text-white text-center py-6 shadow-md">
        <p>© 2023 Manan Sharma. All Rights Reserved.</p>
      </footer>

      {/* Font Awesome */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
    </>
  );
};

export default Home;
