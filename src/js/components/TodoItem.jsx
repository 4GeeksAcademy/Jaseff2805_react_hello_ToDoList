// Importación inicial de React y useState
import React, {useState} from "react";
// Importación de Bootstrap - Sólo los elementos que necesitamos, en este caso ListGroup, Button
import {ListGroup, Button} from 'react-bootstrap'
// Creación del TodoItem
const TodoItem = ({task,deleteTodo}) => {
    const [hovered, setHovered] = useState(false);
    return (
        <ListGroup.Item
            className = "d-flex justify-content-between align-items-center"
            // Eventos del mouse
            // Uso del operador lógico && para mostrar "X"
            onMouseEnter = {() => setHovered(true)}
            onMouseLeave = {() => setHovered(false)}
        >
            {task}
            {hovered && (<Button variant="danger" size="sm" onClick={deleteTodo}>❌</Button>)}
        </ListGroup.Item>
    );
};

export default TodoItem;



