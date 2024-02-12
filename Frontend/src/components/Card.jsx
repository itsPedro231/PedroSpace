
import PropTypes from 'prop-types';
// import py from "../assets/python.svg"

const Card = (props) =>{
    
    return(
        <div className="skill-card">
      <div className="icon">
        <img src={props.iconPath} height={75} width={75}/>
        
      </div>
      <div className="name" style={{fontFamily:'sans-serif', fontWeight:'bold', color:'#000'}}>{props.text}</div>
    </div>
    )
}

Card.propTypes = {
    // click: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    iconPath: PropTypes.string.isRequired
}

export default Card
