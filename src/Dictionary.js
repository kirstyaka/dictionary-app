import React, { useState } from 'react';
import "./Dictionary.css"

export default function Dictionary() {
let [word, setWord]=useState("");   

 function Search(event) {
     event.preventDefault();
                alert(`Searching for ${word}`)
            }
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