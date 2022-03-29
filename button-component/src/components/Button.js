import React from "react";

const Button = (props) => {
    return (
        <div className="button__item">
            <p>{props.title}</p>
            <button className={props.styles} type="button" >
                {props.startIcon}
                {props.name}
                {props.endIcon}
            </button>
        </div>
    );
};

Button.defaultProps = {
    name: 'Default'
}

export default Button;
