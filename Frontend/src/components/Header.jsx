import Button from "./Button"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()
    
    const home = () => {
        navigate("/")
    }
    const skills = () => {
        navigate("/skills")
    }
    const experience = () => {
        navigate("/experience")
    }
    const projects = () => {
        navigate("/projects")
    }
    
    const contact = () => {
        navigate("/contact")
    }


    return (
        <div className="div-header">
        <Button click={home} text="Home" className="button-header"></Button>
        <Button click={skills} text="Skills" className="button-header"></Button>
        <Button click={experience} text="Experience" className="button-header"></Button>
        <Button click={projects} text="Projects" className="button-header"></Button>   
        <Button click={contact} text="Contact" className="button-header"></Button>
        </div>
)
}

export default Header