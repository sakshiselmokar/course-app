// src/components/CourseListingPage.js
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCourses } from '../store/actions/courseActions';
import CourseCard from './CourseCard';

const CourseListingPage = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const filteredCourses = courses.filter((course) => {
    const courseName = course.name.toLowerCase();
    const instructorName = course.instructor.toLowerCase();
    const query = searchQuery.toLowerCase();
    return courseName.includes(query) || instructorName.includes(query);
  });

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h1>Course Listing</h1>
      <input
        type="text"
        placeholder="Search by course name or instructor"
        value={searchQuery}
        onChange={handleSearch}
      />
      {filteredCourses.length > 0 ? (
        filteredCourses.map((course) => (
          <Link key={course.id} to={`/course/${course.id}`}>
            <CourseCard course={course} />
          </Link>
        ))
      ) : (
        <p>No courses found matching the search criteria.</p>
      )}
    </div>
  );
};

export default CourseListingPage;
