import React, {useState, useEffect} from "react"
import {FaSearch} from "react-icons/fa"
import "./SearchBar.css"
import axios from "axios"

const SearchBar = () => {

    const [input, setInput] = useState("")
    const [shows, setShows] = useState([])
    const [summary, setSummary] = useState("")
    

    useEffect(()=> {
        axios({
            url: 'https://api.tvmaze.com/search/shows', 
            params : {
                q: input,
                images: true
            }
        }).then(function(response){
            let results = response.data
            let gallery = results.map((poster) => {
                return `${poster.show.image.medium}`
            })
            setShows(results)
            console.log(results)
            if (input === true && results.length === 0) {
                alert("No Mathes were Found")
            }
        })
        
    }, [input])

    const handleChange = (value) => {
        setInput(value)
        console.log(shows)
    }

    const showInfo = (e) => {
        const results = document.querySelector('results')

    }
    
    


    
    return (
        <>
        <div className="input-wrapper">
            <FaSearch id="search-icon"/>   
            <input type='text' placeholder="Type to Search..." value={input} onChange={(e) => handleChange(e.target.value)}></input> 
        </div>
        <ul>
            {shows.map((show)=> (
                <li id="item" key={show.show.id} onClick={(e) => showInfo()}>  
                    <p><a href="{show.show.url}">{show.show.name}</a> </p>
                    <img src={show.show.image.medium} alt={show.description}/>
                    <p>{show.show.summary}</p>
                    <p>{show.show.genres[0]}</p>
                    <p>{show.show.language}</p>
                    <p>{show.show.premiered}</p>
                </li>
            ) 
            )}
        </ul>
        {/* <div id="results">
            <ul className="info">
                {shows.map((show) => (
                    <li className="listed" key={show.show.id}>
                        {show.show.summary}
                    </li>
                ))}
            </ul>
        </div> */}
        </>
    )
}

export default SearchBar