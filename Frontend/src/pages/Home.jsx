import { useEffect, useState } from "react";
import { getRequest } from "../requests/Requests";

import Header from "../components/Header"

function Home(){
    const [profile, setProfile] = useState([])
    

    useEffect(() => {
        const fetchData = async () => {  
            setProfile(await getRequest(import.meta.env.VITE_SERVER + "profile/prof"))
        }
        fetchData()
      }, [])
    
    const profileVal = Object.values(profile)

    const name = profileVal.map(prof => 
    <div key={prof.name}>
        

        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', margin:'70px auto'}}>
            <div style={{display:'flex', flexDirection:'row', }}>
                
                <img src={prof.img_url} style={{
                width: '400px',
                height: '400px', 
                borderRadius: '50%',
                border: '8px solid #000',
                objectFit: 'cover', 
                margin:'50px',
                
                
                }}/>
                
            </div>

            <div style={{display:'flex', flexDirection:'column', color:'#000',}}>
                <text style={{fontFamily:"monospace", fontSize:'30px', fontWeight:'bold', textAlign:'left', marginBottom:'30px'}}>{"Hi there! I'm Pedro"}</text>
                <text style={{fontFamily:'monospace', fontSize:'20px', textAlign:'justify'}}>{prof.about_me}</text>
            </div>
        </div>            
    </div>
    )

    


    return (<div style={{backgroundColor: '#dfdfdf'}}>
        <Header></Header>
        <div style={{display:'flex', 
                flexWrap:'wrap', 
                flexDirection:'column', 
                margin:'93px auto',
                border:'15px groove #6F4E37', 
                padding:'50px'}}>{name}</div>
    </div>)

}

export default Home;