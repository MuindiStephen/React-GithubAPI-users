import React from 'react'
import { useState, useEffect } from 'react'
import SearchBar from './SearchBar';
import UserInfoCard from './UserInfoCard';


export default function GithubApi() {
    const [userData, setUserData] = useState([]);
    const [githubUser, setGithubUser] = useState('MuindiStephen');

    useEffect(() => {
        fetch(`https://api.github.com/users/${githubUser}`)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [githubUser]);
  return (
    <div>
        <SearchBar githubUser={githubUser} 
        setGithubUser={setGithubUser} />
             
        <UserInfoCard userData={userData} />
    </div>
  )
}
