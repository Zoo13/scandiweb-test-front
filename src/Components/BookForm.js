import { useState } from 'react'
import './BookForm.css'
import { Card, Form, InputGroup  } from 'react-bootstrap';

const BookForm = (props) => {

    const [bookSize, setBookSize] = useState()
    props.handler('book', bookSize)

    const inputChangeHandler = (event) => {
        setBookSize(event.target.value)
    }

    return (
        <Card className='book-box'>
            <Card.Body>
            <InputGroup className="mb-3">
                <InputGroup.Text> Weight (KG) </InputGroup.Text>
                <Form.Control id='weight' type='number' min={0} onChange={inputChangeHandler}></Form.Control>
            </InputGroup>
            <p>Please, provide weight</p>
            </Card.Body>
        </Card>
    )
}

export default BookForm;