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
                <p>{post.body} quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architectoquia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architectoquia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architectoquia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto</p>
                 
             </div>
        </div>)
};

 

export default ProductsDetails