import React from 'react'

export default function SearchBar({githubUser, setGithubUser}) {
    const onChange = (e) =>{
        setGithubUser(e.target.value)
    }
    return(
        <div className="searchbar">
        <input 
            placeholder="Search"
            type="text" 
            onChange={(event) => {onChange(event)}}
            onKeyUp={(event) => {onChange(event)}}
            onPaste={(event) => {onChange(event)}}
        />
        </div>
    );
}
