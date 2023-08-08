import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },  
    desc: {
        type: String,
        required:true
    }

})

export default mongoose.model('Product', productSchema);