//Import de CSS
import '../css/navBar.css'

function NavBar() {
    return (
        <header>
            <div className = "mainNav">
                <div className = "left-section">
                    Eugene Kelly Wu Leiva
                </div>

                <div className="right-section">
                    <div>
                        <button className="inicioBtn">
                            <a href="Presentacion">Inicio</a>
                        </button>
                    </div>

                    <div>
                        <button className="proyectosBtn"  >
                            <a href='#Proyectos'>Proyectos</a>
                        </button>
                    </div>

                    <div>
                        <button className="expBtn">
                            <a href='#Experiencia'>Experiencia</a>
                        </button>
                    </div>

                    <div>
                        <button className="contactoBtn">
                            <a href='#Contacto'>Contactame</a>
                        </button>
                    </div>
                </div>
            </div>
            
        </header>

    );
}

export default NavBar