// src/App.js
import React,{useEffect} from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import store from './store/store';
import CourseListingPage from './components/CourseListingPage';
import CourseDetailsPage from './components/CourseDetailsPage';
import StudentDashboard from './components/StudentDashboard';
import { fetchCourses,fetchEnrolledCourses } from './store/actions/courseActions';
function App() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses); // Select courses from the Redux store
  useEffect(() => {
    dispatch(fetchCourses());
    dispatch(fetchEnrolledCourses());
  }, [dispatch]);

  const enrolledCourses = useSelector((state) => state.courses.enrolledCourses); // Select enrolledCourses from the Redux store
  console.log('Courses:', courses);
  console.log('Enrolled Courses:', enrolledCourses);
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Course Management App</h1>
          </header>
          <main>
            <Routes>
          
  <Route exact path="/" element={<CourseListingPage />} />
  <Route path="/course/:id" element={<CourseDetailsPage />} />
  <Route path="/dashboard" element={<StudentDashboard />} />



            </Routes>
          
          </main>
        </div>
      </Router>
      </Provider>
    
  );
}

export default App;
