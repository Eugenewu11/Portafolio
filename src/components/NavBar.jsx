//Import de CSS
import '../css/navBar.css'
import PillNav from './PillNav.jsx';
function NavBar() {
    return (
        <>
            <header>
            <div className = "mainNav">
                <div className = "left-section">
                    Eugene Kelly Wu Leiva
                </div>

                <div className="right-section">
                    <PillNav
                    logo={null}
                    items={[
                        { label: 'Inicio', href: '#Presentacion' },
                        { label: 'Proyectos', href: '#Proyectos' },
                        { label: 'Experiencia', href: '#Experiencia' },
                        { label: 'Contacto', href: '#Contacto' }
                    ]}
                    activeHref="#Inicio"
                    className="custom-nav"
                    ease="power2.easeOut"
                    baseColor="#ffffff"
                    pillColor="#000000"
                    hoveredPillTextColor="black"
                    pillTextColor="#ffffff"
                    />
                </div>
            </div>
        </header>
        </>
        

    );
}

export default NavBar