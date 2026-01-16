import mongoose from "mongoose";

constProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    inStock: Boolean
});
const ProductModel = mongoose.model('Product', ProductProductSchema);
export default ProductModel;
export { ProductSchema };
