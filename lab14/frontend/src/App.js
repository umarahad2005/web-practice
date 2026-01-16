import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

function App() {
    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>E-Commerce CRUD</h1>
            <ProductForm />
            <ProductList />
        </div>
    );
}

export default App;
