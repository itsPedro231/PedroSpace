import PropTypes from 'prop-types';
// import { styled } from 'styled-components'


const Button = (props) => {
    
    return (
    <button onClick={props.click} className={props.className}>
      {props.text}
      </button>
  )
}

Button.propTypes = {
    click: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
}
export default Button