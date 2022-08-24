import React, { useState } from 'react';
import './App.css';
import Description from './Components/Description';
import User from './Components/User';
import Username from './Components/Username.js';
import Card from './Components/Card';
import Form from './Components/Form';
import UserInput from './Components/UserInput';

function App() {

const Url="https://api.github.com/users";

const [state,setState] =useState({
  imageUrl : "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
  user :"Your GitHub Profile Name",
  username:"Your UserName",
  description:"Your Description",
  following :0,
  followers:0,
});

const [searchText ,setSearchText]=useState("");

const handleAPI = () =>{
  fetch(`${Url}/${searchText}`)
  .then((res) => res.json())
  .then((result) => {
    setState ({
      imageUrl:result.avatar_url,
      user :result.name,
      username:result.login,
      description:result.bio,
      following :result.following,
      followers: result.followers,
      ...result,

    });

  });
};


console.log(state);

  return (
    <div className="container">
      <div className="">
      <div className="Query">
      <UserInput value={searchText} placeholder="github username here" onChange={(e) => setSearchText(e.target.value)} ></UserInput>
      <button onClick={handleAPI}className='btn btn-primary text-center'>Search</button>
      </div>

      
   {state.message ? <h3>{state.message}</h3> : 
      <div className='app'>
      <a href={state.html_url}>
        <div className='image_container'>
        <img className='image' src={state.imageUrl} alt="Github Profile User"/>
        </div></a>
        <div>
        <User user={state.user}/>
        <Username username={state.username}/>
        <Description description={state.description} />
        <div className='card_container'>
          <Card title="Following" count={state.following}/>
          <Card title="Followers" count={state.followers}/>
        </div>
        </div>
      </div>
    }
      </div>
      {/*<div className='col-md-6 col-sm-12'>
      <Form formValues={state} setformValues={setState} />
      </div> */}
    </div>
    
  );
}

export default App;
