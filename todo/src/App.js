import React, { useState } from "react";
import Input from "./Input";
import Result from "./Result";

function App() {
    const [list, setList] = useState([]);

    //get input from user and save it
    const getInput = () => {
        let input = document.getElementById("form-input");
        const valueInput = input.value;
        setList((previousState) => {
            return [...previousState, {val: valueInput, checked: 0}];
        });
        input.value = "";
    };

    const checkHandler = (id) => {
        const newArr = list.map((obj, index) => {
            if(index === id) {
                return {...obj, checked: !obj.checked}
            }
            return obj;
        })

        setList(newArr);
    }

    // return an array of todo list
    // const res = list.map((item, index) => {
    //     return <Result key={index} item={item} id={index} changed={checkHandler} />;
    // });

    const res = list.map((value, index) => {
        return <Result key={index} item={value.val} id={index} check={value.checked} changed={checkHandler} />;
    })
    return (
        <div className="app">
            <h1>#todo</h1>
            <ul className="nav">
                <li>
                    <button type="button">All</button>
                </li>
                <li>
                    <button type="button">Active</button>
                </li>
                <li>
                    <button type="button">Complated</button>
                </li>
            </ul>
            <hr />
            <Input clicked={getInput} />
            {res}
        </div>
    );
}

export default App;
