import '../css/Inicio.css'
import TextType from './TextType.jsx' //Componente de reacbits.dev
import DarkVeil from './DarkveilBg.jsx';

function Inicio() {
    return(

            <div id="Presentacion" className="main-div">
                <div className="img-div">
                    <img className="meImg" src="/fotoLinked2.jpg"/>
                </div>

                <div  className="carrera-div">
                    <TextType 
                        text={["Desarrollador Full-Stack"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                    />
                </div>

                <div className='texto-div'>
                    Soy un Ingeniero en Sistemas en formación, enfocado en el desarrollo Full-Stack,
                    apasionado por crear aplicaciones web completas que unan funcionalidad
                    y diseño. Mi objetivo es crecer profesionalmente construyendo soluciones
                    digitales <span className='resaltar'>innovadoras, robustas y escalables</span>, mientras perfecciono mis
                    habilidades tanto en frontend como backend.
                </div>

                <div className='buttons-div'>
                    <button className='contactoInicioBtn'>
                        <a href='#Contacto' className='aContacto'>Contactame</a>
                    </button>
                    <button className='descargarcvBtn'>
                        Descargar CV
                    </button>
                </div>
            </div>
    );
}

export default Inicio

//logo loop, carousel
//backgropund dark veil