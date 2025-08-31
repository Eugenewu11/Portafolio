import '../css/tecnologias.css'
import LogoLoop from './LogoLoop.jsx';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

const techLogos = [
  { src: "/htmlLogo.png", alt: "HTML", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { src: "/cssLogo.png", alt: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { src: "/jsLogo.png", alt: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { src: "/reactLogo.png", alt: "React", href: "https://react.dev" },
  { src: "/javaLogo.png", alt: "Java", href: "https://www.oracle.com/java/" },
  { src: "/gitLogo.png", alt: "Git", href: "https://git-scm.com/" },
  { src: "/github.png", alt: "GitHub", href: "https://github.com" },
  { src: "/dockerLogo.png", alt: "Docker", href: "https://www.docker.com/" },
  { src: "/sqlserverLogo.png", alt: "SQL Server", href: "https://www.microsoft.com/en-us/sql-server" },
  { src: "/mysqlLogo.png", alt: "MySQL", href: "https://www.mysql.com/" },
  { src: "/pyLogo.png", alt: "Python", href: "https://www.python.org/" },
];

function Tecnologias() {
  return (
    <div className='main-container' style={{ height: '300px', position: 'relative', overflow: 'hidden'}}>
        <div className='titulo-tec'>
            Tecnologías
        </div>

        <LogoLoop
            logos={techLogos}
            speed={90}
            direction="left"
            logoHeight={64}  
            gap={50}         
            pauseOnHover
            scaleOnHover
            fadeOut={false}  
            ariaLabel="Technology stack"
        />
    </div>
  );
}

export default Tecnologias