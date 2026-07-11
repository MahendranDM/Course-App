import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";

const ViewCourses = () => {

  const [data, changeData] = useState([]);

 

  const fetchData = () => {
    axios
      .get("http://192.168.33.245:5001/api/courses")
      .then((response) => {
        changeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
<NavBar/>

      <div className="container mt-4">

        <h2 className="text-center mb-4">
          View All Courses
        </h2>

        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover text-center align-middle">

            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Course Name</th>
                <th>Duration</th>
                <th>Fee (₹)</th>
                <th>Mode</th>
                <th>Trainer</th>
                <th>Created At</th>
              </tr>
            </thead>

            <tbody>
              {data.map((value, index) => (
                <tr key={index}>
                  <td>{value.id}</td>
                  <td>{value.course_name}</td>
                  <td>{value.duration}</td>
                  <td>₹{value.fee}</td>
                  <td>{value.mode}</td>
                  <td>{value.trainer}</td>
                  <td>{value.created_at}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
};

export default ViewCourses;