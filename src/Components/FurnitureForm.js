import { useState } from 'react'
import './FurnitureForm.css'
import { Form, InputGroup , Card} from 'react-bootstrap';

const FurnitureForm = (props) => {

    const [furnitureDimensions, setFurnitureDimensions] = useState({})

    props.handler('furniture', furnitureDimensions)

    const inputChangeHandler = (type, value) => {
        setFurnitureDimensions((prevDimensions) => {
            return {
                ...prevDimensions,
                [type]: value
            }
        })
    }
    return (
        <Card className='forniture-box'>
            <Card.Body>
            <InputGroup className="mb-3" >
                <InputGroup.Text style={{width: '113px'}} >Height (CM) </InputGroup.Text>
                <Form.Control id='height' type='number' min={0} onChange={(event) => inputChangeHandler(event.target.id, event.target.value)}></Form.Control>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text style={{width: '113px'}} >Width (CM) </InputGroup.Text>
                <Form.Control id='width' type='number' min={0} onChange={(event) => inputChangeHandler(event.target.id, event.target.value)}></Form.Control>
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text style={{width: '113px'}} >Length (CM) </InputGroup.Text>
                <Form.Control id='length' type='number' min={0} onChange={(event) => inputChangeHandler(event.target.id, event.target.value)}></Form.Control>
            </InputGroup>
            <p>Please, provide size</p>
            </Card.Body>
        </Card>
    )
}

export default FurnitureForm;