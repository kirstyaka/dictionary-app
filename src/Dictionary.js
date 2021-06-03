import React, { useState } from 'react';
import "./Dictionary.css"
import axios from 'axios';
import Results from './Results';
import Photos from './Photos';

export default function Dictionary() {
let [word, setWord] = useState(""); 
let[results, setResults] = useState(null);  
let[photos, setPhotos] = useState(null);

function handleDictionaryResponse(response) {
    setResults(response.data[0]);
}

function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
}

 function Search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${word}`;
    //documentation: https://dictionaryapi.dev/

    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = "563492ad6f917000010000014980aa51a5a74ee092df4bbf37bb6ff0";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
    let headers = {"Authorization" : `Bearer ${pexelsApiKey}`};


    axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse); 
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
            <Photos photos={photos} />
        </div>
    );
}