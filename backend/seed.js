import mongoose from "mongoose";
import dbConnection from "./config/db.js";
import dishModel from "./models/dish.js";

const sampleData = [
    {
        "dishName": "Jeera Rice",
        "dishId": "1",
        "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/jeera-rice.jpg",
        "isPublished": true
    },
    {
        "dishName": "Paneer Tikka",
        "dishId": "2",
        "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/paneer-tikka.jpg",
        "isPublished": true
    },
    {
        "dishName": "Rabdi",
        "dishId": "3",
        "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/rabdi.jpg",
        "isPublished": true
    },
    {
        "dishName": "Chicken Biryani",
        "dishId": "4",
        "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/chicken-biryani.jpg",
        "isPublished": true
    },
    {
        "dishName": "Alfredo Pasta",
        "dishId": "5",
        "imageUrl": "https://nosh-assignment.s3.ap-south-1.amazonaws.com/alfredo-pasta.jpg",
        "isPublished": true
    }
];

const seedData = async () => {
    try {
        await dbConnection();
        await dishModel.deleteMany();
        await dishModel.insertMany(sampleData);
        console.log('Database seeded successfully');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding the database', error);
        process.exit(1);
    }
}

seedData()