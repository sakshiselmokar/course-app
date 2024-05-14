// src/store/reducers/courseReducer.js

const initialState = {
  courses: [],
  enrolledCourses: [],
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_COURSES':
      return { ...state, courses: action.payload };
    case 'FETCH_ENROLLED_COURSES':
      return { ...state, enrolledCourses: action.payload };
    case 'MARK_COURSE_COMPLETED':
      // Update the specific course in the state with the updated course data
      const updatedCourses = state.courses.map((course) =>
        course.id === action.payload.id ? { ...course, completed: true } : course
      );
      return { ...state, courses: updatedCourses };
    default:
      return state;
  }
};

export default courseReducer;

