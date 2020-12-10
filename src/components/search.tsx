import React from 'react'
import '../components/search.css'

const Search = () => {
    return (
        <div id="cover" className="container">
            <form method="get" action="">
            <div className="tb">
             <div className="td"><input type="text" placeholder="Search" required></input></div>
            <div className="td" id="s-cover">
             <button type="submit">
             <div id="s-circle"></div>
             <span></span>
            </button>
             </div>
             </div>
            </form>
        </div>
    );
}


export default Search