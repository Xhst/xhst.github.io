'use client'; // Aggiungi la direttiva 'use client'

import React, { useState, useEffect } from 'react';
import projects from '../assets/images/projects.png';
import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_USERNAME = 'Xhst';

export const getRepositories = async (sort = 'updated_at', direction = 'desc') => {
    try {
        const response = await axios.get(
            `${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos?sort=${sort}&direction=${direction}`
        );
        return response.data;
    } catch (error) {
        console.error('Errore nel recupero dei repository:', error);
        return [];
    }
};

const getLanguageColor = (language: string) => {
    switch (language) {
        case 'JavaScript':
            return '#f1e05a';
        case 'TypeScript':
            return '#2b7489';
        case 'HTML':
            return '#e34c26';
        case 'CSS':
            return '#563d7c';
        case 'SCSS':
            return '#c6538c';
        case 'Python':
            return '#3572A5';
        case 'Java':
            return '#b07219';
        case 'C':
            return '#555555';
        case 'C++':
            return '#f34b7d';
        case 'C#':
            return '#178600';
        case 'Shell':
            return '#89e051';
        case 'PHP':
            return '#4F5D95';
        case 'Ruby':
            return '#701516';
        case 'Go':
            return '#00ADD8';
        case 'Swift':
            return '#ffac45';
        case 'Kotlin':
            return '#F18E33';
        case 'Rust':
            return '#dea584';
        case 'Dart':
            return '#00B4AB';
        case 'Vue':
            return '#2c3e50';
        case 'Cuda':
            return '#3A4E3A';
        case 'Jupyter Notebook':
            return '#DA5B0B';
        case 'R':
            return '#198CE7';
        case 'Scala':
            return '#c22d40';
        case 'TeX':
            return '#3D6117';
        case 'Perl':
            return '#0298c3';
        case 'Lua':
            return '#000080';
        case 'Haskell':
            return '#5e5086';
        case 'Elixir':
            return '#6e4a7e';
        case 'Clojure':
            return '#db5855';
        case 'GDScript':
            return '#355570';
        default:
            return '#000';
    }
};

const Projects = () => {
    const [repositories, setRepositories] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                const repos = await getRepositories();
                setRepositories(repos);
            } catch (error) {
                console.error('Error while fetching repositories:', error);
            } finally {
                setLoading(false); 
            }
        };

        fetchRepositories();
    }, []);

    const getRandomPath = () => {
        const paths = [
            "M0,128L40,128C80,128,160,128,240,133.3C320,139,400,149,480,144C560,139,640,117,720,122.7C800,128,880,160,960,170.7C1040,181,1120,171,1200,149.3C1280,128,1360,96,1400,80L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z",
            "M0,128L34.3,122.7C68.6,117,137,107,206,128C274.3,149,343,203,411,202.7C480,203,549,149,617,112C685.7,75,754,53,823,69.3C891.4,85,960,139,1029,144C1097.1,149,1166,107,1234,101.3C1302.9,96,1371,128,1406,144L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z",
            "M0,192L34.3,165.3C68.6,139,137,85,206,85.3C274.3,85,343,139,411,160C480,181,549,171,617,176C685.7,181,754,203,823,181.3C891.4,160,960,96,1029,101.3C1097.1,107,1166,181,1234,181.3C1302.9,181,1371,107,1406,69.3L1440,32L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z",
            "M0,128L34.3,112C68.6,96,137,64,206,53.3C274.3,43,343,53,411,90.7C480,128,549,192,617,186.7C685.7,181,754,107,823,85.3C891.4,64,960,96,1029,122.7C1097.1,149,1166,171,1234,154.7C1302.9,139,1371,85,1406,58.7L1440,32L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z",
            "M0,160L34.3,181.3C68.6,203,137,245,206,234.7C274.3,224,343,160,411,149.3C480,139,549,181,617,213.3C685.7,245,754,267,823,250.7C891.4,235,960,181,1029,165.3C1097.1,149,1166,171,1234,149.3C1302.9,128,1371,64,1406,32L1440,0L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z",
            "M0,256L34.3,229.3C68.6,203,137,149,206,133.3C274.3,117,343,139,411,160C480,181,549,203,617,213.3C685.7,224,754,224,823,240C891.4,256,960,288,1029,277.3C1097.1,267,1166,213,1234,181.3C1302.9,149,1371,139,1406,133.3L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z",
            "M0,128L34.3,122.7C68.6,117,137,107,206,122.7C274.3,139,343,181,411,176C480,171,549,117,617,112C685.7,107,754,149,823,186.7C891.4,224,960,256,1029,240C1097.1,224,1166,160,1234,144C1302.9,128,1371,160,1406,176L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z",
            "M0,128L34.3,149.3C68.6,171,137,213,206,208C274.3,203,343,149,411,122.7C480,96,549,96,617,90.7C685.7,85,754,75,823,74.7C891.4,75,960,85,1029,74.7C1097.1,64,1166,32,1234,42.7C1302.9,53,1371,107,1406,133.3L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z",
            "M0,32L34.3,48C68.6,64,137,96,206,106.7C274.3,117,343,107,411,128C480,149,549,203,617,208C685.7,213,754,171,823,138.7C891.4,107,960,85,1029,90.7C1097.1,96,1166,128,1234,117.3C1302.9,107,1371,53,1406,26.7L1440,0L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z",
            "M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,181.3C672,171,768,181,864,186.7C960,192,1056,192,1152,202.7C1248,213,1344,235,1392,245.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ];
        const randomIndex = Math.floor(Math.random() * paths.length);
        return paths[randomIndex];
    };

    return (
        <>
            <section className="rg-g">
            <div className="container">
                <div className="d-flex">
                    <div className="d-transp-box flex-shrink-1"
                        style={{
                            zIndex: 1,
                            position: "relative"
                        }}>
                        <h1>Projects</h1>
                    </div>
                    <div className="w-100 text-center anim_fadeInUp">
                        <img 
                            src={projects} 
                            alt="Projects" 
                            style={{ 
                                filter: "drop-shadow(0 1rem 10rem rgba(0,0,0,.8))",
                                margin: "-150px -200px",
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

            <section className="bg-white">
                {loading && (
                    <div className="text-center py-5">
                        <div className="spinner-border text-red" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
                {!loading && (
                <div className="container py-5">
                    <div className="row row-cols-1 row-cols-lg-2 g-5 card-group">
                        {repositories.map((repo: any) => (
                            // skip repository without description and the one with the same name as the username
                            !repo.name || repo.name === GITHUB_USERNAME ||
                            !repo.description ? null :
                            // render repository card
                            <div className="col" key={repo.id}>
                                <div className="card h-100 border-0 shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="color-green card-img-top" style={{ marginBottom: '-40px' }}>
                                    <path d={getRandomPath()} />
                                </svg>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {repo.name} 
                                            {repo.language && (
                                                <span className="badge ms-3" style={{
                                                    backgroundColor: getLanguageColor(repo.language)
                                                }}>{repo.language}</span>
                                            )}
                                        </h5>
                                        <p className="card-text">{repo.description}</p>
                                        {repo.topics && (
                                            <div className="mt-3">
                                                {repo.topics.map((topic: string) => (
                                                    <span key={topic} className="badge bg-secondary me-2">{topic}</span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                    <div className="card-footer mb-2" style={{ backgroundColor: 'transparent', border: 'none' }}>
                                        <a href={repo.html_url} className="btn btn-red mt-2" target="_blank" rel="noopener noreferrer">
                                        <i className="bi bi-github"></i> View project <i className="bi bi-chevron-double-right"></i>
                                        </a>
                                        {repo.homepage && (
                                            <a href={repo.homepage} className="btn btn-green ms-2 mt-2" target="_blank" rel="noopener noreferrer">
                                                <i className="bi bi-star-fill"></i> Demo <i className="bi bi-chevron-double-right"></i>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            </section>
        </>
    );
};

export default Projects;