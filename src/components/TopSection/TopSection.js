import React from 'react';
import './TopSection.css';

export default function TopSection() {
    return (
        <div id="top-section" className="text-center">
            <h1>Best Foods waiting for you to taste</h1>
            <input type="text" placeholder="Search food items" id="input"></input>
            <button id="search"> Search</button>
        </div>
    )
}
