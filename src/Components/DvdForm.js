import { useState } from 'react';
import './DvdForm.css'
import { Card, Form, InputGroup } from 'react-bootstrap';

const DvdForm = (props) => {

    const [dvdSize, setDvdSize] = useState()

    const inputChangeHandler = (event) => {
        setDvdSize(event.target.value)
    }

    props.handler('dvd', dvdSize)

    return (
        <Card className='dvd-box'>
            <Card.Body>
            <InputGroup className="mb-3">
                <InputGroup.Text>Size (MB) </InputGroup.Text>
                <Form.Control id='size' type='number' min={0} onChange={inputChangeHandler}></Form.Control>
            </InputGroup>
            <p>Please, provide dimensions</p>
            </Card.Body>
        </Card>
    )
}

export default DvdForm;