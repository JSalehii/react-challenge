import React, { useState, useEffect } from "react";
import Item from "./Item";
import Sync from "./assets/img/sync.svg";

function Quote() {
    const [list, setList] = useState([]);
    const [arr, setArr] = useState(false);
    const [name, setName] = useState('');
    const url = "https://api.quotable.io/";
    useEffect(() => {
        getRandomQuote();
    }, []);

    const getRandomQuote = () => {
        setArr(false);
        const req = async () => {
            let addr = url + "random";
            let data = await fetch(addr);
            let res = await data.json();
            return res;
        };
        req().then((res) => setList([res]));
    };

    const getAllQuotes = (name) => {
        
        const req = async () => {
            const addr = url + "quotes?author=" + name;
            setName(name);
            setArr(true);
            const data = await fetch(addr);
            const res = await data.json();
            const arr = res.results;
            return arr;
        };
        req().then(res => setList(res));
    };

    const data = list.map((item) => {
        return (
            <Item
                key={item._id}
                text={item.content}
                name={item.author}
                genre={item.tags}
                getQuotes={getAllQuotes}
                flag={arr}
            />
        );
    });

    return (
        <div className="container">
            <div className="random">
                <span>random</span>
                <img
                    src={Sync}
                    className="random__icon"
                    onClick={getRandomQuote}
                    alt="random-icon"
                />
            </div>
            <div className="name">{arr ? name : null}</div>
            <div className="quotes">{data}</div>
        </div>
    );
}

export default Quote;
