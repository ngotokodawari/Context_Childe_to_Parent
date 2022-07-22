import ComponentB from './ComponentB'
import * as React from 'react';
const ComponentA = () => {
    return (
        <div>
            <p>Componet A</p>
            <ComponentB />
        </div>
    )
}

export default ComponentA