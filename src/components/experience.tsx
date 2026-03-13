import Title from "./Title"

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.png";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgPRISMA from "../assets/techno/prisma.webp";

import google from "../assets/companies/Forama.jfif";
import meta from "../assets/companies/gl.png";
import amazon from "../assets/companies/min.jfif";

const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "TypeScript", image: imgTYPE },
    { id: 8, name: "Laravel", image: imgNEXT },
    { id: 9, name: "Flutter", image: imgPRISMA },
];
const experiences = [
    {
        id: 1,
        role: "Fullstack Developer",
        company: "Forama Sarl",
        period: "janvier 2026 - Présent",
        description: [
            "Mise sur pied d'une interface web de reabonnement Canal +",
            "Stagiaire pour une expérience du génie logiciel en entreprise!",
        ],
        image: google,
    },
    {
        id: 2,
        role: "Manager Marketing",
        company: "Empire by Krole",
        period: "mars 2025 - 2026",
        description: [
            "Création d'une plateforme interne de collaboration pour les équipes.",
            "Mise en place d'une architecture scalable et optimisée.",
        ],
        image: meta,
    },
    {
        id: 3,
        role: "Developpeur junior",
        company: "Délégation des postes et télécommunications",
        period: "2019 - 2020",
        description: [
            "Assistance à la gestion de projets en appliquant les methodologies apprises durant la formation",
            "Implémentation des tests unitaires.",
        ],
        image: amazon,
    },
];


const Experience = () => {
    return (
        <div id="experience">
            <Title title="Experiences" />
            <div  className="flex flex-col-reverse md:flex-row justify-center items-center">
                <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/4  mt-4 md:mt-0 " >

                    {skills.map((skill) => (
                        <div key={skill.id} className="flex justify-center items-center flex-col">
                            <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                                <img src={skill.image} alt="skill.name" className="object-cover rounded-full h-full w-ful l" />
                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>

                        </div>
                    ))

                    }
                </div>
                <div className="md:ml-4 flex flex-col space-y-4">
                        {experiences.map((experience) => (
                            <div key={experience.id} className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg ">
                                <div className="flex items-center">
                                    <img src={experience.image} alt={experience.company} className="object-cover h-10 w-10" />
                                    <div className="ml-4">
                                        <h1 className="text-xl text-accent font-bold">
                                            {experience.role} , {experience.company}
                                        </h1>
                                        <span>{experience.period}</span>
                                    </div>
                                </div>
                                <ul className="list-disc ml-16 mt-2">
                                    {
                                        experience.description.map((desc, index) => (
                                            <li key={index}>
                                                <div>{desc}</div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))}
                </div>
                
            </div>
        </div>
    )
}
export default Experience