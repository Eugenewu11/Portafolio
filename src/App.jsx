
import NavBar from './components/NavBar.jsx'
import Inicio from './components/Inicio.jsx'
import DarkVeil from './components/DarkveilBg.jsx'
import Tecnologias from './components/Tecnologias.jsx'
import './css/App.css' 

function App() {
   return(
    <div className="app-container">
        <div className="darkveil-background">
            <DarkVeil 
                hueShift={0}
                noiseIntensity={0.02}
                scanlineIntensity={0.05}
                speed={0.3}
                scanlineFrequency={0.01}
                warpAmount={0.1}
                resolutionScale={1}
            />
        </div>
        
        <div className="content-wrapper">
            <NavBar/>
            <Inicio/>
            <Tecnologias/>
        </div>
    </div>
   )
}

export default App