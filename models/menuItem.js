import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    taste: {
        type: String,
        enum: ['sweet', 'spicy', 'sour'],
        require: true
    },
    is_drink: {
        type: Boolean,
        default: false
    }, 
    ingredints: {
        type: [String],
        default: []
    },
    num_sales: {
        type: Number,
        default: 0
    }
})

const MenuItem = mongoose.model('MenuItem', menuItemSchema)
export default MenuItem;
