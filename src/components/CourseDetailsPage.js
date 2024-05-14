// src/components/CourseDetailsPage.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CourseDetailsPage = () => {
  const { id } = useParams(); // Get courseId from URL params
  const course = useSelector((state) =>
    state.courses.courses.find((course) => course.id === Number(id))
  );

  if (!course) {
    return <p>Course not found.</p>;
  }

  return (
    <div>
      <h2>Course Details</h2>
      <p>Course Name: {course.name}</p>
      <p>Instructor: {course.instructor}</p>
      <p>Description: {course.description}</p>
      <p>Enrollment Status: {course.enrollmentStatus}</p>
      <p>Course Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>
      <p>Pre-requisites: {course.prerequisites}</p>
      <details>
        <summary>Syllabus</summary>
        <p>{course.syllabus}</p>
      </details>
    </div>
  );
};

export default CourseDetailsPage;
