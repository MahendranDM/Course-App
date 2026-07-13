import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const InsertCourse = () => {


 const [input, changeInput] = useState(

  {


     course_name: "",
    duration: "",
    fee:"" ,
    mode: "",
    trainer: ""

  }
 )
 
const inputHandler = (event) => {
changeInput({...input,[event.target.name]:event.target.value})
 
}

const readValue=() => {

console.log(input)



axios.post("https://host-demo-app.onrender.com/api/add-course",input).then(
(response) =>{

console.log(response.data)

alert("Course Added Successfully")

}

).catch((error) => {
  console.log(error)
  alert("Failed to add course")
})

}



  return (
    <div>
        <NavBar/>

<div className="container mt-4">
  <div className="row">
    <div className="col-12">

      <div className="row g-3">

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Course Name</label>
          <input
            type="text"
            className="form-control"
            name="course_name"
            value={input.course_name}
            placeholder="Enter Course Name"

            onChange={inputHandler}
          />
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Duration</label>
          <input
            type="text"
            className="form-control"
            name="duration"
            value={input.duration}
            placeholder="e.g. 7 Days"
            onChange={inputHandler}
          />
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Fee (₹)</label>
          <input
            type="number"
            className="form-control"
            name="fee"
            value={input.fee}
            placeholder="Enter Course Fee"
            onChange={inputHandler}
          />
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label"> Payment Mode</label>
          <select className="form-select" name="mode" value={input.mode} onChange={inputHandler}>
            <option value="">Select Mode</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Trainer</label>
          <input
            type="text"
            className="form-control"
            name="trainer"
            value={input.trainer}
            placeholder="Enter Trainer Name"
            onChange={inputHandler}
          />
        </div>

        <div className="col-12">
          <button className="btn btn-success"  onClick={readValue}>
            Add Course
          </button>
        </div>

      </div>

    </div>
  </div>
</div>


    </div>
  )
}

export default InsertCourse