import React from 'react'
import PropTypes from 'prop-types'
const ToogleButton = (props) => {
  return (
    <div className="toggle-btn">
      <div className="toggle-btn__container">
        <button className="toggle-btn__button"
        onClick={props.onClick ? () => props.onClick() : null}
        > </button>
        <div className="toggle-btn__circle"></div>
      </div>
    </div>
  )
}
ToogleButton.propTypes = {
  onclick: PropTypes.func.isRequired
}
export default ToogleButton
