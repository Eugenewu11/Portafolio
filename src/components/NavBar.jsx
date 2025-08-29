//Import de CSS
import '../css/navBar.css'

function NavBar() {
    return (
        <header>
            <div class = "mainNav">
                <div class = "nombre">
                    Eugene Kelly Wu Leiva
                </div>

                <div class="buttons-div">
                    <div>
                        <button class="inicioBtn">
                            Inicio
                        </button>
                    </div>

                    <div>
                        <button class="proyectosBtn">
                            Proyectos
                        </button>
                    </div>

                    <div>
                        <button class="expBtn">
                            Experiencia
                        </button>
                    </div>

                    <div>
                        <button class="contactoBtn">
                            Contacto
                        </button>
                    </div>
                </div>
            </div>
            
        </header>

    );
}

export default NavBar