import React, { useState, useEffect } from "react";
import Item from "./Item";
import Sync from './assets/img/sync.svg';

function Quote() {
    const [list, setList] = useState('');
    const [url, setUrl] = useState("https://api.quotable.io/random");

    useEffect(() => {
        getRandomQuote();
    }, []);

    const getRandomQuote = () => {
        const req = async () => {
            let data = await fetch(url);
            let res = await data.json();
            return res;
        };
        req().then((res) => setList(res));
    }

    return (
        <div className="container">
            <div className="random">
                <span>random</span>
                <img src={Sync} className="random__icon" onClick={getRandomQuote} />
            </div>
            <Item text={list.content} genre={list.tags} name={list.author} />
        </div>
    );
}

export default Quote;
