import React from "react";
import {Link} from "react-router-dom";

const PageNotFound = () => {
    return (
        <>
            <div className="page__content">
                <h1>Page not found!</h1>
                <p>😥</p>
                <Link to="/">To Home</Link>
            </div>
        </>
    )
}

export default PageNotFound