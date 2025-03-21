import { useState } from 'react';

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};
const Part = ({ part, exercises }) => {
  return (
    <p>
      {part}: {exercises} exercises
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      <Part part={course[0].part} exercises={course[0].exercises} />
      <Part part={course[1].part} exercises={course[1].exercises} />
      <Part part={course[2].part} exercises={course[2].exercises} />
    </div>
  );
};

const Total = ({ course }) => {
  const totalExercises = course.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Total exercises: {totalExercises}</p>;
};

const App = () => {
  const Course = {
    course: 'Half Stack application development',
    parts: [
      { part: 'Fundamentals of React', exercises: 10 },
      { part: 'Using props to pass data', exercises: 7 },
      { part: 'State of a component', exercises: 14 },
    ],
  };

  return (
    <div>
      <Header course={Course.course} />
      <Content course={Course.parts} />
      <Total course={Course.parts} />
    </div>
  );
};

export default App;