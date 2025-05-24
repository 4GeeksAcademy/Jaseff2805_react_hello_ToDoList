// Importación de React
import React, {useState} from "react";
// Importación de Bootstrap
import {Form, Button, Row, Col} from "react-bootstrap";

// Creción del componente InputTodo
const InputTodo = ({addTodo}) => {
    const [task, setTask] = useState("");
    // Función para manejar el evento de envío del formulario. Se utiliza el operador logico OR (||) para comprobar si se ha presionado la tecla Enter o si se ha hecho clic en el botón.
    // Si se cumple alguna de las dos condiciones, se llama a la función addTodo con la tarea actual y se limpia el campo de entrada.
    const handleSubmit = (e) => {

        if (e.key === "Enter" || e.type === "click") {
            e.preventDefault(); // Evita el comportamiento predeterminado del formulario
            if (task.trim() !== "") {
                addTodo(task);
                setTask("");
            }
        }
    }; 

    // Renderizado del componente 
    return (
        <Form className="mb-3">
            <Row>
                <Col xs={9}>
                    <Form.Control
                        type="text"
                        placeholder="what is the task that needs to be done?"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        onKeyDown={handleSubmit}
                    />
                </Col>
                <Col xs={3}>
                    <Button
                        variant="primary"
                        className="w-100"
                        onClick={handleSubmit}
                    >
                        Add
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

// Exportación del componente InputTodo
export default InputTodo;
