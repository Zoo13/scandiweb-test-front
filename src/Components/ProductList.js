import Box from "./Card";
import './ProductList.css'
import {Link} from 'react-router-dom'
import { Button , Badge, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductList = (props) => {

    const deleteHandler = () =>{

        let checkboxes = document.getElementsByClassName('delete-checkbox')
        let prodactIdArray = [];
        for (const checkbox of checkboxes) {
            if (checkbox.checked) {
                prodactIdArray.push(checkbox.value)
            }
        }
        props.takeArr(prodactIdArray)        
    }
 
    return (
        <div className='product-list'>
            <header>
                <h1> <Badge bg="dark"> Product List </Badge>  </h1>
                <div className="button-box">
                    <Link to='/addproduct'><Button>ADD</Button></Link>
                    <Button id='delete-product-btn' variant="danger" onClick={deleteHandler}>MASS DELETE</Button>
                </div>
            </header>
            <div className="product-list-body">
                {props.products.map(each =>
                    <Box
                        key={each.id}
                        id={each.id}
                        sku={each.sku}
                        name={each.name}
                        price={each.price}
                        type={each.type}
                        size={each.size}
                        specific={each.specific}
                    />)}
            </div>
        </div>
    )
}

export default ProductList;