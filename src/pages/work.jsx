import { useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "scrollreveal";
import Navbar from "../components/navbar";
import project1 from '../assets/project_image_1.jpg';
import project2 from '../assets/project_image_2.png';
import project3 from '../assets/project_image_3.png';
import project4 from '../assets/project_image_4.png';
import Footer from "../components/footer";
import { pageTransition } from "../components/animations";
import { Link } from "react-router-dom";
import { Number } from "../components/motion";

const Work = () => {
  // Use useMemo to optimize project array creation
  const projects = useMemo(() => [
    {
      title: "Flower Imperials",
      description: "A fully functional e-commerce website for a flower shop, featuring product listings, a shopping cart, checkout functionality, and secure online payments via Flutterwave. The platform provides a seamless user experience with a modern UI, responsive design, and real-time API interactions.",
      technologies: ["ReactJS", "NodeJS", "Tailwind CSS", "Axios", "Flutterwave"],
      link: "https://lagfloral.netlify.app/",
      image: project1
    },
    {
      title: "Outbound AI Backend",
      description: "An AI-powered call automation solution designed to help businesses manage outbound calls efficiently. This system leverages speech-to-text and text-to-speech technologies to handle customer interactions, automate follow-ups, and provide real-time insights. It integrates with multiple AI providers for transcription, natural language processing, and voice synthesis, ensuring high-quality, human-like conversations. The backend is built with FastAPI and optimized for scalability, handling concurrent calls seamlessly with Celery task processing and PostgreSQL for data storage.",
      technologies: ["FastAPI", "PostgreSQL", "Celery", "Deepgram", "ElevenLabs"],
      link: "https://outbound.im/",
      image: project2
    },
    {
      title: "GlobalSuite ERP",
      description: "An enterprise desktop ERP used by Nigerian Stockbrokers Ltd (NSL). I maintain and improve its 15+ modules including Accounting, Payments, Customer Management, KYC Dashboard, Risk, and HR. Responsibilities include debugging Crystal Reports, optimizing SQL Server stored procedures, improving performance, and implementing secure authentication and role-based access for 100+ users.",
      technologies: ["C#", ".NET Framework", "WinForms", "SQL Server", "Stored Procedures", "Crystal Reports"],
      link: "#",
      image: project4
    },
    {
      title: "DevAtlas Academy",
      description: "A full-stack online learning platform built for educators and students. Features secure user authentication (JWT + BCrypt), admin dashboard for course management, responsive frontend with modern UI, and a scalable REST API backend. Deployed on Microsoft Azure with CI/CD via GitHub Actions. Includes Swagger documentation, MongoDB Atlas integration, and production-grade environment configuration.",
      technologies: ["React", "Vite", "Tailwind CSS", "Node.js", ".NET 8", "MongoDB Atlas", "Azure App Service", "Azure Static Web Apps", "JWT Auth", "BCrypt", "GitHub Actions"],
      link: "https://ashy-forest-0480f531e.3.azurestaticapps.net",
      image: project3
    },
  ], []);
  

  useEffect(() => {
    ScrollReveal().reveal(".project-card", {
      duration: 1000,
      origin: "bottom",
      distance: "50px",
      easing: "ease-in-out",
      reset: false // Prevents unnecessary re-triggering
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      <motion.div {...pageTransition} className="container mx-auto p-8">
        <div className='md:flex items-start'>
          <span className='text-2xl text-gray-400 py-4 md:basis-1/4'>
            <Number>01/</Number>
          </span>
          <div className='md:basis-2/4'>
            <div className='my-16'>
              <h1 className='md:my-12 my-2 uppercase text-3xl md:text-4xl font-bold leading-none'>
                <Number>PROJECTS</Number>
              </h1>
              <p className='md:mt-12 text-lg md:text-xl leading-relaxed'>
                <Number>
                  A selected set of projects I've built with individuals and teams. This is a mix of personal, collaborative, and client-owned projects.
                </Number>
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
  {projects.map((project, index) => (
    <motion.div 
      key={index} 
      whileHover={{ scale: 1.05 }} 
      className="project-card bg-gray-800 p-6 rounded-lg shadow-lg"
    >
      {/* Project Image */}
      <img 
        src={project.image} 
        alt={`${project.title} preview`} 
        className="w-full h-40 object-cover rounded-lg mb-4"
      />

      {/* Project Title and Description */}
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-gray-400 mt-2">{project.description}</p>
      <p className="text-gray-300 mt-2">
        <span className="font-semibold">Technologies:</span> {project.technologies.join(", ")}
      </p>

      {/* View Project Link */}
      <Link to={project.link} className="text-yellow-400 mt-4 inline-block" aria-label={`View details for ${project.title}`}>
        View Project
      </Link>
    </motion.div>
  ))}
</div>


        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold">Have a Project in Mind?</h2>
          <p className="text-gray-400 my-2">Let's collaborate and build something amazing.</p>
          <Link to="/contact" 
            className="mt-6 bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition" 
            aria-label="Contact Ali Peter for collaboration"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Work;
