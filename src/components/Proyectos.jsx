import React, { useState, useEffect } from 'react';
import '../css/proyectosCarousel.css';

const ProyectosCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Agenda de Contactos",
      description: "Desarrollo fullstack con HTML5, CSS, JavaScript, Node.js y SQL Server, enfocado en la implementación de APIs RESTful",
      status: "COMPLETADO",
      image: "../agendaContactos.png",
      githubUrl: "https://github.com/Eugenewu11/Agenda_De_Contactos.git",
      imageType: "portfolio" 
    },
    {
      id: 2,
      title: "Portafolio",
      description: "Desarrollo Frontend utilizando tecnologías: HTML5, CSS, JavaScript y React",
      status: "EN DESARROLLO",
      image: "../portafolio.png", 
      githubUrl: "https://github.com/Eugenewu11/Portafolio.git",
      imageType: "portfolio" 
    },
    {
      id: 3,
      title: "Proyecto 3",
      description: "Espera mi próximo proyecto!",
      status: "PRÓXIMAMENTE",
      image: null,
      githubUrl: "https://github.com/Eugenewu11",
      imageType: null
    },
    {
      id: 4,
      title: "Proyecto 4",
      description: "Espera mi próximo proyecto!",
      status: "PRÓXIMAMENTE", 
      image: null,
      githubUrl: "hhttps://github.com/Eugenewu11",
      imageType: null
    }
  ]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const openGithub = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="projects-section" id="Proyectos">
      <div className="container">
        <h2 className="section-title">Proyectos</h2>
        
        <div className="carousel">
          <div className="carousel-container">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="project-card">
                  <div className="project-image">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className={project.imageType ? `${project.imageType}-image` : ''}
                      />
                    ) : (
                      <div className="image-placeholder">
                        <div className="image-placeholder-icon">🚀</div>
                        <div className="image-placeholder-text">Proyecto en desarrollo</div>
                      </div>
                    )}
                    <div className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </div>
                  </div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <button 
                      className="project-button" 
                      onClick={() => openGithub(project.githubUrl)}
                    >
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="carousel-controls">
            <button className="control-btn prev" onClick={prevSlide}>
              &#8249;
            </button>
            <button className="control-btn next" onClick={nextSlide}>
              &#8250;
            </button>
          </div>
          
          <div className="carousel-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ProyectosCarousel;