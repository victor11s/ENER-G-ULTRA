import { Button, Form } from "react-bootstrap"

const FormModal = () => {
    return (
        <Form>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Nombre"
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Descripcion"
                    rows={3}
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="number"
                    placeholder="Precio"
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="number"
                    placeholder="Stock"
                    required
                />
            </Form.Group>
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Ingredientes"
                    rows={3}
                />
            </Form.Group>

            <Button variant="success" type="submit" block>
                Agregar Producto
            </Button>
            
        </Form>
    )
}

export default FormModal;