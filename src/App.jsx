import React from 'react'
import Form from 'react-bootstrap/Form';
import { useForm, } from "react-hook-form"

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
   

  const submit = data=>{
console.log(data);
    

  }
  return (
    <>
    <div style={{backgroundColor:"black",color:"white",minHeight:"100vh",paddingTop:10}} >
    <h1 style={{textAlign:"center"}}>React Hook Form </h1>
    
   <form onSubmit={handleSubmit(submit)}>
   <div className=' mt-4 container d-flex justify-content-evenly flex-wrap'>
      <div>
        <p>Enter Full Name</p>
      <Form.Control size="lg" type="text" placeholder="Full Name"
      {...register("FullName", { required: true })} /> 
      {errors.FullName && <span className='text-danger'>This field is required</span>}
      </div>
      <div>
        <p>Father Name</p>
      <Form.Control size="lg" type="text" placeholder="Father Name"
        {...register("FatherName", { required: true })} /> 
         {errors.FatherName && <span className='text-danger'>This field is required</span>}
      </div>
  
    </div>
    <div className=' mt-4 container d-flex justify-content-evenly flex-wrap'>
      <div>
        <p>Phone Number</p>
      <Form.Control size="lg" type="number" placeholder="Phone Number"
       {...register("PhoneNumber", { required: true })} />
      {errors.PhoneNumber && <span className='text-danger'>This field is required</span>} 
      </div>
      <div>
        <p>Enter Email</p>
      <Form.Control size="lg" type="email" placeholder="Email" 
      {...register("Email", { required: true })} /> 
            {errors.Email && <span className='text-danger'>This field is required</span>} 


      </div>
  
    </div>
    <div className='mt-4 container d-flex justify-content-evenly flex-wrap'>
      <div>
        <p>Address</p>
      <Form.Control size="lg" type="text" placeholder="Address" 
      {...register("Address", { required: true })}/> 
            {errors.Address && <span className='text-danger'>This field is required</span>} 

      </div>
      <div>
        <p>Enter CNIC number</p>
      <Form.Control size="lg" type="number" placeholder="CNIC"
      {...register("CNIC", { required: true })} /> 
      {errors.CNIC && <span className='text-danger'>This field is required</span>} 

      </div>
  
    </div>
    <div className='mt-4 container d-flex justify-content-evenly flex-wrap'>
      <div>
        <p>Date Of Birth</p>
      <Form.Control size="lg" type="text" 
      {...register("Date", { required: true })}/> 
      {errors.Date && <span className='text-danger'>This field is required</span>} 

      </div>
      <div>
        <p>Gender</p>
      <Form.Control size="lg" type="text" placeholder="Male/Female"
      {...register("Gender", { required: true })} /> 
      {errors.Gender && <span className='text-danger'>This field is required</span>} 

      </div>
  
    </div>
    <div className='mt-4 container d-flex justify-content-center flex-wrap'>
   <button className='p-3 bg-primary text-white rounded-4' type="submit">
    Submit 
   </button>
  
    </div>

   </form>


    </div>
    </>
  )
}

export default App