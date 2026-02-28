import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../Products'

function Product() {
    const {Id}=useParams()
    let selectedProduct=products.find((v)=>v.id==Id)
  return (
    <>
        <div className="container">
      <div className="row d-flex align-items-center" style={{height:"500px"}}> 
          <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center" style={{height:"400px"}}><img src={selectedProduct.img} alt="" className='rounded-4' width="300px" height="300px"/></div>
          <div className="col-lg-6 col-12 d-flex align-items-center flex-column  " style={{height:"400px"}}>
            <h1 className='text-center my-5 p-0'>{selectedProduct.varitey}</h1>
            <hr className='my-0'/>
            <div className='my-5'>
              <h4 className='text-success'><span className='proName-proComponent fs-5 text-secondary'>Product Name: </span> {selectedProduct.Name}</h4>
              <h4 className='text-success'><span className='proName-proComponent fs-5 text-secondary'>Product Price: </span> ${selectedProduct.price}</h4>
              <h4 className='text-success'><span className='proName-proComponent fs-5 text-secondary'>Product Description: </span> {selectedProduct.Desc}</h4>
            </div>
          </div>
          </div>
      </div>
      
      
    </>
  )
}

export default Product
