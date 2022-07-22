import ComponentC from './ComponentC';
import * as React from 'react';
const ComponentB = () => {
  return (
    <div>
      <p>Componet B</p>
      <ComponentC />
    </div>
  );
};

export default ComponentB;
