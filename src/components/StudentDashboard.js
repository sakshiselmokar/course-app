import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEnrolledCourses, markCourseCompleted } from '../store/actions/courseActions';

const StudentDashboard = () => {
  const enrolledCourses = useSelector((state) => state.courses.enrolledCourses);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch enrolled courses when the component mounts
    dispatch(fetchEnrolledCourses());
  }, [dispatch]);

  const handleMarkCompleted = (courseId) => {
    dispatch(markCourseCompleted(courseId));
  };

  return (
    <div>
      <h2>Student Dashboard</h2>
      {enrolledCourses.map((course) => (
        <div key={course.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <p>Course Name: {course.name}</p>
          <p>Instructor: {course.instructor}</p>
          {course.thumbnailUrl && (
            <img src={course.thumbnailUrl} alt={course.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
          )}
          <p>Due Date: {course.dueDate || 'Not specified'}</p>
          <p>Progress: {course.progress ? `${course.progress}%` : 'Not available'}</p>
          <progress value={course.progress || 0} max="100" />
          <button onClick={() => handleMarkCompleted(course.id)}>Mark as Completed</button>
        </div>
      ))}
    </div>
  );
};

export default StudentDashboard;
