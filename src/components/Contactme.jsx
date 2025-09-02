import '../css/contactme.css'

function Contactme() {
    return(
        <footer>
            <div className='contact-container'>

                <div className='title'>
                    Contacto
                </div>

                <div className='info-container'>
                    <div>
                        <div className='phone-container'>
                            <img className='phoneImg' src='../phone.png' alt='Teléfono'></img>
                            <div className='phone-number'>
                                +504 33506220
                            </div>
                        </div>

                        <div className='mail-container'>
                            <img className='mailImg' src='../mail.png' alt='Email'></img>
                            <div className='email'>
                                eugenekwu@gmail.com
                            </div>
                        </div>

                        <div className='linkedin-container'>
                            <img className='linkedinImg' src='../linkedin.png' alt='LinkedIn'></img>
                            <div className='linkedin-div'>
                                <a 
                                    className='a-linkedin' 
                                    href='https://www.linkedin.com/in/eugene-wu-581776380/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Eugene Wu
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Contactme