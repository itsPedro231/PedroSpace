import { getRequest } from "../requests/Requests"
import { useEffect, useState } from "react"
import Card from "../components/Card"
import Header from "../components/Header"


const Skills = () => {
    const [skills, setSkills] = useState([])

    useEffect(() => {
        const fetchData = async () => {  
            setSkills(await getRequest(import.meta.env.VITE_SERVER + "skills/"))
          
        }
    
        fetchData()
      }, [])
    const skillVal = Object.values(skills)

    const skillNames = skillVal.map(item =>
        <div key={item.name} >
            <Card className="card" text={item.name} iconPath={item.img_url}></Card>
            </div>)
    console.log(skillVal)

    return (
        <div style={{ backgroundColor: '#dfdfdf'}}>
            <Header></Header>
            <div 
            style={{display:"flex", 
                flexWrap:'wrap', 
                gap:"70px", 
                maxWidth:'700px', 
                justifyContent:'center', 
                margin: '93px auto', 
                border:'15px groove #6F4E37', 
                padding:'50px'}}>

                {skillNames}
                
            </div>
        </div>
            
    )
}

export default Skills
