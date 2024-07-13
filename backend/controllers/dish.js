import dishModel from "../models/dish.js"


export const getDishes = async (req, res) => {
    try {
        const dishes = await dishModel.find();
        res.status(200).json({
            success: true,
            data: dishes
        })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

export const togglePublishStatus = async (req, res) => {
    try {
        const dishId = req.params.id;
        const updatedDish = await dishModel.findById(dishId);
        if (updatedDish) {
            updatedDish.isPublished = !updatedDish.isPublished;
            await updatedDish.save();
            req.app.get('socketio').emit('dishUpdated', updatedDish);
            res.status(201).json({ success: true, data: updatedDish })
        } else {
            res.status(404).json({ success: false, message: "Dish not found" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}