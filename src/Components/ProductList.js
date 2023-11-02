import Box from "./Card";
import './ProductList.css'
import {Link} from 'react-router-dom'
import { useState } from "react";
import { Button , Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductList = (props) => {

    const [selectedProductList , setSelectedProductList] = useState([])

    const selectedListArray = (checkedBoxID) =>{
        setSelectedProductList(prevList =>{
            if(prevList.includes(checkedBoxID)){
                return [...prevList.filter(id => id !== checkedBoxID)]
            }else {
                return [...prevList, checkedBoxID]
            }
            
        })
    }

    const deleteHandler = () =>{
        props.takeArr(selectedProductList)
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
                        sendId={selectedListArray}
                    />)}
            </div>
        </div>
    )
}

export default ProductList;