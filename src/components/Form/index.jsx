import React from 'react'
import Input from '../Input/Input'
import Button from '../ButtonV2/Button'

const Form = () => {
  return (
    <div className='formContainer'>
     <p className='formHeader'>Sign Up</p>
     <div className='formContent'>
        <Input type="text" placeholder="Enter your name" label="Name" required={true} />
        <Input type="email" placeholder="Enter your email" label="Email" required={true} />
        <Input type="password" placeholder="Enter your password" label="Password" required={true} />
        <Button text={"Save"} bgColor={"red"} colorParams={"#fff"} action={() => alert("Here is my data")}/>
     </div>
    </div>
  )
}

export default Form