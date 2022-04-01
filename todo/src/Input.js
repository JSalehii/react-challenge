import React from "react";

function Input({ clicked }) {
    return (
        <form className="form" onSubmit={(e) => {e.preventDefault();clicked();}}>
            <input type="text" id="form-input" placeholder="add details" />
            <button type="button" onClick={clicked}>
                Add
            </button>
        </form>
    );
}

export default Input;
