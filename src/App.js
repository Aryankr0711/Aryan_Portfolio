import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaLinkedin, FaFacebook, FaGithub, FaEnvelope, FaMapMarkerAlt, FaDownload, FaCode, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import './App.css';

const App = () => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [viewingCertificate, setViewingCertificate] = useState(null);
  const fullText = "Hey! I'm Aryan Kumar";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setShowCursor(false);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const expertise = [
    'AIML', 'C++ Beginner', 'Deep Learning & Computer Vision', 
    'Image Processing', 'OpenCV', 'Scikit-learn', 'Pandas', 'NumPy'
  ];

  const contacts = [
    { icon: FaWhatsapp, link: 'https://wa.me/918789978957', color: '#25D366' },
    { icon: FaLinkedin, link: 'https://www.linkedin.com/in/aryan-kumar-0b7585218/', color: '#0077B5' },
    { icon: FaFacebook, link: 'https://www.facebook.com/profile.php?id=100045667401407', color: '#1877F2' },
    { icon: FaGithub, link: 'https://github.com/Aryankr0711', color: '#333' },
    { icon: FaEnvelope, link: 'mailto:mailaryan00@gmail.com', color: '#EA4335' },
    { icon: FaMapMarkerAlt, link: 'https://maps.app.goo.gl/a68UbK97SyfXt8Kk7', color: '#4285F4' }
  ];

  const projects = [
    {
      id: 1,
      title: 'An Automated Realtime Image Driven Quality Control: A Vision-Based Solution for Industrial Object Classification',
      description: 'Using OpenCV and other image processing techniques, the system automatically detects and classifies objects by their shape, size, and colour with a high accuracy of 94.34%. I developed this as a hardware-independent, full-stack web application with a Flask backend and React frontend.',
      skills: ['Image Processing', 'OpenCV', 'BG Removal', 'API', 'Dataset Preparation & Preprocessing', 'Performance Optimisation & Testing'],
      image: '/project1.png',
      code: 'https://github.com/Sumit131204/Shape-api-',
      live: null
    },
    {
      id: 2,
      title: 'Player Coordinate Prediction During Pass Plays Using an Ensemble Machine Learning Technique',
      description: 'This project predicts the future field positions of football players using tracking data from NFL games. Features such as speed, acceleration, and distance are used to train Boosting models for X and Y coordinates. With the Least RMSE of 0.950 for the CatBoost Model.',
      skills: ['Machine Learning & Modelling', 'Feature Engineering', 'Model Evaluation & Optimisation', 'Hyperparameter Tuning', 'Python'],
      image: '/project2.png',
      code: 'https://github.com/RavirajSonar40/nfl-big-data-bowl-2026-prediction.git',
      live: 'https://nfl-big-data-bowl-2026-prediction.onrender.com/'
    },
    {
      id: 3,
      title: 'Road Accident Risk Prediction Using Supervised ML',
      description: 'Developed a supervised machine learning model to predict road accident probability using multi-factor datasets, enabling early risk identification and improving road safety insights. Implemented data preprocessing, model training, and evaluation to achieve reliable predictive performance.',
      skills: ['Machine Learning', 'Python', 'Feature Engineering', 'Data Processing & Cleaning', 'Hyperparameter Tuning'],
      image: '/project3.png',
      code: 'https://github.com/Aryankr0711/Road_Accident_Prediction.git',
      live: 'https://road-accident-prediction.onrender.com/'
    },
    {
      id: 4,
      title: 'SketchAI- Text to Image Generation using Stable Diffusion model',
      description: 'Created a generative AI project that uses the v1.5 Stable Diffusion model to produce high-quality images from text prompts. This involved a deep dive into the model\'s architecture, including text encoding, the diffusion process, and working within latent space to optimise performance.',
      skills: ['Stable Diffusion', 'Python', 'Text to Image', 'NLP'],
      image: '/project4.png',
      code: 'https://github.com/Sumit131204/Text-to-image-stable-diffusion',
      live: null
    }
  ];

  const internships = [
    {
      id: 1,
      company: 'Indian Oil Corporation Limited',
      domain: 'Oil / Gas / Petroleum',
      role: 'Vocational Trainee',
      duration: '16 Jun, 2025 - 31 Jul, 2025',
      skills: ['Instrumentation', 'Sensors'],
      description: 'This internship focuses on industrial instrumentation, with a particular emphasis on the sensors and transducers commonly utilized within a plant\'s instrumentation department. The role involves understanding the principles of operation, calibration, and maintenance of these devices as they relate to process control and plant automation.',
      logo: '/IOCL_Logo.png',
      certificates: [{ name: 'Certificate', file: 'IOCL_Internship_Certificate.pdf' }]
    },
    {
      id: 2,
      company: 'Concept System',
      domain: 'Office Equipment / Automation',
      role: 'Software Engineer Intern',
      duration: '01 Jun, 2025 - 31 Jul, 2025',
      skills: ['Image Processing', 'OpenCV', 'Background Removal', 'Industrial Automation'],
      description: 'Completed by Paid Internship at Concept System with a stipend of 5000/- per month. This internship focuses on industrial automation, with a primary emphasis on image processing and computer vision using the OpenCV library.',
      logo: '/Concept_System_Logo.png',
      certificates: [
        { name: 'Offer Letter', file: 'Concept_System_Internship_Offer_Letter.pdf' },
        { name: 'Completion Certificate', file: 'Concept_System_Internship_Completion_Letter.pdf' }
      ]
    },
    {
      id: 3,
      company: 'CloudNautic',
      domain: 'IT Transformation and Cloud Solutions',
      role: 'Cloud DevOps Intern',
      duration: '20th June 2024 - 01 August 2024',
      skills: ['AWS Cloud Services', 'Docker & Containerization', 'Git & GitHub'],
      description: 'Worked as a Cloud DevOps Intern, where I learned and applied AWS tools, Docker containerization, and cloud environment setup. Developed an understanding of deployment pipelines and cloud best practices.',
      logo: '/CloudNautics_logo.png',
      certificates: [{ name: 'Certificate', file: 'Cloudnautic_Internship_Completion_Certificate.pdf' }]
    }
  ];

  return (
    <div className="app">
      <header className="header">
        <div className="logo-section">
          <img src="/Aryan_Photo.jpg" alt="Aryan Kumar" className="logo-img" />
          <h1 className="logo">Aryan Kumar</h1>
        </div>
        <nav className="nav-tabs">
          <button onClick={() => setActiveTab('home')} className={`nav-tab ${activeTab === 'home' ? 'active' : ''}`}>Home</button>
          <button onClick={() => setActiveTab('projects')} className={`nav-tab ${activeTab === 'projects' ? 'active' : ''}`}>Projects</button>
          <button onClick={() => setActiveTab('resume')} className={`nav-tab ${activeTab === 'resume' ? 'active' : ''}`}>Resume</button>
          <button onClick={() => setActiveTab('internships')} className={`nav-tab ${activeTab === 'internships' ? 'active' : ''}`}>Internships</button>
          <button onClick={() => setActiveTab('publications')} className={`nav-tab ${activeTab === 'publications' ? 'active' : ''}`}>Publications</button>
          <button onClick={() => setActiveTab('contact')} className={`nav-tab ${activeTab === 'contact' ? 'active' : ''}`}>Contact</button>
        </nav>
      </header>
      
      <main className="main-content">
        {activeTab === 'home' && (
        <div className="profile-section">
          <div className="profile-image">
            <div className="image-container">
              <img src="/Aryan_Photo.jpg" alt="Aryan Kumar" className="profile-img" />
            </div>
          </div>
          
          <div className="content">
            <h1 className="typed-heading">
              {typedText}
              {showCursor && <span className="cursor">|</span>}
            </h1>
            
            <p className="description">
              A dynamic and results-oriented Electronics & Telecommunication Engineering student with a minor in AIML. 
              I specialize in building machine learning, deep learning, and computer vision solutions, with hands-on 
              experience across predictive modeling, image processing, and full-stack application development. 
              I enjoy solving real-world problems by combining data, intelligence, and engineering.
            </p>
            
            <div className="expertise-section">
              <h3>Key Expertise</h3>
              <div className="expertise-grid">
                {expertise.map((skill, index) => (
                  <div key={index} className="expertise-tag">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="contact-links">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-icon"
                  style={{ '--hover-color': contact.color }}
                >
                  <contact.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
        )}
        
        {activeTab === 'resume' && (
        <div className="resume-section">
          <div className="resume-header">
            <h2>My Resume</h2>
            <a href="https://github.com/Aryankr0711/Aryan_Portfolio/raw/master/public/Aryan%20kumar%20Resume.pdf" download className="download-btn">
              <FaDownload /> Download Resume
            </a>
          </div>
          <div className="resume-viewer">
            <iframe 
              src="https://docs.google.com/viewer?url=https://github.com/Aryankr0711/Aryan_Portfolio/raw/master/public/Aryan%2520kumar%2520Resume.pdf&embedded=true"
              width="100%" 
              height="800px"
              title="Aryan Kumar Resume"
              frameBorder="0"
            >
              <p>Loading PDF... <a href="https://github.com/Aryankr0711/Aryan_Portfolio/raw/master/public/Aryan%20kumar%20Resume.pdf" target="_blank">Click here to view PDF</a>.</p>
            </iframe>
          </div>
        </div>
        )}
        
        {activeTab === 'projects' && (
        <div className="projects-section">
          <h2>My Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-skills">
                    <strong>Key Skills:</strong>
                    <div className="skills-tags">
                      {project.skills.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-links">
                    <a href={project.code} target="_blank" rel="noopener noreferrer" className="project-link code-link">
                      <FaCode /> Code
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live-link">
                        <FaExternalLinkAlt /> Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}
        
        {activeTab === 'internships' && (
        <div className="internships-section">
          <h2>Internships</h2>
          <div className="internships-grid">
            {internships.map((internship) => (
              <div key={internship.id} className="internship-card">
                <div className="internship-header">
                  <img src={internship.logo} alt={`${internship.company} Logo`} className="internship-logo" />
                  <div className="internship-info">
                    <h3 className="internship-company">{internship.company}</h3>
                    <p className="internship-role">{internship.role}</p>
                    <p className="internship-domain">{internship.domain}</p>
                    <p className="internship-duration">{internship.duration}</p>
                  </div>
                </div>
                <p className="internship-description">{internship.description}</p>
                <div className="internship-skills">
                  <strong>Key Skills:</strong>
                  <div className="skills-tags">
                    {internship.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="certificate-buttons">
                  {internship.certificates.map((cert, index) => (
                    <button 
                      key={index}
                      onClick={() => setViewingCertificate(cert.file)} 
                      className="certificate-btn"
                    >
                      <FaEye /> {cert.name}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {viewingCertificate && (
            <div className="result-modal">
              <div className="result-content">
                <div className="modal-header">
                  <button onClick={() => setViewingCertificate(null)} className="close-btn">×</button>
                </div>
                <div className="resume-viewer">
                  <iframe 
                    src={`/${viewingCertificate}`} 
                    width="100%" 
                    height="800px"
                    title="Certificate"
                  >
                    <p>Your browser does not support PDFs. <a href={`/${viewingCertificate}`}>Download the PDF</a>.</p>
                  </iframe>
                </div>
              </div>
            </div>
          )}
        </div>
        )}
        
        {activeTab === 'publications' && (
        <div className="publications-section">
          <h2>Publications</h2>
          <p>Coming Soon...</p>
        </div>
        )}
      </main>
    </div>
  );
};

export default App;