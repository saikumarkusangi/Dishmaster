import mongoose from "mongoose";

const dishSchema = new mongoose.Schema({
    dishId: { type: Number, unique: true, required: true },
    dishName: { type: String, required: true },
    imageUrl: { type: String, required: true },
    isPublished: { type: Boolean, required: true }
},{
    versionKey:false,
    timestamps:true
});

const dishModel = mongoose.model('Dish', dishSchema);

export default dishModel;