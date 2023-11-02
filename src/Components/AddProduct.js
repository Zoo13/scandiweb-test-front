import { useEffect, useState } from 'react';
import './AddProduct.css'
import DvdForm from './DvdForm';
import BookForm from './BookForm';
import FurnitureForm from './FurnitureForm';
import { Link, useNavigate } from 'react-router-dom'
import { Button, Form, InputGroup, Badge, Card } from 'react-bootstrap';


const Addproduct = (props) => {

    const navigate = useNavigate();
    const [productType, setProductType] = useState('DVD')
    const selectType = (event) => {
        setProductType(event.target.value)
    }

    let dim;

    const getDimensions = (type, dimensions) => {
        if (type === 'dvd') { dim = dimensions }
        if (type === 'book') { dim = dimensions }
        if (type === 'furniture') {
            dim = {
                height: dimensions['height'],
                width: dimensions['width'],
                length: dimensions['length']
            }
        }
        productInfo['type'] = type
    }

    const [productInfo, setProductInfo] = useState({})
    const changeInputHandler = (input, value) => {
        setProductInfo((prevInfo) => {
            if (input === 'price') { value = +value }
            return {
                ...prevInfo,
                [input]: value
            }
        })
    }

    const saveProduct = (event) => {
        event.preventDefault()
        productInfo['size'] = dim
        props.sendPost(productInfo, navigate)

    }

    return (
        <div className='addProduct'>
            <header>
                <h1>
                    <Badge bg="dark"> Product Add </Badge>
                </h1>
                <div className="add-button-box">
                    <Button id='save-btn' variant="success" type='submit' form='product_form'> Save </Button>
                    <Link to='/'><Button onClick={props.onCancel} variant='secondary' id='cancel-btn'> Cancel </Button> </Link>
                </div>
            </header>
            <Form id='product_form' className='product_form' name='product_form' onSubmit={saveProduct}>
                <InputGroup className="mb-3" style={{ width: '300px' }}>
                    <InputGroup.Text htmlFor='sku' style={{ width: '65px' }}> Sku </InputGroup.Text>
                    <Form.Control id='sku' onChange={(event) => changeInputHandler(event.target.id, event.target.value)}></Form.Control>
                </InputGroup>
                <InputGroup className="mb-3" style={{ width: '300px' }}>
                    <InputGroup.Text htmlFor='name' style={{ width: '65px' }} > Name </InputGroup.Text>
                    <Form.Control id='name' onChange={(event) => changeInputHandler(event.target.id, event.target.value)}></Form.Control>
                </InputGroup>
                <InputGroup className="mb-3" style={{ width: '300px' }}>
                    <InputGroup.Text htmlFor='price' style={{ width: '65px' }} > Price </InputGroup.Text>
                    <Form.Control id='price' type='number' min={0} step='0.01' onChange={(event) => changeInputHandler(event.target.id, event.target.value)}></Form.Control>
                </InputGroup>
                <div className='inputs select-box'>
                    <label htmlFor='productType'> Type Switcher </label>
                    <Form.Select size="lg" id='productType' onChange={selectType}>
                        <option value="DVD" id="DVD" defaultValue > DVD </option>
                        <option value="Book" id="Book"> Book </option>
                        <option value="Furniture" id="Furniture"> Furniture </option>
                    </Form.Select>
                </div>
                {productType === 'DVD' && <DvdForm handler={getDimensions} />}
                {productType === 'Book' && <BookForm handler={getDimensions} />}
                {productType === 'Furniture' && <FurnitureForm handler={getDimensions} />}
                {props.error.length > 0 &&
                 <Card className='error-box'>
                    {props.error.map(each =>
                        <h5 key={each}>{each}</h5>)}
                </Card>}
            </Form>
        </div>
    )
}

export default Addproduct;