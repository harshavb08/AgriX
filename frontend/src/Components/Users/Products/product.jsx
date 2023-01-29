import React, { useEffect, useState } from 'react';
import './products.css'
import {useNavigate} from 'react-router-dom'
import LoadingBox from '../LoadingBox/loadingBox';
import axios from '../../../../node_modules/axios/index';


function Product() {

    const navigate = useNavigate()

    const [products, setProducts] = useState(false);


    // source
    const dispatch_products = async()=>{
        let path = window.location.pathname
        path = path.split('/')[2]
        console.log(path)
        const data = await axios.post(`/api/products/${path}`)
        // console.log(data)
        setProducts(data.data)
        
    }
    useEffect(() => {

        dispatch_products()
    }, [window.location.pathname.split('/')[2]])
    // 

    // //get department id from url
    // const url = window.location.href;
    // const urlArray = url.split('/');
    // const departmentId = urlArray[urlArray.length - 1];

    // const [deptName, setDeptName] = useState('');

    // const fetchDeptName = async () => {
    //     const { data } = await axios.post(`/api/departments/${departmentId}`);
    //     setDeptName(data.name);
    // }

    // useEffect(() => {
    //     fetchDeptName();
    // }, []);


    // //show products from given department id
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const { data } = await axios.get("/api/products");  
    //         setProducts(data);
    //     };
    //     fetchData();
    // }, []);
    //console.log(products);
    return (
        <div className='productsSectionContainer'>
            {!products ? (
                <LoadingBox></LoadingBox>
               
            ) : (
                <div className="productsContainer">
                    {products.map(product => (
                        <div key={product._id} className="productBox" onClick={(e)=>{
                            navigate(`/products/${product._id}`)
                        }}>
                            <div className="productsImageDiv">
                                <a className='productsImageLink'><img className='productsImage' src={product.image} alt="" /></a>
                            </div>
                            <div className='productsTitleDiv'>
                                <a className='productsTitleLink'><p className='productsTitle'>{product.name}</p></a>
                            </div>
                            <div className="productsRatingDiv">
                                <span> <i className={product.rating >= 1 ? "fa fa-star" : product.rating >= 0.5 ? "fa fa-star-half" : "fa fa-star-o"}></i> </span>
                                <span> <i className={product.rating >= 2 ? "fa fa-star" : product.rating >= 1.5 ? "fa fa-star-half" : "fa fa-star-o"}></i> </span>
                                <span> <i className={product.rating >= 3 ? "fa fa-star" : product.rating >= 2.5 ? "fa fa-star-half" : "fa fa-star-o"}></i> </span>
                                <span> <i className={product.rating >= 4 ? "fa fa-star" : product.rating >= 3.5 ? "fa fa-star-half" : "fa fa-star-o"}></i> </span>
                                <span> <i className={product.rating >= 5 ? "fa fa-star" : product.rating >= 4.5 ? "fa fa-star-half" : "fa fa-star-o"}></i> </span>
                            </div>
                            <div className='productsReviewDiv'><span className='productsReviewText'>{product.review}</span></div>
                            <br />
                            <div className='productsPriceDiv'>
                                <p className='productsPrice'><span className='productsPriceDollar'>Rs.</span><span className='productsPriceText'>{product.price}</span></p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
export default Product;
