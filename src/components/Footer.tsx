import { Container, GithubIcon, LinkedinIcon, Youtube } from "lucide-react"

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center  p-10">
            <aside>
                <a href="" className="flex items-center font-bold text-3xl md:text-xl"><Container size={25} className="w-10 h-10" />

                </a>
                <p className="font-bold">
                    TSAGSON<span className="text-accent">DEV</span>
                </p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.linkedin.com/in/bryan-tsague-zomegni-59b5783aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
                        <LinkedinIcon className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://www.youtube.com/@tsagson" target="_blank" rel="noopener noreferrer">
                        <Youtube className="w-6 h-6 text-current" />
                    </a>
                    <a href="https://github.com/Tsague-Bryan?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="w-6 h-6 text-current" />
                    </a>
                </div>
            </nav>
        </footer>
    )
}
export default Footer