import React from 'react'
import UserInput from './UserInput';
function Form( {formValues ,setformValues}) {

const handleState =(key , value)=>{
        setformValues({ ...formValues ,[key]:value});
}
  return (
    <>
    <form>
    <UserInput label="Image Url" onChange={(e)=>handleState("imageUrl" , e.target.value)}/>
    <UserInput label="User" onChange={(e)=>handleState("user", e.target.value)}/>
    <UserInput label="Username" onChange={(e)=>handleState("username",e.target.value)}/>
    <UserInput label="Description" onChange={(e)=>handleState("description",e.target.value)}/>
</form>
</>
  )
}

export default Form; 
