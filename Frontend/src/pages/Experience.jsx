import { useEffect, useState } from "react";
import { getRequest } from "../requests/Requests";

import Header from "../components/Header"

const Experience = () => {
    const [experience, setExperience] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {  
            setExperience(await getRequest(import.meta.env.VITE_SERVER + "profile/exp"))
        }
        fetchData()
      }, [])
    
    const expVal = Object.values(experience)

    const exp = expVal.map(exp => 
    <div key={exp.company}>

        <div style={{display:'flex', flexDirection:'row', alignItems:'center', margin:'30px'}}>
            
            <img 
                src={exp.img_url} 
                alt="" 
                height="90px" 
                width="90px">
            </img>

            <div style={{margin:'20px', display:'flex', flexDirection:'column', maxWidth:'600px', color:"#000"}}>
                
                <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}>

                    <text style={{fontWeight:"bold", fontSize:"30px", marginRight:'40px', textAlign:'left'}}>{exp.company}</text>
                    <text style={{textAlign:'right'}}>{exp.time}</text>

                </div>
                
                <text style={{fontWeight:'bold', textAlign:'left'}}>{exp.title}</text>
                <text style={{marginTop:'15px', textAlign:'left'}}>{exp.about}</text>
                

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
                {exp}
            </div>
        </div>
    )
}
export default Experience