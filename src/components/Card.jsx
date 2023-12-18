import React from "react"

function Card(props) {
    return <>
        <main class="container">
            <div class="card">
                <img src={props.img} class="front" alt="hello" />
                <div class="back" style={props.color}>
                    <h2>{props.title}</h2>
                    <span>{props.year}</span>
                    <p>{props.description}</p>
                </div>
            </div>
        </main>
    </>
}

export default Card