const mongoose = require("mongoose");

const dbURL = "mongodb+srv://berrami:1602042006@cluster0.xzpudtm.mongodb.net/learnNodeJSNn?retryWrites=true&w=majority";

// Attempt to connect and list collections
async function testConnection() {
  try {
    await mongoose.connect(dbURL);
    console.log("✅ Connected to MongoDB");

    // Check if the database exists
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log("Collections in DB:", collections.map(c => c.name));

    // Check if "blogs" collection exists
    const blogCollectionExists = collections.some(c => c.name === "blogs");
    console.log(blogCollectionExists ? "✅ 'blogs' collection exists" : "❌ 'blogs' not found");
  } catch (err) {
    console.error("❌ Connection failed:", err.message);
  } finally {
    await mongoose.disconnect();
  }
}

module.exports = testConnection()