import planet from '../assets/images/planet.png'
import pc from '../assets/images/pc.png'
import icons from '../assets/images/icons.svg'
import about from '../assets/images/about.png'
import { Link, useNavigate } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
        <section className="rg-g">
            <div className="container">
                <div className="d-flex">
                    <div className="d-transp-box flex-shrink-1 anim_fadeInUp"
                        style={{
                            zIndex: 1,
                            position: "relative"
                        }}>
                        <h1>Xhst</h1>
                        <p className="my-4 justify-content-center text-justify">
                            Hello! I'm Mattia (aka Xhst), a software engineer from Italy. I'm passionate about computer science and I love exploring new technologies and applying them in innovative projects. 
                            <a className="fs-5 text-decoration-underline" style={{ cursor: "pointer" }} onClick={() => {
                                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            }}
                            >Read more..</a>
                        </p>
                        <div className="justify-content-end">
                            <a target="_blank" href="https://github.com/Xhst" className="me-4 me-md-5"><i className="bi bi-github"></i></a>
                            <a target="_blank" href="https://discord.gg/J6RfwrnYfA" className="me-4 me-md-5"><i className="bi bi-discord"></i></a>
                            <a target="_blank" href="https://www.linkedin.com/in/mattia-micaloni/" className="me-4 me-md-5"><i className="bi bi-linkedin"></i></a>
                            <a href="mailto:xhstmtt@gmail.com" className="me-4 me-md-5"><i className="bi bi-envelope-fill"></i></a>
                        </div>
                    </div>
                    <div className="w-100 text-center anim_fadeInUp">
                        <img 
                            src={planet} 
                            alt="Planet" 
                            style={{ 
                                filter: "drop-shadow(0 1rem 10rem rgba(0,0,0,.8))",
                                margin: "-80px -150px",
                                position: "absolute",
                                zIndex: 0
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
        <section id="about" className="bg-white mt-5">
            <div className="container">   
                <div className="row anim_fadeInUp">
                    <div className="col" style={{ position: "relative" }}>
                        <h2 className="my-5 color-green">About me</h2>
                        <p className="my-4 justify-content-center text-justify">
                        I'm Mattia (aka Xhst) a software engineer from Italy. I'm passionate about computer science, which I started studying self-taught at the age of 12 and then deepened with university studies.
                        I love exploring new technologies and applying them in
                        innovative projects, combining creativity and technical skills to
                        find efficient solutions.
                        I'm graduated with a Master degree in Computer Science at the University of Roma Tre, where I studied algorithms, data structures, software engineering, databases, computer networks, data engineering, artificial intelligence, operating systems, and much more.
                        
                        </p>
                    </div>
                    <div className="col text-center d-none d-lg-block" style={{ position: "relative" }}>
                    <img src={about} style={{ 
                            filter: "drop-shadow(0 .5rem .5rem rgba(0,0,0,.4))",
                            position: "absolute",
                            width: "calc(34rem + 2vw)",
                            objectFit: "fill",
                            right: "calc(-80px + 2vw)",
                            top:0,
                            zIndex: 1
                        }} />
                    </div>
                    
                    
                </div>     
            </div>
        </section>
        <section className="bg-gray">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{fill: "#fafafa"}}>
                <path d="M0,256L34.3,229.3C68.6,203,137,149,206,133.3C274.3,117,343,139,411,160C480,181,549,203,617,213.3C685.7,224,754,224,823,240C891.4,256,960,288,1029,277.3C1097.1,267,1166,213,1234,181.3C1302.9,149,1371,139,1406,133.3L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path>
            </svg>
            <div className="container">
                <div className="row anim_fadeInUp">
                    <div className="col text-center">
                        <h2 className="mb-5 color-blue">Contacts</h2>
                        <ContactForm />
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{fill: "#fafafa", marginBottom: "-2px"}}>
                <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </section>
        <section className="bg-white">
            <div className="container">   
                <div className="row anim_fadeInUp">
                    <div className="col text-center d-none d-lg-block" style={{ position: "relative" }}>
                    <img src={pc} style={{ 
                            filter: "drop-shadow(0 .5rem .5rem rgba(0,0,0,.4))",
                            position: "absolute",
                            width: "calc(25rem + 2vw)",
                            objectFit: "fill",
                            left: "calc(-80px + 2vw)",
                            top:0,
                            zIndex: 1
                        }} />
                    </div>
                    <div className="col" style={{ position: "relative" }}>
                        <h2 className="mb-5 color-red">Tech Stack</h2>
                        <img src={icons} style={{
                            maxWidth: "100%",
                        }}/>
                        <Link className="btn btn-red mt-5" to="/projects">Explore projects <i className="bi bi-chevron-double-right"></i></Link>
                    </div>
                    
                </div>     
            </div>
        </section>
        </>
    );
};

export default Home;