import React from 'react';
import Navbar from '../features/Navbar/Navbar';
import ProductDetails from '../features/ProductList/Components/ProductDetails';

const ProductDetailsPage = () => {
    return (
        <div>
            <Navbar>
                <ProductDetails></ProductDetails>
            </Navbar>
        </div>
    );
};

export default ProductDetailsPage;