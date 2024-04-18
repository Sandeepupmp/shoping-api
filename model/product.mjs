import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[ true, "Product name must be provided"]
    },
    price:{
        type: Number,
        required: [true, "Product name must be provided"]
    },
    featured:{
        type: Boolean,
        default: 4.5,
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    company:{
        type: String,
        enum:{
            values:['ikea', 'liddy', 'marcos','caressa'],
            message: '{VALUE} is no supported'
        }
    
    }
})

export default mongoose.model('product', productSchema)