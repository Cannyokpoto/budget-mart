import React, { useContext } from "react";
import { ShopContext } from "../Components/Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import "./CSS/Product.css";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";


function Product() {

    const {AllProducts} = useContext(ShopContext);
    const {productId} = useParams();
    const product = AllProducts.find((e)=> e.id===Number(productId));

    return (
        
        <div className="my-product">
            <Breadcrum product ={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts />
        </div>
    )
}

export default Product;