import React from 'react'
import Input from '../Input/Input'
import Button from '../ButtonV2/Button'
import useFormValidation from './formValidation'

const Form = () => {
  const { handleSubmit, register, errors, clearErrors, } = useFormValidation();

  const formSubmit =(data) => {
    console.log(data)
  }
  
  return (
    <div className='formContainer'>
     <p className='formHeader'>Sign Up</p>
     <div className='formContent'>
      <form onSubmit={handleSubmit(formSubmit)}>
        <Input {...register("name")} name={"name"} type="text" placeholder="Enter your name" label="Name"  onChange={() => clearErrors("name")}/>
        {errors.name && <div style={{color: "red"}}>{errors.name.message}</div>}
        <Input {...register("email")} name={"email"} type="email" placeholder="Enter your email" label="Email" onChange={() => clearErrors("email")} />
        {errors.email && <div style={{ color: "red"}}>{errors.email.message}</div> }
        <Input {...register("password")} name={"password"} type="password" placeholder="Enter your password" label="Password"  onChange={() => clearErrors("password")}/>
        {errors.password && <div style={{color: "red"}}>{errors.password.message}</div>}
        <Button type={"submit"} text={"Save"} bgColor={"red"} colorParams={"#fff"} action={() => {}} />
        </form>
     </div>
    </div>
  )
}

export default Form