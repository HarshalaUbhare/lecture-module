import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CourseList = ({ courses }) => (
  <div className="col-4">
    <h3>List of Courses</h3>
    <ul className="list-group">
      {courses.map(course => (
        <li key={course._id} className="list-group-item">
          {course.name}
        </li>
      ))}
    </ul>
  </div>
);

const Admin = () => {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseLevel, setCourseLevel] = useState('');
  const [courseImage, setCourseImage] = useState('');

  useEffect(() => {
    // Fetch courses when the component mounts
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const createCourse = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/courses', {
        name: courseName,
        description: courseDescription,
        level: courseLevel,
        image: courseImage
      });
      setCourses([...courses, response.data]); // Add the new course to the list
      setCourseName(''); // Clear input fields after creating course
      setCourseDescription('');
      setCourseLevel('');
      setCourseImage('');
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  return (
    <div className="my-4">
      <h1 className="mx-5">Admin Panel</h1>
      <div className="container">
        <div className="row">
          <div className="col-8 my-4">
            <h3>Create Course</h3>
            <div className="container">  
              <form onSubmit={createCourse}>
                <div className="row mb-3">
                  <label htmlFor="courseName" className="col-sm-2 col-form-label">Name</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="courseName" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="courseDescription" className="col-sm-2 col-form-label">Description</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="courseDescription" value={courseDescription} onChange={(e) => setCourseDescription(e.target.value)} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="courseLevel" className="col-sm-2 col-form-label">Level</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="courseLevel" value={courseLevel} onChange={(e) => setCourseLevel(e.target.value)} />
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="courseImage" className="col-sm-2 col-form-label">Image</label>
                  <div className="col-sm-10">
                    <input type="file" className="form-control" id="courseImage" onChange={(e) => setCourseImage(e.target.files[0])} />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
          <CourseList courses={courses} />
        </div>
      </div>
    </div>
  );
};

export default Admin;
