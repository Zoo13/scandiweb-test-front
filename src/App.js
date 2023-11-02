
import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Addproduct from './Components/AddProduct';
import ProductList from './Components/ProductList';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'




function App() {
  const [products, setProducts] = useState([])
  const [responseMessage, setResponseMessage] = useState([]);

  function handleApiResponse(responseMessage) {
    setResponseMessage(responseMessage)
  }
  async function sendPOST(product , navigate) {
    const response = await fetch('http://localhost/scandiTest/php/saveproduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product)
    })
    const data = await response.json()
    const arrayOfValues = Object.values(data);
    if(data.length === 0){
      navigate('/')
      arrayOfValues.splice(0, arrayOfValues.length);
    }
    handleApiResponse(arrayOfValues)
    getData()
  }

  const takeArr = (idArr) => {
    deleter(idArr)
  }

  async function deleter(idArr) {
      await fetch("http://localhost/scandiTest/php/delete", {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(idArr)
    })
    getData()
  }

  const router = createBrowserRouter([
    { path: '/', element: <ProductList products={products} takeArr={takeArr} /> },
    { path: '/addproduct', element: <Addproduct sendPost={sendPOST} error={responseMessage} onCancel={onCancelButton} /> },
  ])

  const getData = useCallback(async () => {
    try {
      const response = await fetch('http://localhost/scandiTest/php/getProducts')
      const data = await response.json()
      if (!response.ok) {
        throw new Error('Something went wrong')
      }
      setProducts(data)
    } catch (error) {
      console.log('Something went wrong')
    }
  }, []);


  useEffect(() => {
    getData();
  }, [])


  function onCancelButton (){
    handleApiResponse([])
  }

  return (
    <div className="App">
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
