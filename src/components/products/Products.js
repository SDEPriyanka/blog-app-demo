import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import ProService from "../service/ProService";
import { Link } from "react-router-dom";
import Notification from "../shared/Notification";
const Products = () => {
  const message = "No posts available";
  const [products, setProducts] = useState([]);
  const getProdcuts = () => {
    ProService.getProducts()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getProdcuts();
  }, []);

  const handleClick = () => {
    alert("Hai");
  };

  return (
    <Fragment>
      {products?.length > 0 ? (
        <div className="mt-5">
          {products.map((post, index) => {
            if(index < 15){
            return (
                
              <div className="col-md-12" key={post.id}>
                <div className="container blog-post">
                  <div className="prodcuts">
                    <Link to={`/post/${post.id}`} className="prodcuts">
                      {post.title}
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
          })}
        </div>
      ) : (
        <div className="container">
          {products?.length === 0 && (
            <Notification
              message={message}
              type="alert alert-danger alert-dismissible fade show w-50 mx-auto mt-5"
            />
          )}
        </div>
      )}
    </Fragment>
  );
};
export default Products;
