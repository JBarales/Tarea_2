import React from 'react';
import { useParams } from 'react-router-dom';
import { Table, ListGroup } from 'react-bootstrap';

function CourseDetail() {
  const { courseId } = useParams();

  // Datos simulados para los cursos
  const courseDetails = {
    1: {
      title: 'Desarrollo Web',
      description: 'Este curso introduce a los estudiantes en el desarrollo de aplicaciones web. Se cubrirán los fundamentos de HTML, CSS y JavaScript, así como los conceptos de diseño responsivo y accesibilidad. Los estudiantes aprenderán a crear sitios web dinámicos utilizando frameworks y librerías populares. Además, se abordarán temas de backend como bases de datos y servidores web.',
      importantPoints: [
        'Fundamentos de HTML, CSS y JavaScript',
        'Diseño Responsivo y Accesibilidad',
        'Frameworks y Librerías Populares',
        'Desarrollo Backend y Bases de Datos',
        'Prácticas de Desarrollo y Gestión de Proyectos Web',
        'Implementación de Pruebas y Aseguramiento de Calidad',
        'Despliegue de Aplicaciones Web',
        'Mantenimiento y Actualización de Aplicaciones Web',
      ],
      schedule: [
        { day: 'Sabado', time: '07:00 - 09:00' },
      ],
    },
    2: {
      title: 'Analisis de Sistemas',
      description: 'Este curso se enfoca en el estudio de los métodos y herramientas utilizados para el análisis y diseño de sistemas de información. Los estudiantes aprenderán a recopilar y documentar requisitos, crear diagramas de flujo y modelos de datos, y utilizar técnicas de análisis estructurado y orientado a objetos. Se enfatiza la importancia de entender las necesidades del usuario y de diseñar sistemas eficientes y efectivos.',
      importantPoints: [
        'Recolección de Requisitos',
        'Documentación de Requisitos',
        'Diagramas de Flujo',
        'Modelos de Datos',
        'Análisis Estructurado',
        'Análisis Orientado a Objetos',
        'Diseño de Sistemas Eficientes',
        'Comunicación con Usuarios y Stakeholders',
      ],
      schedule: [
        { day: 'Sabado', time: '09:00 - 11:00' },
      ],
    },
    3: {
        title: 'Etica Profesional',
        description: 'En este curso, los estudiantes explorarán los principios éticos y su aplicación en la tecnología y la informática. Se discutirán temas como la privacidad, la seguridad de la información, la propiedad intelectual, y las implicaciones sociales de la tecnología. Los estudiantes analizarán casos de estudio y participarán en debates sobre dilemas éticos en el campo de la informática.',
        importantPoints: [
          'Principios Éticos en Tecnología',
          'Privacidad de la Información',
          'Seguridad de la Información',
          'Propiedad Intelectual',
          'Implicaciones Sociales de la Tecnología',
          'Dilemas Éticos en Informática',
          'Responsabilidades Profesionales',
          'Análisis de Casos de Estudio',
        ],
        schedule: [
          { day: 'Sabado', time: '14:00 - 16:00' },
        ],
      },
      4: {
        title: 'Arquitectura de computadoras 2',
        description: 'En este curso, se profundizará en los conceptos de arquitectura de computadoras. Los estudiantes explorarán temas avanzados como la arquitectura RISC y CISC, la jerarquía de memoria, procesadores multinúcleo, y el paralelismo a nivel de instrucciones. Se estudiarán también las técnicas de optimización de rendimiento y el impacto del diseño arquitectónico en la eficiencia del sistema.',
        importantPoints: [
          'Arquitectura RISC y CISC',
          'Jerarquía de Memoria',
          'Procesadores Multinúcleo',
          'Paralelismo a Nivel de Instrucciones',
          'Técnicas de Optimización de Rendimiento',
          'Diseño de Arquitecturas Eficientes',
          'Impacto del Diseño en la Eficiencia del Sistema',
          'Tendencias en Arquitectura de Computadoras',
        ],
        schedule: [
          { day: 'Sabado', time: '09:00 - 11:00' },
        ],
      },
      5: {
        title: 'Redes 1',
        description: 'En este curso, los estudiantes aprenderán los fundamentos de las redes de computadoras. Se cubrirán temas como modelos OSI y TCP/IP, direccionamiento IP, configuración y administración de dispositivos de red, así como los protocolos básicos de comunicación. Los estudiantes realizarán prácticas de laboratorio para configurar y solucionar problemas de redes pequeñas.',
        importantPoints: [
          'Modelos OSI y TCP/IP',
          'Direccionamiento IP',
          'Protocolos de Comunicación',
          'Configuración de Dispositivos de Red',
          'Administración de Redes',
          'Solución de Problemas de Red',
          'Redes Locales y WAN',
          'Seguridad en Redes',
        ],
        schedule: [
            { day: 'Sabado', time: '16:00 - 18:00' },
        ],
      },
  };

  const course = courseDetails[courseId] || {
    title: 'Curso no encontrado',
    description: 'No se encontró la información del curso.',
    importantPoints: [],
    schedule: [],
  };

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      
      <h4>Puntos importantes:</h4>
      <ListGroup>
        {course.importantPoints.map((point, index) => (
          <ListGroup.Item key={index}>{point}</ListGroup.Item>
        ))}
      </ListGroup>
      
      <h4>Horario del curso:</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Día</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          {course.schedule.map((entry, index) => (
            <tr key={index}>
              <td>{entry.day}</td>
              <td>{entry.time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CourseDetail;
