import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect('mongodb+srv://askarmomo111:sRuibeSOj8tABsBo@chat-app.arx1wjh.mongodb.net/?retryWrites=true&w=majority&appName=chat-app');
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
