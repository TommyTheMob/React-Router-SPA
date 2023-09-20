import {Link} from "react-router-dom";
import React from "react";

const Product = ( {match} ) => {
    return (
        <div className="page__content">
            <p>{`Product is a ${match.params.productId}`}</p>
        </div>
    )
}

export default Product