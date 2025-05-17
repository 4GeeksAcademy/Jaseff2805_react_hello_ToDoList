//Importaction de React
import React from "react";
//Importation de TodoItem
import TodoItem from "./TodoItem";
//Importation de ListGroup de react-bootstrap
import {ListGroup} from 'react-bootstrap'

// Creación del componente TodoList
const TodoList = ({todos, deleteTodo}) => {
    return (
        <ListGroup>
            {/* Si la lista de tareas está vacía, muestra un mensaje */}
            {todos.length === 0 ? (
                <ListGroup.Item className = "text-muted text-center">No tasks, add a task</ListGroup.Item>) : (
                // Mapea cada tarea y crea un componente TodoItem
                    todos.map((task,index) => (
                    <TodoItem
                        key={index}
                        task={task}
                        deleteTodo={() => deleteTodo(index)}
                    />
                ))
            )}
        </ListGroup>
    );
};
// Exportación del componente TodoList
// Este componente recibe dos props: todos y deleteTodo. Todos es un array de tareas y deleteTodo es una función que se llama para eliminar una tarea específica.
export default TodoList;
