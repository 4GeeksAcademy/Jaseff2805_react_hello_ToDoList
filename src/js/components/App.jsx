// Importación de React y otros componentes necesarios
import React, { useState } from 'react';
import TodoList from './TodoList';
import InputTodo from './InputTodo';
import { Container } from 'react-bootstrap'; 
import { requestFormReset } from 'react-dom';

// Creación del componente App en el cual se gestionan las tareas y se llaman los demás componentes
const App = () => {
    const [todos, setTodos] = useState([]);
    // Funciones para manejar la adición y eliminación de tareas. ...todos es el estado que contiene la lista de tareas
    const addTodo = (task) => {
        if (task) {
            setTodos([...todos, task]);
        }
    };
    // Función para eliminar una tarea
    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };
    // Función para marcar una tarea como completada
    return (
        <Container className='app bg-light p-4 rounded shadow mt-5'>
            <h1 className='text-center mb-4'>
                <i className="bi bi-list-task me-2"></i>
                ToDo List
            </h1>
            <h2 className='text-center mb-4'>Omar Bautista</h2>
            <InputTodo  addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} />
        </Container>
    );
};

// Exportación del componente App
export default App;









