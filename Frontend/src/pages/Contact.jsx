import { useEffect, useState } from "react";
import { getRequest } from "../requests/Requests";

import Header from "../components/Header"


const Contact = () => {
    const [contacts, setContacts] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {  
            setContacts(await getRequest(import.meta.env.VITE_SERVER + "profile/contacts"))
        }
        fetchData()
      }, [])
    
    const contVal = Object.values(contacts)

    const contact = contVal.map(cont => 
    <div key={cont.name}>
        {cont.url === 'prat4258@mylaurier.ca' ? (
      <div>
        <a href={`mailto:${cont.url}`}>
          <img src={cont.img_url} height='100px' width='100px' style={{ cursor: 'pointer' }} alt={`${cont.name} icon`} />
        </a>
      </div>
    ) : (
      <div>
        <a href={cont.url}>
          <img src={cont.img_url} height='100px' width='100px' style={{ cursor: 'pointer' }} alt={`${cont.name} icon`} />
        </a>
      </div>
    )}
    </div>
    )


    return (
        <div>
            <Header></Header>
            
            <div style={{display:'flex', 
                flexDirection:'column', 
                flexWrap:'wrap', 
                border:'15px groove #6F4E37', 
                margin:'93px auto',
                color:'#000', 
                backgroundColor:'#dfdfdf', 
                gap:'70px', 
                maxWidth:'500px', 
                minWidth:'500px', 
                alignContent:'center'}}>

                <h1 style={{fontFamily:'monospace'}}>Contact me!</h1>   

                <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', gap:'50px', marginBottom:'50px'}}>{contact}</div>

            </div>
        </div>
        )  

}
export default Contact;
