import '../css/Inicio.css'
import TextType from './TextType.jsx' //Componente de reacbits.dev

function Inicio() {

    // Función para manejar la descarga del CV
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/EugeneKellyWuLeivaCV.pdf'; // Ruta a tu archivo PDF
        link.download = 'EugeneKellyWuLeivaCV.pdf'; // Nombre del archivo al descargar
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return(
        <div id="Presentacion" className="main-div">
            <div className="img-div">
                <img className="meImg" src="/fotoLinked2.jpg"/>
            </div>

            <div className="carrera-div">
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
                <button className='descargarcvBtn' onClick={handleDownloadCV}>
                    Descargar CV
                </button>
            </div>
        </div>
    );
}

export default Inicio