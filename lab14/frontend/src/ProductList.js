import { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const res = await axios.get("http://localhost:5000/products");
        setProducts(res.data);
    };

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:5000/products/${id}`);
        fetchProducts();
    };

    return (
        <div>
            <h2>Product List</h2>
            {products.length === 0 ? (
                <p>No products found. Add some products!</p>
            ) : (
                products.map(p => (
                    <div key={p._id} style={{ 
                        border: "1px solid #ccc", 
                        padding: "15px", 
                        margin: "10px 0",
                        borderRadius: "5px"
                    }}>
                        <h3>{p.name}</h3>
                        <p>Price: ${p.price}</p>
                        <p>{p.description}</p>
                        <button 
                            onClick={() => deleteProduct(p._id)}
                            style={{ 
                                padding: "8px 16px", 
                                backgroundColor: "#ff4444", 
                                color: "white", 
                                border: "none",
                                cursor: "pointer",
                                borderRadius: "3px"
                            }}
                        >
                            Delete
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default ProductList;
