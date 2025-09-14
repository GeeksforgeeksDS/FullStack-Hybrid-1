import mongoose from "mongoose";

const dbUrl = process.env.MONGO_DB_URL || "mongodb://127.0.0.1:27017/bazaar-db";

class AppDataSource{
    
    static async connect() {
        console.debug(dbUrl);
        await mongoose.connect(dbUrl);
    }

    static async disconnect() {
        await mongoose.disconnect();
    }
}

export default AppDataSource;