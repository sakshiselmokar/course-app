// src/store/actions/courseActions.js
import { markCourseCompletedApi,yourApiCallToFetchEnrolledCourses } from '../../api/courseApi'; // Import your API function for marking a course as completed
export const fetchCourses = () => {
  return async (dispatch) => {
    try {
      // Simulated API call to fetch courses
      const dummyCourses = [
        { id: 1, name: 'Introduction to React', instructor: 'John Doe', enrollmentStatus: 'Open' },
        { id: 2, name: 'Node.js Fundamentals', instructor: 'Jane Smith', enrollmentStatus: 'Closed' },
        { id: 3, name: 'JavaScript Basics', instructor: 'Alice Johnson', enrollmentStatus: 'Open' },
        { id: 4, name: 'Python Programming', instructor: 'Bob Wilson', enrollmentStatus: 'Open'},
      
      ];

      dispatch({ type: 'FETCH_COURSES', payload: dummyCourses });
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };
};

export const fetchEnrolledCourses = () => {
  return async (dispatch) => {
    try {
      // Simulated API call to fetch enrolled courses
       // Add more courses with enrolled status
       const enrolledCourses = await yourApiCallToFetchEnrolledCourses();
       

      dispatch({ type: 'FETCH_ENROLLED_COURSES', payload: enrolledCourses });
    } catch (error) {
      console.error('Error fetching enrolled courses:', error);
    }
  };
};


// Add other action creators related to courses if needed

export const markCourseCompleted = (courseId) => {
  return async (dispatch) => {
    try {
      // Call the API function to mark the course as completed
      const updatedCourse = await markCourseCompletedApi(courseId);

      // Dispatch an action to update the course state in Redux store
      dispatch({ type: 'MARK_COURSE_COMPLETED', payload: updatedCourse });
    } catch (error) {
      console.error('Error marking course as completed:', error);
      // Handle error or dispatch error action
    }
  };
};