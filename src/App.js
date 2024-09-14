import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Carousel from './Carousel';
import Footer from './Footer';
import CoursesList from './CoursesList';
import CourseDetail from './CourseDetail'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Carousel />
        <Content />
        <Footer />
      </div>
    </Router>
  );
}

function Content() {
  const location = useLocation();

  return (
    <div className="container my-5">
      {location.pathname === '/' && (
        <>
          <h1>Bienvenido al sitio de cursos</h1>
          <p>Explora nuestros cursos disponibles y encuentra el que mejor se adapte a ti.</p>
        </>
        
      )}
      <Routes>
        <Route path="/courses" element={<CoursesList />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />
      </Routes>
    </div>
  );
}

export default App;

