import React from 'react'

function UserInput({label , ...props}) {
  return (
    <div className="form-group">
<label>{label}</label>
<input type="text" className="form-control" placeholder={label} {...props}/>
</div>
  )
}

export default UserInput;