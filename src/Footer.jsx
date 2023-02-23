import './footer.css';
import { bootstrap, css, git, html, js, node, react } from './images';

export const Footer = () => {
    return (
        <footer className="mb-4 pb-4">
            <hr className="border border-secondary border-2 opacity-25" />

            <h2 className="text-center pt-3">Frontend Developer</h2>
            <p className="text-center mx-auto col-md-7">Hola, soy <span className="fw-bold text-primary">Josué Pérez. </span>Me
                especializo en la producción, diseño, planificación y organización de proyectos de desarrollo web. Además, tengo
                conocimientos en varias <span className="fw-bold text-primary">tecnologías</span> relacionadas.</p>
            <div className="d-flex justify-content-center">
                <ul className="col-md-4 nav justify-content-center pb-3 mb-3 gap-1">
                    <li className="nav-item hvr-float-shadow">
                        <img loading="lazy" width="40" src={html} alt="icon logo png html5" />
                    </li>
                    <li className="nav-item hvr-float-shadow">
                        <img loading="lazy" width="40" src={css} alt="icon logo png css3" />
                    </li>
                    <li className="nav-item hvr-float-shadow">
                        <img loading="lazy" width="40" src={js} alt="icon logo png javascript" />
                    </li>
                    <li className="nav-item hvr-float-shadow">
                        <img loading="lazy" width="40" src={git} alt="icon logo png git" />
                    </li>
                    <li className="nav-item hvr-float-shadow">
                        <img loading="lazy" width="40" src={node} alt="icon logo png node" />
                    </li>
                    <li className="nav-item hvr-float-shadow">
                        <img loading="lazy" width="40" src={react} alt="icon logo png react" />
                    </li>
                    <li className="nav-item hvr-float-shadow">
                        <img loading="lazy" width="40" src={bootstrap} alt="icon logo png bootstrap" />
                    </li>
                </ul>
            </div>

            <p className="text-center">Pueden conocer mis proyectos en mi perfil de GitHub, LinkedIn y Twitch.</p>
            <ul className="nav justify-content-center list-unstyled d-flex">
                <li className="ms-3">
                    <a className="text-muted hvr-icon-fade-git" target="_blank" href="https://github.com/josueperezparejo">
                        <i className="fa-2xl fa-brands fa-github hvr-icon-git"></i>
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-muted hvr-icon-fade-linkedin" target="_blank"
                        href="https://www.linkedin.com/in/josue-david-perez-parejo-769983161">
                        <i className="fa-2xl fa-brands fa-linkedin-in hvr-icon-linkedin"></i>
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-muted hvr-icon-fade-twitch" target="_blank" href="https://www.twitch.tv/josuepp1997">
                        <i className="fa-2xl fa-brands fa-twitch hvr-icon-twitch"></i>
                    </a>
                </li>
            </ul>
                            
        </footer>
    )
}
