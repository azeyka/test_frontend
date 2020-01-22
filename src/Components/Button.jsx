import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function Button(props) {
  const { connection } = props;
  const isButtonOn = useSelector(state => state.buttonReducer);
  const style = {
    width: props.size,
    height: props.size,
    borderRadius: props.size,
    background: isButtonOn ? props.colorOn : props.colorOff,
    color: props.fontColor,
    outline: "none",
    textTransform: "uppercase",
    fontWeight: 600
  };

  const handleClick = event => {
    event.preventDefault();
    connection.send("");
  };

  return (
    <button style={style} onClick={handleClick}>
      {isButtonOn ? "On" : "Off"}
    </button>
  );
}

Button.propTypes = {
  size: PropTypes.string,
  colorOn: PropTypes.string,
  colorOff: PropTypes.string,
  fontColor: PropTypes.string
};

Button.defaultProps = {
  size: "150px",
  colorOn: "red",
  colorOff: "gray",
  fontColor: "white"
};

export default Button;
