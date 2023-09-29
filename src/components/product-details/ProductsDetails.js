import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProService from '../service/ProService';

const ProductsDetails = () => {
    const [post, setPost] = useState([])
    const { postId } = useParams();

    const getSingleProduct =() => {
        ProService.getProduct(postId).then((res)=>{
            setPost(res)
        }).catch((err) =>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getSingleProduct()
    },[])
    
    return (
        <div className=''>
             <div className='container col-md-6 mt-5 details'>
                <h1>{post.title} </h1>
                <p class="">{post.description}</p>
                 
             </div>
        </div>)
};

 

export default ProductsDetails