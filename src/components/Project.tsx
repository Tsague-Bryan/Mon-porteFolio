import Title from "./Title"
import img1 from '../assets/projects/1.png';

import img3 from '../assets/projects/3.png';

import img5 from '../assets/projects/5.png';

import { Github, Video } from "lucide-react";
//import { Github, Video } from "lucide-react";


const projects = [
    {
        id: 1,
        title: 'Gestionnaire de tâches',
        description: 'une application de gestion de tâches intuitive et conviviale conçue pour vous aider à organiser vos projets et à optimiser votre productivité. Que vous soyez un étudiant, un professionnel ou un gestionnaire de projet, TaskMaster vous permet de suivre vos tâches, de définir des priorités et de respecter vos échéances.',
        technologies: ['React', 'Node.js', 'Tailwind CSS'],
        demoLink: '#',
        repoLink: '#',
        image: img1,
    },
   
    {
        id: 2,
        title: 'Portfolio interactif',
        description: 'Mon Portfolio est une vitrine interactive de mes compétences et de mes projets, conçue à l aide de React js HTML CSS et JavaScript Ce site a été développé pour présenter mes réalisations en tant que développeur web et pour démontrer mes connaissances en matière de technologies modernes.',
        technologies: ['HTML', 'CSS', 'JavaScript','React js'],
        demoLink: '#',
        repoLink: 'https://github.com/Tsague-Bryan/Mon-porteFolio.git',
        image: img3,
    },
   
    {
        id: 3,
        title: 'systeme de retrouvaille d objets',
        description: 'FindIT est une plateforme web communautaire qui facilite la retrouvaille d objets perdus entre particuliers. L application met en relation les personnes ayant perdu un objet avec celles qui l ont trouvé dans une même zone géographique.',
        technologies: ['React.js', 'MongoDB', 'Node js','Google Map'],
        demoLink: '#',
        repoLink: '#',
        image: img5,
    },
   
];


const Project = () => {
    return (
        <div id="Project">
            <Title title="Mes projets" />
            <div className="grid md:grid-cols-3 gap-4">
                {
                    projects.map((project)=>(
                        <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg ">
                            <img src={project.image} alt="project.title" className="w-full rounded-xl h-56 object-cover" />
                            <div>
                                <h1 className="my-2 font-bolt">
                                    {project.title}
                                </h1>
                                <p className="text-sm">{project.description}</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech)=>(
                                    <span className="badge badge-accent badge-sm ">
                                        {tech}
                                    </span>

                                ))}

                            </div>
                            <br />
                            <div className="flex  ">
                                <a href={project.demoLink} className="btn btn-accent w-2/3 ">
                                    Demo <Video className="w-4"/>
                                </a>

                                <a href={project.repoLink} className="btn btn-neutral w-1/3 ml-2">
                                    Github <Github className="w-4"/>
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    ) 
}
export default Project