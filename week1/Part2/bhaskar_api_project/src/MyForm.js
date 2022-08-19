import React, { useState } from 'react';
import Card from './Card'

function MyForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loadValues, setLoadValues] = useState([]);
  const addValues = () => {
    setLoadValues([...loadValues, { id:Date.now(),'firstName': firstName, 'lastName': lastName }]);
    setFirstName('');
    setLastName('');
  }

  const handleButtonClicked = (e) => {
    e.preventDefault();
    addValues();
    console.log("Form is submitted");
  }
  return (
    <div className='card' style={{padding:'2rem',margin:'10% 40%' }}>
    <form onSubmit={handleButtonClicked}>
      <div>
        <label>
          First Name:
        </label>
        <input type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
        <br />
        <label>
          Last Name:
        </label>
        <input type="text" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
        <br />
        <hr />
        <button type='submit'>
          Submit
        </button>
      </div>
    </form>
    {
      
      loadValues.map(loadValue => {
        return <Card key={loadValue.id} loadValue={loadValue} />
     })
    }
  
    </div>
  )

}
export default MyForm;