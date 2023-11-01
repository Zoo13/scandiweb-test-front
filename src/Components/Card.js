import './Card.css'
import { Card , Form } from 'react-bootstrap';

const Box = (props) => {

    const select = (event) => {
        props.sendId(event.target.value)
    }
    let x;
    if(props.type == 'dvd'){x = 'MB'}
    if(props.type == 'book'){x = 'KG'}

    return (
        <Card className='card-box'>
            <Form.Check type="checkbox"
                value={props.id}
                className="delete-chekbox"
                onClick={select}>
            </Form.Check>
            <div className='box-body'>
                {/* <h5>ID : {props.id}</h5> */}
                <h5>{props.sku}</h5>
                <h5>{props.name}</h5>
                <h5>{props.price} $</h5>
                <h5>Size: {props.size} {x}</h5>
                {/* <h5>Type : {props.type}</h5> */}
            </div>
        </Card>
    )
}

export default Box;