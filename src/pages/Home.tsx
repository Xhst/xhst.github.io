import planet from '../assets/images/planet.png'
import pc from '../assets/images/pc.png'
import icons from '../assets/images/icons.svg'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <section className="rg-g">
            <div className="container">
                <div className="d-flex">
                    <div className="d-transp-box flex-shrink-1 anim_fadeInUp">
                        <h1>Xhst</h1>
                        <p className="my-4 justify-content-center text-justify">
                            Hello! I'm Mattia (aka Xhst). I'm passionate about computer science, which I started studying self-taught at the age of 12 and then deepened with university studies.
                            I love exploring new technologies and applying them in
                            innovative projects, combining creativity and technical skills to
                            find efficient solutions.
                        </p>
                        <div className="justify-content-end">
                            <a target="_blank" href="https://github.com/Xhst" className="me-5"><i className="bi bi-github"></i></a>
                            <a target="_blank" href="https://discord.gg/J6RfwrnYfA" className="me-5"><i className="bi bi-discord"></i></a>
                            <a target="_blank" href="https://www.linkedin.com/in/mattia-micaloni/" className="me-5"><i className="bi bi-linkedin"></i></a>
                            <a href="mailto:xhstmtt@gmail.com" className="me-5"><i className="bi bi-envelope-fill"></i></a>
                        </div>
                    </div>
                    <div className="w-100 text-center anim_fadeInUp">
                        <img 
                            src={planet} 
                            alt="Planet" 
                            style={{ 
                                filter: "drop-shadow(0 1rem 10rem rgba(0,0,0,.8))",
                                marginTop: "-80px"
                            }} 
                        />
                    </div>
                </div>
            </div>
            <div className="rg-g-wave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path d="M0,224L48,229.3C96,235,192,245,288,240C384,235,480,213,576,213.3C672,213,768,235,864,234.7C960,235,1056,213,1152,202.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </section>
        <section className="bg-white">
            <div className="container">   
                <div className="row anim_fadeInUp">
                    <div className="col">
                        <h2 className="mb-5 color-red">Tech Stack</h2>
                        <img src={icons}/>
                        <Link className="btn btn-red mt-5" to="/projects">Explore projects <i className="bi bi-chevron-double-right"></i></Link>
                    </div>
                    <div className="col text-center">
                        <img src={pc} className="w-75" style={{ 
                                    filter: "drop-shadow(0 .5rem .5rem rgba(0,0,0,.4))"
                                }} />
                    </div>
                </div>     
            </div>
        </section>
        </>
    );
};

export default Home;