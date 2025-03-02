const footer = () => {
    return (
        <footer>
            <div className="footer-top">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path d="M0,128L40,128C80,128,160,128,240,133.3C320,139,400,149,480,144C560,139,640,117,720,122.7C800,128,880,160,960,170.7C1040,181,1120,171,1200,149.3C1280,128,1360,96,1400,80L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
            </svg>
            </div>
            <div className="container">    
                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top footer-bottom">
                <p>&copy; 2024 Xhst. All rights reserved.</p>
                <ul className="list-unstyled d-flex">
                    <li className="ms-3"><a target="_blank" href="https://github.com/Xhst"><i className="bi bi-github"></i></a></li>
                    <li className="ms-3"><a target="_blank" href="https://discord.gg/J6RfwrnYfA"><i className="bi bi-discord"></i></a></li>
                    <li className="ms-3"><a target="_blank" href="https://www.linkedin.com/in/mattia-micaloni/"><i className="bi bi-linkedin"></i></a></li>
                    <li className="ms-3"><a href="mailto:xhstmtt@gmail.com" className="me-5"><i className="bi bi-envelope-fill"></i></a></li>
                </ul>
                </div>
            </div>
            </footer>
    );
};

export default footer;