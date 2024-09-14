import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CoursesList() {
  const navigate = useNavigate();
  const courses = [
    { id: 1, title: 'Desarrollo Web', description: 'Descripción del curso 1' },
    { id: 2, title: 'Analisis de Sistemas', description: 'Descripción del curso 2' },
    { id: 3, title: 'Etica Profesional', description: 'Descripción del curso 3' },
    { id: 4, title: 'Arquitectura de computadoras 2', description: 'Descripción del curso 4' },
    { id: 5, title: 'Redes 1', description: 'Descripción del curso 5' },
  ];

  const handleViewMore = (id) => {
    navigate(`/course/${id}`);
  };

  return (
    <div className="row">
      {courses.map((course) => (
        <div className="col-md-4" key={course.id}>
          <Card>
            <Card.Body>
              <Card.Title>{course.title}</Card.Title>
              <Card.Text>{course.description}</Card.Text>
              <Button variant="primary" onClick={() => handleViewMore(course.id)}>
                Ver más
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default CoursesList;
