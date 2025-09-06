import mongoose from "mongoose";

class AppDataSource{
    
    static async connect() {
        await mongoose.connect('mongodb://127.0.0.1:27017/bazaar-db');
    }

    static async disconnect() {
        await mongoose.disconnect();
    }
}

export default AppDataSource;