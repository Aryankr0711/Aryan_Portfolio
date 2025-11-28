import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaLinkedin, FaFacebook, FaGithub, FaEnvelope, FaMapMarkerAlt, FaDownload, FaCode, FaExternalLinkAlt, FaEye, FaPython, FaReact, FaGitAlt, FaFlask, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaDocker, FaAws, FaInstagram } from 'react-icons/fa';
import { SiOpencv, SiStreamlit, SiRender, SiScikitlearn, SiCplusplus, SiTensorflow, SiPandas, SiNumpy, SiJupyter, SiPostgresql, SiMongodb, SiKeras, SiPytorch, SiTableau, SiPowerbi, SiXgboost, SiLightgbm, SiCisco } from 'react-icons/si';
import './App.css';

const App = () => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [viewingCertificate, setViewingCertificate] = useState(null);
  const [viewingResult, setViewingResult] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);
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
    { icon: FaInstagram, link: 'https://www.instagram.com/itsaryankr_/', color: '#E4405F' }
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
      description: 'Completed by Paid Internship at Concept System with a stipend of 5000/- per month. This internship focuses on industrial automation, with a primary emphasis on image processing and computer vision using the OpenCV library, Published my IEEE conference Paper for this paper at ICCUBEA-2025, held at PCCOE, Pune.',
      logo: '/Concept_System_Logo.png',
      certificates: [
        { name: 'Offer Letter', file: 'Concept_System_Internship_Offer_Letter.pdf' },
        { name: 'Completion Certificate', file: 'Concept_System_Internship_Completion_Letter.pdf' },
        { name: 'Paper Draft', file: 'Concept_system_paper_draft.pdf' },
        { name: 'PPT', file: 'Concept_system_PPT.pptx' }
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

  const education = [
    {
      id: 1,
      level: '10th Grade',
      school: 'BR DAV Public School, Begusarai',
      year: '2020',
      board: 'CBSE',
      percentage: '83.40%',
      logo: '/School_logo.jpg',
      location: 'https://maps.app.goo.gl/PYugMyfKiaMtHmvs8',
      result: '10th_marksheet.pdf'
    },
    {
      id: 2,
      level: '12th Grade',
      school: 'BR DAV Public School, Begusarai',
      year: '2022',
      board: 'CBSE',
      percentage: '85.20%',
      logo: '/School_logo.jpg',
      location: 'https://maps.app.goo.gl/PYugMyfKiaMtHmvs8',
      result: '12th_marksheet.pdf'
    },
    {
      id: 3,
      level: 'B.Tech - Electronics and Telecommunication Engineering',
      school: 'MIT Academy of Engineering, Pune',
      year: '2023 - 2027',
      board: 'University',
      percentage: 'CGPA: 9.12 / 10',
      logo: '/MIT_AOE_Logo.jpg',
      location: 'https://maps.app.goo.gl/iHbaFkSgAFH6Se3v9',
      results: [
        { name: 'First Year', file: 'FY_marksheet.pdf' },
        { name: 'Second Year', file: 'SY_marksheet.pdf' }
      ]
    }
  ];

  const certifications = {
    CISCO: {
      logo: '/CISCO.png',
      certs: [
        { name: 'HTML Essentials', file: 'Certifications/CISCO/HTML_Essentials_certificate_202301070164-mitaoe-ac-in_c3eeef24-c66d-4992-b8d6-133c85178075 (1).pdf', description: 'Learned the fundamentals of structuring web pages using HTML. Gained hands-on experience with semantic tags, forms, links, and multimedia elements for building clean web layouts.' },
        { name: 'CSS Essentials', file: 'Certifications/CISCO/CSS_Essentials_certificate_202301070164-mitaoe-ac-in_f4f6da59-1429-4399-a99b-72308a48f902.pdf', description: 'Covered core CSS concepts including layouts, flexbox, styling, responsiveness, and animations. Learned to design visually appealing and responsive web interfaces.' },
        { name: 'PCAP – Programming Essentials in Python', file: 'Certifications/CISCO/Partner-_PCAP_-_Programming_Essentials_in_Python_certificate_202301070164-mitaoe-ac-in_58db8171-5f68-4188-988f-40226cd822c5.pdf', description: 'Built strong fundamentals of Python programming including loops, functions, data structures, and object-oriented concepts. Developed problem-solving skills using real coding exercises.' }
      ]
    },
    MATLAB: {
      logo: '/MATLAB.jpeg',
      certs: [
        { name: 'Simscape Onramp', file: 'Certifications/MATLAB/Simscape_Onramp_Certificate.pdf', description: 'Learned the fundamentals of physical system modeling using Simscape. Gained hands-on experience in simulating mechanical, electrical, and multi-domain systems using real-world components.' },
        { name: 'Simulink Onramp', file: 'Certifications/MATLAB/Simulink_Onramp_certificate.pdf', description: 'Introduced to model-based design using Simulink. Learned to build, simulate, and analyze dynamic system models using block diagrams.' },
        { name: 'Control Design Onramp with Simulink', file: 'Certifications/MATLAB/Control_Design_Onramp_with_Simulink.pdf', description: 'Learned the basics of control system modeling and controller design using Simulink. Gained practical skills in system response analysis and tuning.' },
        { name: 'Simulink Fundamentals', file: 'Certifications/MATLAB/Simulink_Fundamentals_certificate.pdf', description: 'Developed deeper understanding of Simulink tools for system modeling, simulation, and signal analysis. Focused on building real-world engineering system models.' }
      ]
    },
    NPTEL: {
      logo: '/NPTEL.jpeg',
      certs: [
        { name: 'Cyber Security and Privacy (Elite)', file: 'Certifications/NPTEL/Cyber Security and Privacy.pdf', description: 'Studied core concepts of cybersecurity including cryptography, network security, malware, and data privacy. Learned how to protect systems from digital threats.' },
        { name: 'Sensors and Actuators (Elite)', file: 'Certifications/NPTEL/Sensors and Actuators.pdf', description: 'Learned the working principles of sensors and actuators used in automation and embedded systems. Covered real-world applications in control and IoT systems.' }
      ]
    }
  };

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
          <button onClick={() => setActiveTab('education')} className={`nav-tab ${activeTab === 'education' ? 'active' : ''}`}>Education</button>
          <button onClick={() => setActiveTab('certifications')} className={`nav-tab ${activeTab === 'certifications' ? 'active' : ''}`}>Certifications</button>
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
                  {viewingCertificate.endsWith('.pptx') ? (
                    <div className="ppt-message">
                      <h3>PowerPoint Presentation</h3>
                      <p>PowerPoint files cannot be previewed directly. Please download to view.</p>
                      <a href={`/${viewingCertificate}`} download className="download-ppt-btn">
                        <FaDownload /> Download PPT
                      </a>
                    </div>
                  ) : (
                    <iframe
                      src={`https://docs.google.com/viewer?url=https://github.com/Aryankr0711/Aryan_Portfolio/raw/master/public/${encodeURIComponent(viewingCertificate)}&embedded=true`}
                      width="100%"
                      height="800px"
                      title="Certificate"
                      frameBorder="0"
                    >
                      <p>Loading PDF... <a href={`https://github.com/Aryankr0711/Aryan_Portfolio/raw/master/public/${viewingCertificate}`} target="_blank">Click here to view PDF</a>.</p>
                    </iframe>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        )}
        
        {activeTab === 'education' && (
        <div className="education-section">
          <h2>Education</h2>
          <div className="education-timeline">
            {education.map((edu) => (
              <div key={edu.id} className="education-card">
                <div className="education-header">
                  <img src={edu.logo} alt={`${edu.school} Logo`} className="education-logo" />
                  <div className="education-info">
                    <h3 className="education-level">{edu.level}</h3>
                    <p className="education-school">{edu.school}</p>
                    <p className="education-details">{edu.board} | {edu.year} | {edu.percentage}</p>
                    <a href={edu.location} target="_blank" rel="noopener noreferrer" className="location-link">📍</a>
                  </div>
                </div>
                <div className="result-buttons">
                  {edu.result ? (
                    <button onClick={() => setViewingResult(edu.result)} className="view-result-btn">
                      <FaEye /> View Result
                    </button>
                  ) : (
                    edu.results?.map((result, index) => (
                      <button key={index} onClick={() => setViewingResult(result.file)} className="view-result-btn">
                        <FaEye /> {result.name} Result
                      </button>
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {viewingResult && (
            <div className="result-modal">
              <div className="result-content">
                <div className="modal-header">
                  <button onClick={() => setViewingResult(null)} className="close-btn">×</button>
                </div>
                <div className="resume-viewer">
                  <iframe 
                    src={`https://docs.google.com/viewer?url=https://github.com/Aryankr0711/Aryan_Portfolio/raw/master/public/${encodeURIComponent(viewingResult)}&embedded=true`}
                    width="100%" 
                    height="800px"
                    title="Result"
                    frameBorder="0"
                  >
                    <p>Loading PDF... <a href={`https://github.com/Aryankr0711/Aryan_Portfolio/raw/master/public/${viewingResult}`} target="_blank">Click here to view PDF</a>.</p>
                  </iframe>
                </div>
              </div>
            </div>
          )}
        </div>
        )}
        
        {activeTab === 'certifications' && (
        <div className="certifications-section">
          <h2>Certifications</h2>
          <div className="certifications-categories">
            {Object.entries(certifications).map(([category, data]) => (
              <div key={category} className="certification-category">
                <div className="category-header" onClick={() => setExpandedCategory(expandedCategory === category ? null : category)}>
                  <div className="category-title">
                    <img src={data.logo} alt={`${category} Logo`} className="category-logo" />
                    <h3>{category}</h3>
                  </div>
                  <div className="expand-controls">
                    <span className="expand-text">{expandedCategory === category ? 'View Less' : 'View More'}</span>
                    <span className="expand-icon">{expandedCategory === category ? '▼' : '▶'}</span>
                  </div>
                </div>
                {expandedCategory === category && (
                  <div className="category-content">
                    {data.certs.map((cert, index) => (
                      <div key={index} className="certification-item">
                        <h4>{cert.name}</h4>
                        <p>{cert.description}</p>
                        <button onClick={() => setViewingCertificate(cert.file)} className="view-cert-btn">
                          <FaEye /> View Certificate
                        </button>
                      </div>
                    ))}
                  </div>
                )}
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
        
        {activeTab === 'contact' && (
        <div className="contact-section">
          <div className="contact-header">
            <h2>Connect and Collaborate</h2>
            <p className="contact-subtitle">Let's build something amazing together! Reach out for collaborations, opportunities, or just to say hello.</p>
          </div>
          
          <div className="contact-content">
            <div className="contact-left-column">
              <div className="contact-card">
                <div className="contact-avatar">
                  <img src="/Aryan_Photo.jpg" alt="Aryan Kumar" className="contact-profile-img" />
                </div>
                <h3>Aryan Kumar</h3>
                <p className="contact-role">Electronics & Telecommunication Engineering Student</p>
                <p className="contact-specialization">Specializing in AIML, Deep Learning & Computer Vision</p>
              </div>
              
              <div className="contact-details">
                <div className="contact-item">
                  <FaEnvelope className="contact-item-icon" />
                  <div className="contact-item-info">
                    <h4>Email</h4>
                    <a href="mailto:mailaryan00@gmail.com">mailaryan00@gmail.com</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaWhatsapp className="contact-item-icon" />
                  <div className="contact-item-info">
                    <h4>WhatsApp</h4>
                    <a href="https://wa.me/918789978957" target="_blank" rel="noopener noreferrer">+91 8789978957</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaMapMarkerAlt className="contact-item-icon" />
                  <div className="contact-item-info">
                    <h4>Location</h4>
                    <a href="https://maps.app.goo.gl/a68UbK97SyfXt8Kk7" target="_blank" rel="noopener noreferrer">Pune, Maharashtra, India</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-right-column">
              <div className="social-connect">
                <h3>Follow Me</h3>
                <div className="social-links-grid">
                  {contacts.map((contact, index) => {
                    const labels = ['WhatsApp', 'LinkedIn', 'Facebook', 'GitHub', 'Email', 'Instagram'];
                    return (
                      <a
                        key={index}
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link-card"
                        style={{ '--hover-color': contact.color }}
                      >
                        <contact.icon className="social-icon" />
                        <span className="social-label">{labels[index]}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          
          <div className="collaboration-cta">
            <h3>Ready to Collaborate?</h3>
            <p>I'm always excited to work on innovative projects in AI/ML, Computer Vision, and Full-Stack Development. Whether you have an idea, need a team member, or want to discuss technology, I'd love to hear from you!</p>
            <div className="cta-buttons">
              <a href="mailto:mailaryan00@gmail.com" className="cta-btn primary">
                <FaEnvelope /> Send Email
              </a>
              <a href="https://wa.me/918789978957" target="_blank" rel="noopener noreferrer" className="cta-btn secondary">
                <FaWhatsapp /> WhatsApp Me
              </a>
            </div>
          </div>
        </div>
        )}
      </main>
    </div>
  );
};

export default App;
