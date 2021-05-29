import React, { useState } from 'react';
import "./Dictionary.css"
import axios from 'axios';

export default function Dictionary() {
let [word, setWord]=useState("");   

function handleResponse(response) {
    console.log(response.data[0]);
}

 function Search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${word}`;
console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
}

//https://api.dictionaryapi.dev/api/v2/entries/en_GB

function handleWordChange(event) {
setWord(event.target.value);
}

    return (
        <div className="Dictionary">
            <form onSubmit={Search}>
             <input type="search" onChange={handleWordChange} placeholder="Enter your Word" autoFocus={true} />
            </form>
        </div>
    );
}