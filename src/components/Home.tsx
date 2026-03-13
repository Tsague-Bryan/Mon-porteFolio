import { FileDown } from "lucide-react"
import profil from '../Assets/profil.jpg'
 const fileUrl = '../Assets/Mon Cv Tsague.pdf';
const Home = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10 " id="Home">
            <div className="flex flex-col">
                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">Bonjour ,<br /> je suis {" "} <span className="text-accent">Tsague <br />Zomegni Bryan</span></h1>
                <p className="my-4 text-md text-center md:text-left">
                    je suis un developpeur fullstack<br /> avec 5ans d'experience, utilisant React <br /> et Node.js. Conctactez moi si vous avez besoin de mes services.
                </p> <a href={fileUrl} className="btn  btn-accent text-center md:w-fit"><FileDown  className="w-5 h-5" />Telecharger mon Cv</a>
            </div>
            <div className="md:ml-60">
                <img src={profil} alt="" className="w-96 h-96 object-cover border-8 border-accent shadow-x1" style={{
                    borderRadius: "30% 70% 70% 30%/67% 62% 38% 33%"
                }} />
            </div>
        </div>
    )
}
export default Home