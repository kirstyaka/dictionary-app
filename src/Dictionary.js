import React, { useState } from 'react';
import "./Dictionary.css"
import axios from 'axios';
import Results from './Results';

export default function Dictionary() {
let [word, setWord] = useState(""); 
let[results, setResults] = useState(null);  

function handleResponse(response) {
    setResults(response.data[0]);
}

 function Search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${word}`;
    //documentation: https://dictionaryapi.dev/

    axios.get(apiUrl).then(handleResponse);
}

function handleWordChange(event) {
setWord(event.target.value);
}

    return (
        <div className="Dictionary">
            <section>
                <h1> Which word do you want to search for?</h1>
            <form onSubmit={Search}>
             <input type="search" onChange={handleWordChange} placeholder="Enter your word..." autoFocus={true} />
            </form>
            </section>
            <Results results={results} />
        </div>
    );
}