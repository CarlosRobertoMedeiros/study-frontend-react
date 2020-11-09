import React, { useState, useEffect } from 'react';
import './TestComponent.css';

function TestComponent(props: { name : string}) {
    
    const [age,setAge] = useState(21);

    useEffect(() =>{
        console.log('Componente foi Criado ');

    }, []);

    useEffect(() =>{
        console.log('Age foi atualizado para'+ age);

    }, [age]);

    console.log('Segundo Log');


    return <div className="TestComponent">
        Olá, { props.name } , {age}  
        <button onClick={()=>{
            setAge(age + 1)
             console.log(age);
        }}>
        +
        </button>

    </div>
}

export default TestComponent;
