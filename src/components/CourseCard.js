// src/components/CourseCard.js
import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <h3>{course.name}</h3>
      <p>Instructor: {course.instructor}</p>
      <p>Enrollment Status: {course.enrollmentStatus}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default CourseCard;
