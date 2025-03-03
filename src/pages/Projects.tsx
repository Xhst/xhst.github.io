import projects from '../assets/images/projects.png'

const Projects = () => {
    return (
        <>
        <section className="rg-g">
            <div className="container">
                <div className="d-flex">
                    <div className="d-transp-box flex-shrink-1 anim_fadeInUp">
                        <h1>Projects</h1>
                    </div>
                    <div className="w-100 text-center anim_fadeInUp">
                        <img 
                            src={projects} 
                            alt="Projects" 
                            style={{ 
                                filter: "drop-shadow(0 1rem 10rem rgba(0,0,0,.8))",
                                margin: "-150px -150px",
                                position: "absolute",
                                zIndex: -1
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
        </>
    );
};

export default Projects;