import React from "react";

function Result({ item, id, changed, check }) {
    return (
        <div className="item">
            <input type="checkbox" id={id} onChange={() => changed(id)} />
            <label htmlFor={id} className={check ? 'line': null}>{item}</label>
        </div>
    );
}

export default Result;
