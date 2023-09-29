import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import ProService from "../service/ProService";
import { Link } from "react-router-dom";
import Notification from "../shared/Notification";
import { useDispatch } from "react-redux";
import { addCart } from "../../Store/CartSlice";

const Products = () => {
  const message = "No posts available";
  const dispatch = useDispatch();
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

  const addToCart=(product) =>{
    dispatch(addCart(product))
  }
  return (
    <Fragment>
      {products?.length > 0 ? (
        <div className="mt-5 row">
          {products.map((post, index) => {
            if (index < 15) {
              return (
                <div className="col-md-3" key={post.id}>
                  <div className="container blog-post">
                    <div className="prodcuts">
                      <div class="card">
                        <div className="pro-img">
                        <Link to={`/post/${post.id}`} className="prodcuts">
                          <img
                            src={post.image}
                            class="card-img-top"
                            alt="..."
                          />
                        </Link>
                        </div>

                        <div class="card-body">
                          <h5 class="card-title">{post.title.substring(1, 50)}...</h5>
                          <p class="card-text">Rs {post.price}</p>
                          <button class="btn btn-primary add-to-cart" onClick={() => addToCart(post)}>
                            Add to cart
                          </button>
                        </div>
                      </div>
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
