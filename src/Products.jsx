import React from "react";
import {Link} from "react-router-dom";

const Products = () => {
    return (
        <>
            <div className="page__content">
                <h1>Products</h1>
                <p>We are gonna add some products. A bit later...</p>
                <Link to="/contacts">To Contacts</Link>
            </div>
        </>
    )
}

export default Products