import { useEffect, useState } from "react";
import { getRequest } from "../requests/Requests";

import Header from "../components/Header"

function Projects(){
    const [projects, setProjects] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {  
            setProjects(await getRequest(import.meta.env.VITE_SERVER + "profile/proj"))
        }
        fetchData()
      }, [])
    
    const projVal = Object.values(projects)

    const project = projVal.map(proj => 
    <div key={proj.company}>

        <div style={{display:'flex', flexDirection:'row', alignItems:'center', margin:'30px'}}>
            
            

            <div style={{margin:'20px', display:'flex', flexDirection:'column', maxWidth:'600px', color:"#000"}}>
                
                <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}>

                    <text style={{fontWeight:"bold", fontSize:"30px", marginRight:'40px', textAlign:'left'}}>{proj.name}</text>
                        <a href={proj.url}></a>

                </div>
                
                <text style={{fontWeight:'bold', textAlign:'left'}}>{proj.tech}</text>
                
                <text style={{marginTop:'15px', textAlign:'left'}}>{proj.about}</text>
                

            </div>
        </div>
    </div>
    )
    return(
        <div style={{ backgroundColor: '#dfdfdf'}}>
            <Header></Header>

            <div style={{display:'flex', 
                flexWrap:'wrap', 
                flexDirection:'column', 
                maxWidth:'700px',
                margin:'93px auto',
                border:'15px groove #6F4E37', 
                padding:'50px'}}>
                {project}
            </div>
        </div>
    )
}
export default Projects