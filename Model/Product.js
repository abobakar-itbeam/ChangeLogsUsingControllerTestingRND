import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
});

const Product = mongoose.model('product', ProductSchema);
export default Product;
