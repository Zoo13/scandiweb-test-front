import './Card.css'
import { Card } from 'react-bootstrap';

const Box = (props) => {

    const select = (event) => {
        props.sendId(event.target.value)
    }
    let x;
    let y; 
    if(props.type === 'dvd'){
        x = 'MB'
        y = 'Size'
    }
    if(props.type === 'book'){
        x = 'KG'
        y = 'Weight'
    }
    if(props.type === 'furniture'){
        y = 'Dimensions'
    }

    return (
        <Card className='card-box'>
            <input
                type="checkbox"
                value={props.id}
                className="delete-checkbox form-check-input"
                onClick={select}>   
            </input>
            <div className='box-body'>
                {/* <h5>ID : {props.id}</h5> */}
                <h5>{props.sku}</h5>
                <h5>{props.name}</h5>
                <h5>{props.price} $</h5>
                <h5>{y}: {props.size} {x}</h5>
                {/* <h5>Type : {props.type}</h5> */}
            </div>
        </Card>
    )
}

export default Box;