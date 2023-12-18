import React from "react"
import Card from "./Card"
import movies from "../movies"


function App() {
    return <>
        <h1>Malak Fav Movies</h1>
        <hr />
        <div className="main">
            {movies.map(movie => {
                return <Card
                    key={movie.id}
                    color={movie.color}
                    title={movie.title}
                    img={movie.img}
                    year={movie.year}
                    description={movie.description}
                />

            })}
        </div>
    </>
}

export default App