import { useState } from "react";
import axios from "axios";

function ProductForm() {
    const [product, setProduct] = useState({
        name: "",
        price: "",
        description: ""
    });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:5000/products", product);
        alert("Product Added");
        setProduct({ name: "", price: "", description: "" });
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
            <input 
                name="name" 
                placeholder="Name" 
                value={product.name}
                onChange={handleChange} 
                style={{ margin: "5px", padding: "8px" }}
            />
            <input 
                name="price" 
                placeholder="Price" 
                value={product.price}
                onChange={handleChange} 
                style={{ margin: "5px", padding: "8px" }}
            />
            <input 
                name="description" 
                placeholder="Description" 
                value={product.description}
                onChange={handleChange} 
                style={{ margin: "5px", padding: "8px" }}
            />
            <button style={{ margin: "5px", padding: "8px 16px", cursor: "pointer" }}>
                Add Product
            </button>
        </form>
    );
}

export default ProductForm;
