import React from 'react'
import NavBar from './NavBar'

const InsertCourse = () => {
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
            placeholder="Enter Course Name"
          />
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Duration</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. 7 Days"
          />
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Fee (₹)</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Course Fee"
          />
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label"> Payment Mode</label>
          <select className="form-select">
            <option>Select Mode</option>
            <option>Online</option>
            <option>Offline</option>
            <option>Hybrid</option>
          </select>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <label className="form-label">Trainer</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Trainer Name"
          />
        </div>

        <div className="col-12">
          <button className="btn btn-success">
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